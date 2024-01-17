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
        home:"Accueil",
        menu:"La carte",
      },

      header: {
        title: "L'Artigiano",
        subtitle:"Work in Progress : Nous nous concentrons sur ce que nous faisons le mieux, en nous consacrant avec passion à la création de pains et de pizzas.",
        download:"Carte",
        call:"Appel",
      },

      redpizzas:{
        title:"Pizze Rosse",
        Margherita:"Tomate, Basilic et Mozzarella.",
        Regina:"Tomate, Basilic et Mozzarella de Bufflonne.",
        Principessa:"Tomate, Basilic et Scamorza fumée*. ( Fromage typique italien )",
        Burrata:"Tomate, Basilic, Tomates Datterini, Burratina d'Andria*. ( Sœur de la mozzarella, un tendre fromage au lait de vache avec, en son cœur, une épaisse crème de fromage frais )",
        Marinara:"Tomate, Ail, Origan et Basilic.",
        RucolaReggiano:"Tomate, Mozzarella, Roquette et Parmigiano Reggiano.",
        PorchettaFunghi:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Napoli:"Tomate, Mozzarella, Câpres, Filets d'Anchois de Cetara et Origan.",
        Siciliana:"Tomate, Basilic, Mozzarella, Câpres, Filets d'Anchois de Cetara, Olives Noires et Ail.",
        Capricciosa:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Diavola:"Tomate, Basilic, Mozzarella et salami piquant",
        Calabrese:"Tomate, Basilic, Scamorza fumée*, Salami épicé, Oignons rouges de Tropea et Olives Noires. ( Fromage typique italien )",
        Boscaiola:"Tomate, Basilic, Scamorza fumée*, Mascarpone, Champignons, Roquette et copeaux de Parmigiano Reggiano. ( Fromage typique italien )",
        BresaolaTartufo:"Tomate, Mozzarella, Roquette, Bresaola de Punta d'Anca, copeaux de Grana Padano* et Truffe Noire. ( Fromage typique italien )",
        Crudaiola:"Tomate, Roquette, Culatello*, Copeaux de Grana Padano, Crème Burrata, Tomates Datterini, Basilic et Origan. ( Il s'agit d'un jambon cru salé et séché obtenu à partir de la cuisse de porc )",
        Vegana:"Tomate, Mélange de légumes, Roquette et Tomates séchées.",
        Vegetariana:"Tomate, Mozzarella et Mélange de légumes.",
        Calzone:"Surprise du pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        SalsicciaFriarelli:"Mozzarella, Basilic, Saucisse and Friarielli*. ( Brocoli-rave ou rapini ).",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        PatateTartufo:"Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire.",
        Mortadella:"Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano*, Pesto de tomates séchées et Pistaches grillées. ( Fromage traditionnel à base de lait entier de brebis, à pâte pressée cuite )",
      },

      maxipizzas:{
        title:"Maxi & slice",
        Margherita:"Tomate, Basilic et Mozzarella.",
        Diavola:"Tomate, Basilic, Mozzarella et salami piquant",
        PorchettaFunghi:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        Suggestione:"Découvrez les suggestions du jour !"
      },

      paninis:{
        title:"Panini",
        subtitle:"Découvrez le goût unique de nos sandwichs, préparés avec du pain frais, cuit quotidiennement et levé pendant 72 heures. Laissez-vous tenter par la fraîcheur de nos ingrédients de saison, soigneusement sélectionnés pour vous offrir des saveurs authentiques et intenses. Nos suggestions vous invitent à explorer de nouveaux délices qui changent périodiquement pour vous surprendre à chaque visite.",
        Italiano: "Jambon cru,pesto génois, mozzarella de bufflonne, pignons de pin, tomates cœur de bœuf.",
        Mortadella:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        Soppressa:"Soppressa vénitienne ( saucisson ), crème d'artichaut, fromage Asiago.",
        Piccante:"Crème 'nduja ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre ), spianata calabra ( Salami épicé ), aubergines grillées, roquette.",
        Vegetariano:"À définir",
        Suggestione:"Découvrez les suggestions du jour !"
      },


      contact:{
        title:"Contact",
        desc:"Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez commander une pizza ou un sandwich ? Cliquez sur le téléphone ! Nous t'attendons!",
        address:"Adresse",
        contact:"Contact",
      },

      opening:{
        title:"Heures d'ouverture",
        close:"Fermé",
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
        home:"Home",
        menu:"Menu",
      },

      header: {
        title: "L'Artigiano",
        subtitle:"Work in Progress : We are focused on doing what we do best, dedicating ourselves with passion to creating bread and pizza.",
        download:"Menu",
        call:"Call",
      },

      redpizzas:{
        title:"Pizze Rosse",
        Margherita:"Tomato, Basil and Mozzarella.",
        Regina:"Tomato, Basil and Mozzarella di Bufala.",
        Principessa:"Tomato, Basil and Smoked Scamorza Cheese.",
        Burrata:"Tomato, Basil, Burratina d'Andria and Red Datterini Tomatoes.",
        Marinara:"Tomato, Garlic, Oregano and Basil.",
        RucolaReggiano:"Tomato, Mozzarella, Rocket and Parmigiano Reggiano Cheese.",
        PorchettaFunghi:"Tomato, Basil, Mozzarella, Porchetta d'Ariccia and Mushrooms.",
        Napoli:"Tomato, Mozzarella, Capers, Cetara Anchovy Fillets and Oregano.",
        Siciliana:"Tomato, Basil, Mozzarella, Capers, Cetara Anchovy Fillets, Black Olives and Garlic.",
        Capricciosa:"Tomato, Basil, Mozzarella, Porchetta d'Ariccia, Mushrooms, Black Olives and Baked Artichokes.",
        Diavola:"Tomato, Basil, Mozzarella and spicy salami",
        Calabrese:"Tomato, Basil, Smoked Scamorza Cheese, Spicy Salami, Tropea Red Onions and Black Olives.",
        Boscaiola:"Tomato, Basil, Smoked Scamorza Cheese, Mascarpone, Mushrooms, Rocket and Parmigiano Reggiano Cheese flakes.",
        BresaolaTartufo:"Tomato, Mozzarella, Rocket, Punta d'Anca Bresaola, Parmigiano Reggiano Cheese flakes and Black Truffle.",
        Crudaiola:"Tomato, Rocket, Culatello, Parmigiano Reggiano Cheese flakes, Burrata Cream, Datterini Tomatoes, Basil and Oregano.",
        Vegana:"Tomato, Mix of Vegetables, Rocket and Dried Tomatoes.",
        Vegetariana:"Tomato, Mozzarella and a Mix of Vegetables.",
        Calzone:"The \"Pizzaiolo\" will surprise you!.",
      },

      whitepizzas:{
        title:"Pizze bianche",
        SalsicciaFriarelli:"Fior di latte, Basil, Sausage and Friarielli*. ( Neapolitan Broccoli )",
        QuattroFormaggi:"Fior di latte, Smoked Scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano Cheese and Basil.",
        PatateTartufo:"Fior di latte, Basil, boiled Potatoes and Black Truffle.",
        Mortadella:"Fior di latte, Rocket, Mortadella, Pecorino Romano cheese flakes, Dried Tomato Pesto and Toasted Pistachios.",
      },

      maxipizzas:{
        title:"Maxi & slice",
        Italiano:"Raw ham, buffalo mozzarella, pine nuts, beef heart tomatoes.",
        Diavola:"Tomato, Basil, Mozzarella and spicy salami",
        PorchettaFunghi:"Tomato, Basil, Mozzarella, Porchetta d'Ariccia and Mushrooms.",
        QuattroFormaggi:"Fior di latte, Smoked Scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano Cheese and Basil.",
        Suggestione:"Discover the suggestions of the day!",
      },

      paninis:{
        title:"Paninis",
        subtitle:"Discover the unique taste of our sandwiches, made with fresh bread, baked daily and leavened for 72 hours. Let yourself be tempted by the freshness of our seasonal ingredients, carefully selected to offer you authentic and intense flavours. Our suggestions invite you to explore new delights that change periodically to surprise you on every visit.",
        Italiano:"Raw ham, pesto genovese, buffalo mozzarella, pine nuts, beef heart tomatoes.",
        Mortadella:"Mortadella, burrata stracciatella ( kind of creamy mozzarella ), dried tomatoes, rocket, pistachio",
        Soppressa:"Venetian soppressa(salami), artichoke cream, Asiago cheese.",
        Piccante:"Nduja cream ( Spicy, spreadable pork sausage from the region of Calabria ), spianate piccante ( spicy salami ), grilled aubergines, rocket.",
        Vegetariano:"to define",
        Suggestione:"Discover the suggestions of the day!",
      },

      contact:{
        title:"Contact",
        desc:"Click on the icons to find us on a map or over the social media. Do you want to order a pizza or a sandwich? Click on the phone! We are waiting for you!",
        address:"Address",
        contact:"Contact",
      },

      opening:{
        title:"Opening Hours",
        close:"Closed",
        mon:"Mon",
        tue:"Tue",
        wed:"Wed",
        thu:"Thu",
        fri:"Fri",
        sat:"Sat",
        sun:"Sun",
      },

    },

    it: {

      nav:{
        home:"Home",
        menu:"Menu",
      },

      header: {
        title: "L'Artigiano",
        subtitle:"Work in Progress : Siamo concentrati sul fare ciò che ci riesce meglio, dedicandoci con passione alla creazione di pane e pizza",
        download:"Menu",
        call:"Chiama",
      },

      redpizzas:{
        title:"Pizze Rosse",
        Margherita:"Pomodoro, basilico e fior di latte.",
        Regina:"Pomodoro, basilico e mozzarella di bufala.",
        Principessa:"Pomodoro, basilico e scamorza affumicata.",
        Burrata:"Pomodoro, basilico, burratina d'Andria e datterini.",
        Marinara:"Pomodoro, aglio, origano e basilico.",
        RucolaReggiano:"Pomodoro, fior di latte, rucola e Parmigiano Reggiano.",
        PorchettaFunghi:"Pomodoro, basilico, fior di latte, porchetta d'Ariccia e funghi.",
        Napoli:"Pomodoro, fior di latte, capperi, filetti di alici di Cetara e origano.",
        Siciliana:"Pomodoro, basilico, fior di latte, capperi, filetti di alici di Cetara, olive nere e aglio.",
        Capricciosa:"Pomodoro, basilico, fior di latte, porchetta d'Ariccia, funghi, olive nere e carciofi al forno.",
        Diavola:"Pomodoro, basilico, fior di latte e salamino piccante.",
        Calabrese:"Pomodoro, basilico, scamorza affumicata, salamino piccante, cipolle rosse di Tropea e olive nere.",
        Boscaiola:"Pomodoro, basilico, scamorza affumicata, mascarpone, funghi, rucola e scaglie di grana.",
        BresaolaTartufo:"Pomodoro, fior di latte, rucola, bresaola Punta d'Anca, scaglie di grana e tartufo nero.",
        Crudaiola:"Pomodoro, rucola, culatello, scaglie di grana, crema di burrata, datterini, basilico ed origano.",
        Vegana:"Pomodoro, mix di verdure, rucola e pomodori secchi",
        Vegetariana:"Pomodoro, fior di latte e mix di verdure.",
        Calzone:"Sorpresa del pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        SalsicciaFriarelli:"Fior di latte, basilico, salsiccia e friarielli Napoletani.",
        QuattroFormaggi:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        PatateTartufo:"Fior di latte, basilico, patate lesse e tartufo nero.",
        Mortadella:"Fior di latte, rucola, mortadella, scaglie di pecorino Romano, pesto di pomodori secchi e pistacchi tostati.",
      },

      maxipizzas:{
        title:"Maxi & slice",
        Margherita:"Pomodoro, basilico e fior di latte.",
        Diavola:"Pomodoro, basilico, fior di latte e salamino piccante.",
        PorchettaFunghi:"Pomodoro, basilico, fior di latte, porchetta d'Ariccia e funghi.",
        QuattroFormaggi:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        Suggestione:"Scopri le suggestioni del giorno!"

      },

      paninis:{
        title:"Panini",
        subtitle:"Scoprite il gusto unico dei nostri panini, preparati con pane fresco, cotto giornalmente e lievitato per 72 ore. Lasciatevi tentare dalla freschezza dei nostri ingredienti stagionali, accuratamente selezionati per offrirvi sapori autentici e intensi. Le nostre suggestioni vi invitano a esplorare nuove delizie che variano periodicamente per sorprendervi ad ogni visita.",
        Italiano:"Prosciutto crudo, pesto genovese, mozzarella di bufala, pinoli, pomodori cuore di bue.",
        Mortadella:"Mortadella, stracciatella di burrata, pomodori secchi, rucola, pistacchio",
        Soppressa:"Soppressa veneta, crema di carciofi, formaggio asiago.",
        Piccante:"Crema di 'nduja, spianata calabra, melanzane grigliate, rucola.",
        Vegetariano:"Fior di latte, pesto alla genovese, pomodorini gialli e rossi del Piennolo del Vesuvio, ricottan scaglie di grana e pinoli tostati.",
        Suggestione:"",
      },


      review:{
        over:"tripadvisor",
        title:"La tua opinione conta!",
        subtitle:"Ti chiediamo di lasciare un commento. Perché i tuoi commenti sono la nostra migliore pubblicità. Grazie!",
        dateOne:"July 16, 2021",
        revOne:"Un’esperienza unica davvero, ho provato tante pizzeria di Bruxelles ma questa non ha niente a vedere con le altre. Tutto in bella vista, prodotti di alta qualità, esteticamente ti fa sentire a casa il locale e il personale molto simpatico..",
        dateTwo:"July 16, 2021",
        revTwo:"Ristorante tipico italiano, bellissimo ! Erano le migliori pizze che abbiamo mangiato nella nostra vita, con prodotti freschi ! Il servizio è stato perfetto, il cameriere era così gentile, carino! Possibile mangiare vegan ! Ancora grazie di tutto ! Era davvero delizioso ! Ci vediamo presto.",
        dateThree:"July 16, 2021",
        revThree:"Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon fumé (on le voit avec son étiquette italienne dans le frigo à l'entrée). La pate est fine. Le prix est raisonable vu la qualité des produits.",
      },

      contact:{
        title:"Contatti",
        desc:"Clicca sulle icone per trovarci sulla mappa o sui social media. Vuoi ordinare una pizza o un panino? Clicca sul telefono! Ti stiamo aspettando!",
        address:"Indirizzo",
        contact:"Contatto",
      },

      opening:{
        title:"Orari di apertura",
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
