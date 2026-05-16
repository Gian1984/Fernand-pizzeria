<?php
/**
 * Genera le immagini Open Graph del sito: sfondo nero + logo dell'hero
 * (lo stesso logo grande della home) centrato.
 *
 * Uso:  php scripts/generate-og.php
 *
 * Sorgente: public/img/seo/logoartigiano_1500.png (logo PNG con trasparenza).
 * Output:   public/img/seo/og-*.png
 *
 * Le immagini generate sono referenziate da app/composables/useSeo.js
 * (og:image / twitter:image e JSON-LD "image").
 */

$root   = dirname(__DIR__);
$source = $root . '/public/img/seo/logoartigiano_1500.png';
$outDir = $root . '/public/img/seo';

// [nome file, larghezza, altezza, quota del lato corto occupata dal logo]
$targets = [
    // 1.91:1 — og:image / twitter:image (card social: FB, LinkedIn, X, WhatsApp)
    ['og-default.png',  1200, 630,  0.78],
    // 1:1 — schema.org Restaurant "image" (Google preferisce immagini grandi ~quadrate)
    ['og-square.png',   1200, 1200, 0.80],
];

if (!extension_loaded('gd')) {
    fwrite(STDERR, "Errore: estensione GD non disponibile.\n");
    exit(1);
}
if (!is_file($source)) {
    fwrite(STDERR, "Errore: logo sorgente non trovato: $source\n");
    exit(1);
}

$logo = imagecreatefrompng($source);
if ($logo === false) {
    fwrite(STDERR, "Errore: impossibile leggere il PNG sorgente.\n");
    exit(1);
}
$logoW = imagesx($logo);
$logoH = imagesy($logo);

foreach ($targets as [$name, $w, $h, $ratio]) {
    $canvas = imagecreatetruecolor($w, $h);

    // Sfondo nero pieno.
    $black = imagecolorallocate($canvas, 0, 0, 0);
    imagefilledrectangle($canvas, 0, 0, $w, $h, $black);

    // Compone il logo (con trasparenza) sopra il nero.
    imagealphablending($canvas, true);
    imagesavealpha($canvas, false);

    // Scala il logo per stare dentro un riquadro = quota del lato più corto.
    $box   = (int) round(min($w, $h) * $ratio);
    $scale = min($box / $logoW, $box / $logoH);
    $drawW = (int) round($logoW * $scale);
    $drawH = (int) round($logoH * $scale);
    $dstX  = (int) round(($w - $drawW) / 2);
    $dstY  = (int) round(($h - $drawH) / 2);

    imagecopyresampled(
        $canvas, $logo,
        $dstX, $dstY, 0, 0,
        $drawW, $drawH, $logoW, $logoH
    );

    $outPath = $outDir . '/' . $name;
    if (!imagepng($canvas, $outPath, 9)) {
        fwrite(STDERR, "Errore: scrittura fallita: $outPath\n");
        exit(1);
    }
    echo "Generata {$name}  ({$w}x{$h})\n";
}

echo "Fatto.\n";
