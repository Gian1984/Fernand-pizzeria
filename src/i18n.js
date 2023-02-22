import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const messages = {



    fr: {
      nav:{
        pizzas:"Pizzas",
        wines:"Vins",
        contact:"Contact",
      },

      header: {
        title: "Je suis le titre",
        subtitle:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        download:"Télécharger carte",
        call:"Appel",
      },

      cta:{
        description:"Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
        button:"DISCOVER",
      },

      short:{
        over:"Savoir faire",
        title:"Made with love",
        subtitle:"Une pâte légère qui repose entre 48 et 72 heures avant d'être utilisée, réalisée avec des ingrédients de haute qualité, pour obtenir une corniche prononcée mais évidée; la cuisson dans un four rotatif combiné gaz / bois à 450°C permet de conserver les saveurs authentiques de la tomate et de la mozzarella fiordilatte.",
      },

      redpizzas:{
        title:"Pizze Rosse",
        subtitle:"Sauce à base de tomate Piennolo, typique de la région vésuvienne de Campanie, elle doit son nom à la manière dont les grappes sont entrelacées pour être conservées. Ils ont une forme ovale mais allongée et un goût typiquement acide.",
        Margherita:"Tomate, Basilic et Mozzarella.",
        Regina:"Tomate, Basilic et Mozzarella de Bufflonne.",
        Principessa:"Tomate, Basilic et Scamorza fumée*. ( Fromage typique italien )",
        Burrata:"Tomate, Basilic, Tomates Datterini, Burratina d'Andria*. ( Sœur de la mozzarella, un tendre fromage au lait de vache avec, en son cœur, une épaisse crème de fromage frais )",
        Marinara:"Tomate, Ail, Origan et Basilic.",
        RucolaReggiano:"Tomate, Mozzarella, Roquette et Parmigiano Reggiano.",
        PorchettaFunghi:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        QuattroStagioni:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Napoli:"Tomate, Mozzarella, Câpres, Filets d'Anchois de Cetara et Origan.",
        Siciliana:"Tomate, Basilic, Mozzarella, Câpres, Filets d'Anchois de Cetara, Olives Noires et Ail.",
        Capricciosa:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Diavola:"Tomate, Basilic, Mozzarella et 'Nduja*. ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
        Crudaiola:"Tomate, Roquette, Culatello*, Copeaux de Grana Padano, Crème Burrata, Tomates Datterini, Basilic et Origan. ( Il s'agit d'un jambon cru salé et séché obtenu à partir de la cuisse de porc )",
        Vegana:"Tomate, Mélange de légumes, Roquette et Tomates séchées.",
        Vegetariana:"Tomate, Mozzarella et Mélange de légumes.",
        Calzone:"Surprise du pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        subtitle:"Expressément conçu sans sauce tomate pour rehausser les saveurs typiques des produits italiens uniques. Une combinaison époustouflante qui ravira vos papilles.",
        SalsicciaFriarelli:"Mozzarella, Basilic, Saucisse and Friarielli*. ( Brocoli-rave ou rapini ).",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        Fresca:"Mozzarella, Tomates datterini jaunes et rouges, Roquette et Copeaux de Parmesan.",
        PatateTartufo:"Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire.",
        Mortadella:"Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano*, Pesto de tomates séchées et Pistaches grillées. ( Fromage traditionnel à base de lait entier de brebis, à pâte pressée cuite )",
        Genovese:"Mozzarella, Pesto Génois, Tomates jaunes et rouges de Piennolo del Vesuvio, Copeaux de Ricotta* et Pignons de pin grillés. ( Fromage à pâte fraîche )"

      },

      secondShort:{
        over:"La vraie pizza",
        title:"Four à bois",
        subtitle:"Design absolument italien depuis plus d'un siècle, excellentes performances, les fours Valoriani sont internationalement reconnus. Certifications et certificats reçus de la Napolitan True Pizza Association, de partenaires tels que Slow Food, Gambero Rosso, Witaly etc...",
      },

      product:{
        over:"Pour une bonne pizza",
        title:"Produits de qualité",
        subtitle:"Pour nous, il est important de servir une pizza de haute qualité. Des produits de haute qualité à des prix abordables pour offrir aux clients un produit final excellent au goût et facile à digérer. Les ingrédients strictement d'origine italienne (et la façon dont ils sont traités) sont, surtout en ce qui concerne la pizza, la partie la plus importante.",
      },

      review:{
        over:"title",
        title:"Votre avis est très important pour nous!",
        subtitle:"Nous vous demandons de laisser un commentaire. Parce que vos commentaires sont notre meilleure publicité. Merci !",
        dateOne:"July 16, 2021",
        revOne:"Meilleure pizza ever. La pate est incroyable et les ingrédients aussi. La Boscaiola est une tuerie avec sa scamorza fumée. Je conseille vivement. Le personnel est super sympa et attentionné même quand il s'agit du rush et que l'on commande à emporter.",
        dateTwo:"July 16, 2021",
        revTwo:"Honnêtement, depuis que j'ai goûté aux succulentes pizzas de Pizza Vino, je ne veux plus manger de pizza dans un autre restaurant. La pâte est délicieuse, cuite à la perfection et les ingrédients sont de qualité et bien mis en valeur. Les assemblages sont savoureux et il y a une carte de suggestions qui change fréquemment.",
        dateThree:"July 16, 2021",
        revThree:"Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon fumé (on le voit avec son étiquette italienne dans le frigo à l'entrée). La pate est fine. Le prix est raisonable vu la qualité des produits.",
      },

      contact:{
        title:"Contact",
        desc:"Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous t'attendons!",
        address:"Address",
        contact:"Contact",
      },

      opening:{
        title:"Opening Hours",
        close:"Closed",
        mon:"Lun",
        tue:"Mar",
        wed:"Mer",
        thu:"Jeu",
        fri:"Ven",
        sat:"Sam",
        sun:"Dim",
      }

    },







    en: {

      nav:{
        pizzas:"Pizzas",
        wines:"Vins",
        contact:"Contact",
      },

      header: {
        title: "I'm the title",
        subtitle:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        download:"Télécharger carte",
        call:"Appel",
      },

      cta:{
        description:"Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
        button:"DISCOVER",
      },

      short:{
        over:"Savoir faire",
        title:"Made with love",
        subtitle:"Une pâte légère qui repose entre 48 et 72 heures avant d'être utilisée, réalisée avec des ingrédients de haute qualité, pour obtenir une corniche prononcée mais évidée; la cuisson dans un four rotatif combiné gaz / bois à 450°C permet de conserver les saveurs authentiques de la tomate et de la mozzarella fiordilatte.",
      },

      redpizzas:{
        title:"Pizze Rosse",
        subtitle:"Sauce à base de tomate Piennolo, typique de la région vésuvienne de Campanie, elle doit son nom à la manière dont les grappes sont entrelacées pour être conservées. Ils ont une forme ovale mais allongée et un goût typiquement acide.",
        Margherita:"Tomate, Basilic et Mozzarella.",
        Regina:"Tomate, Basilic et Mozzarella de Bufflonne.",
        Principessa:"Tomate, Basilic et Scamorza fumée*. ( Fromage typique italien )",
        Burrata:"Tomate, Basilic, Tomates Datterini, Burratina d'Andria*. ( Sœur de la mozzarella, un tendre fromage au lait de vache avec, en son cœur, une épaisse crème de fromage frais )",
        Marinara:"Tomate, Ail, Origan et Basilic.",
        RucolaReggiano:"Tomate, Mozzarella, Roquette et Parmigiano Reggiano.",
        PorchettaFunghi:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        QuattroStagioni:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Napoli:"Tomate, Mozzarella, Câpres, Filets d'Anchois de Cetara et Origan.",
        Siciliana:"Tomate, Basilic, Mozzarella, Câpres, Filets d'Anchois de Cetara, Olives Noires et Ail.",
        Capricciosa:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Diavola:"Tomate, Basilic, Mozzarella et 'Nduja*. ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
        Crudaiola:"Tomate, Roquette, Culatello*, Copeaux de Grana Padano, Crème Burrata, Tomates Datterini, Basilic et Origan. ( Il s'agit d'un jambon cru salé et séché obtenu à partir de la cuisse de porc )",
        Vegana:"Tomate, Mélange de légumes, Roquette et Tomates séchées.",
        Vegetariana:"Tomate, Mozzarella et Mélange de légumes.",
        Calzone:"Surprise du pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        subtitle:"Expressément conçu sans sauce tomate pour rehausser les saveurs typiques des produits italiens uniques. Une combinaison époustouflante qui ravira vos papilles.",
        SalsicciaFriarelli:"Mozzarella, Basilic, Saucisse and Friarielli*. ( Brocoli-rave ou rapini ).",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        Fresca:"Mozzarella, Tomates datterini jaunes et rouges, Roquette et Copeaux de Parmesan.",
        PatateTartufo:"Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire.",
        Mortadella:"Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano*, Pesto de tomates séchées et Pistaches grillées. ( Fromage traditionnel à base de lait entier de brebis, à pâte pressée cuite )",
        Genovese:"Mozzarella, Pesto Génois, Tomates jaunes et rouges de Piennolo del Vesuvio, Copeaux de Ricotta* et Pignons de pin grillés. ( Fromage à pâte fraîche )"

      },

      secondShort:{
        over:"La vraie pizza",
        title:"Four à bois",
        subtitle:"Design absolument italien depuis plus d'un siècle, excellentes performances, les fours Valoriani sont internationalement reconnus. Certifications et certificats reçus de la Napolitan True Pizza Association, de partenaires tels que Slow Food, Gambero Rosso, Witaly etc...",
      },

      product:{
        over:"Pour une bonne pizza",
        title:"Produits de qualité",
        subtitle:"Pour nous, il est important de servir une pizza de haute qualité. Des produits de haute qualité à des prix abordables pour offrir aux clients un produit final excellent au goût et facile à digérer. Les ingrédients strictement d'origine italienne (et la façon dont ils sont traités) sont, surtout en ce qui concerne la pizza, la partie la plus importante.",
      },

      review:{
        over:"title",
        title:"Votre avis est très important pour nous!",
        subtitle:"Nous vous demandons de laisser un commentaire. Parce que vos commentaires sont notre meilleure publicité. Merci !",
        dateOne:"July 16, 2021",
        revOne:"Meilleure pizza ever. La pate est incroyable et les ingrédients aussi. La Boscaiola est une tuerie avec sa scamorza fumée. Je conseille vivement. Le personnel est super sympa et attentionné même quand il s'agit du rush et que l'on commande à emporter.",
        dateTwo:"July 16, 2021",
        revTwo:"Honnêtement, depuis que j'ai goûté aux succulentes pizzas de Pizza Vino, je ne veux plus manger de pizza dans un autre restaurant. La pâte est délicieuse, cuite à la perfection et les ingrédients sont de qualité et bien mis en valeur. Les assemblages sont savoureux et il y a une carte de suggestions qui change fréquemment.",
        dateThree:"July 16, 2021",
        revThree:"Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon fumé (on le voit avec son étiquette italienne dans le frigo à l'entrée). La pate est fine. Le prix est raisonable vu la qualité des produits.",
      },

      contact:{
        title:"Contact",
        desc:"Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous t'attendons!",
        address:"Address",
        contact:"Contact",
      },

      opening:{
        title:"Opening Hours",
        close:"Fermé",
        mon:"Lun",
        tue:"Mar",
        wed:"Mer",
        thu:"Jeu",
        fri:"Ven",
        sat:"Sam",
        sun:"Dim",
      },

    },

    it: {

      nav:{
        pizzas:"Pizzas",
        wines:"Vins",
        contact:"Contact",
      },

      header: {
        title: "Sono il titolo",
        subtitle:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        download:"Télécharger carte",
        call:"Appel",
      },

      cta:{
        description:"Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
        button:"DISCOVER",
      },

      short:{
        over:"Savoir faire",
        title:"Made with love",
        subtitle:"Une pâte légère qui repose entre 48 et 72 heures avant d'être utilisée, réalisée avec des ingrédients de haute qualité, pour obtenir une corniche prononcée mais évidée; la cuisson dans un four rotatif combiné gaz / bois à 450°C permet de conserver les saveurs authentiques de la tomate et de la mozzarella fiordilatte.",
      },

      redpizzas:{
        title:"Pizze Rosse",
        subtitle:"Sauce à base de tomate Piennolo, typique de la région vésuvienne de Campanie, elle doit son nom à la manière dont les grappes sont entrelacées pour être conservées. Ils ont une forme ovale mais allongée et un goût typiquement acide.",
        Margherita:"Tomate, Basilic et Mozzarella.",
        Regina:"Tomate, Basilic et Mozzarella de Bufflonne.",
        Principessa:"Tomate, Basilic et Scamorza fumée*. ( Fromage typique italien )",
        Burrata:"Tomate, Basilic, Tomates Datterini, Burratina d'Andria*. ( Sœur de la mozzarella, un tendre fromage au lait de vache avec, en son cœur, une épaisse crème de fromage frais )",
        Marinara:"Tomate, Ail, Origan et Basilic.",
        RucolaReggiano:"Tomate, Mozzarella, Roquette et Parmigiano Reggiano.",
        PorchettaFunghi:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        QuattroStagioni:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Napoli:"Tomate, Mozzarella, Câpres, Filets d'Anchois de Cetara et Origan.",
        Siciliana:"Tomate, Basilic, Mozzarella, Câpres, Filets d'Anchois de Cetara, Olives Noires et Ail.",
        Capricciosa:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Diavola:"Tomate, Basilic, Mozzarella et 'Nduja*. ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
        Crudaiola:"Tomate, Roquette, Culatello*, Copeaux de Grana Padano, Crème Burrata, Tomates Datterini, Basilic et Origan. ( Il s'agit d'un jambon cru salé et séché obtenu à partir de la cuisse de porc )",
        Vegana:"Tomate, Mélange de légumes, Roquette et Tomates séchées.",
        Vegetariana:"Tomate, Mozzarella et Mélange de légumes.",
        Calzone:"Surprise du pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        subtitle:"Expressément conçu sans sauce tomate pour rehausser les saveurs typiques des produits italiens uniques. Une combinaison époustouflante qui ravira vos papilles.",
        SalsicciaFriarelli:"Mozzarella, Basilic, Saucisse and Friarielli*. ( Brocoli-rave ou rapini ).",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        Fresca:"Mozzarella, Tomates datterini jaunes et rouges, Roquette et Copeaux de Parmesan.",
        PatateTartufo:"Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire.",
        Mortadella:"Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano*, Pesto de tomates séchées et Pistaches grillées. ( Fromage traditionnel à base de lait entier de brebis, à pâte pressée cuite )",
        Genovese:"Mozzarella, Pesto Génois, Tomates jaunes et rouges de Piennolo del Vesuvio, Copeaux de Ricotta* et Pignons de pin grillés. ( Fromage à pâte fraîche )"

      },

      secondShort:{
        over:"La vraie pizza",
        title:"Four à bois",
        subtitle:"Design absolument italien depuis plus d'un siècle, excellentes performances, les fours Valoriani sont internationalement reconnus. Certifications et certificats reçus de la Napolitan True Pizza Association, de partenaires tels que Slow Food, Gambero Rosso, Witaly etc...",
      },

      product:{
        over:"Pour une bonne pizza",
        title:"Produits de qualité",
        subtitle:"Pour nous, il est important de servir une pizza de haute qualité. Des produits de haute qualité à des prix abordables pour offrir aux clients un produit final excellent au goût et facile à digérer. Les ingrédients strictement d'origine italienne (et la façon dont ils sont traités) sont, surtout en ce qui concerne la pizza, la partie la plus importante.",
      },

      review:{
        over:"title",
        title:"Votre avis est très important pour nous!",
        subtitle:"Nous vous demandons de laisser un commentaire. Parce que vos commentaires sont notre meilleure publicité. Merci !",
        dateOne:"July 16, 2021",
        revOne:"Meilleure pizza ever. La pate est incroyable et les ingrédients aussi. La Boscaiola est une tuerie avec sa scamorza fumée. Je conseille vivement. Le personnel est super sympa et attentionné même quand il s'agit du rush et que l'on commande à emporter.",
        dateTwo:"July 16, 2021",
        revTwo:"Honnêtement, depuis que j'ai goûté aux succulentes pizzas de Pizza Vino, je ne veux plus manger de pizza dans un autre restaurant. La pâte est délicieuse, cuite à la perfection et les ingrédients sont de qualité et bien mis en valeur. Les assemblages sont savoureux et il y a une carte de suggestions qui change fréquemment.",
        dateThree:"July 16, 2021",
        revThree:"Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon fumé (on le voit avec son étiquette italienne dans le frigo à l'entrée). La pate est fine. Le prix est raisonable vu la qualité des produits.",
      },

      contact:{
        title:"Contact",
        desc:"Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous t'attendons!",
        address:"Address",
        contact:"Contact",
      },

      opening:{
        title:"Opening Hours",
        close:"Chiuso",
        mon:"LUN",
        tue:"MAR",
        wed:"MER",
        thu:"GIO",
        fri:"VEN",
        sat:"SAB",
        sun:"DOM",
      }

    },


  }


  return messages
}

export default createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'fr',
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'fr',
  messages: loadLocaleMessages()
})
