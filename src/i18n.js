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
        Margherita:"Tomate, basilic et mozzarella.",
        Regina:"Tomate, basilic et mozzarella de bufflonne.",
        Principessa:"Tomate, basilic et scamorza fumée*. ( Fromage typique italien )",
        Burrata:"Tomate, basilic, tomates datterini, burratina d'Andria*. ( Sœur de la mozzarella, un tendre fromage au lait de vache avec, en son cœur, une épaisse crème de fromage frais )",
        Marinara:"Tomate, ail, origan et basilic.",
        RucolaReggiano:"Tomate, mozzarella, roquette et Parmigiano Reggiano.",
        ProsciuttoFunghi:"Tomate, basilic, mozzarella, jambon cuit et champignons.",
        Napoli:"Tomate, mozzarella, câpres, filets d'anchois de Cetara et origan.",
        Siciliana:"Tomate, basilic, mozzarella, câpres, filets d'anchois de Cetara, olives noires et ail.",
        Capricciosa:"Tomate, basilic, mozzarella, jambon cuit, champignons, olives noires et artichauts au four.",
        Diavola:"Tomate, basilic, mozzarella et salami piquant",
        Diavola2:"Tomate, basilic, mozzarella, salami piquant, 'nduja*, fromage scamorza fumé, basilic (* Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
        Calabrese:"Tomate, basilic, scamorza fumée*, Salami épicé, oignons rouges de Tropea et olives noires. ( Fromage typique italien )",
        Boscaiola:"Tomate, basilic, scamorza fumée*, mascarpone, champignons, roquette et copeaux de Parmigiano Reggiano. ( Fromage typique italien )",
        BresaolaTartufo:"Tomate, mozzarella, roquette, bresaola de Punta d'Anca, copeaux de Grana Padano* et truffe noire. ( Fromage typique italien )",
        Crudaiola:"Tomate, Roquette, jambon de Parme, copeaux de Grana Padano, crème Burrata, tomates datterini, basilic et origan.",
        Vegana:"Tomate, Mélange de légumes, roquette et tomates séchées.",
        Vegetariana:"Tomate, mozzarella et mélange de légumes.",
        Calzone:"Surprise du pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        SalsicciaFriarelli:"Mozzarella, basilic, saucisse and friarielli*. ( Brocoli sauvage ).",
        QuattroFormaggi:"Mozzarella, scamorza fumée, Gorgonzola, copeaux de parmesan et basilic.",
        PatateTartufo:"Mozzarella, basilic, pommes de terre bouillies et truffe noire.",
        Mortadella:"Mozzarella, roquette, mortadelle à la pistache, flocons de Grana Padano, tomates cerises, granulés de pistache.",
      },

      maxipizzas:{
        title:"Maxi & slice",
        Margherita:"Tomate, basilic et mozzarella.",
        Diavola:"Tomate, basilic, mozzarella et salami piquant",
        ProsciuttoFunghi:"Tomate, basilic, mozzarella, jambon cuit et champignons.",
        QuattroFormaggi:"Mozzarella, scamorza fumée, Gorgonzola, copeaux de parmesan et basilic.",
        Suggestione:"Découvrez les suggestions du jour !"
      },

      paninis:{
        title:"Ciabatta",
        info: "Sandwich typique italien",
        subtitle:"Découvrez le goût unique de nos sandwichs, préparés avec du pain frais, cuit quotidiennement et levé pendant 72 heures. Laissez-vous tenter par la fraîcheur de nos ingrédients de saison, soigneusement sélectionnés pour vous offrir des saveurs authentiques et intenses. Nos suggestions vous invitent à explorer de nouveaux délices qui changent périodiquement pour vous surprendre à chaque visite.",
        Finocchiona:"Salami finocchiona, roquette, fromage pecorino romain, artichauts.",
        Speck:"Speck fumé, gorgonzola, roquette, noix, crème de radicchio.",
        Piccante:"Crema di 'nduja*, spianata calabra, aubergines grillées, fromage provola fumé. (* Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
        Tricolore: "Jambon de Parme, mozzarella de buffle, tranches de tomates, pesto genovese fait maison.",
        Vegetariano:"Aubergines grillées, courgettes grillées, fromage provola fumé, roquette, tomates semi-séchées.",
        BresaolaTartufo:"Bresaola punda d'Anca, roquette, copeaux de parmesan, noix, truffe noire.",
        Mortadella:"Mortadelle, burratina pugliese, granola à la pistache et crème à la pistache.",
        Caprese:"Tranches de tomates, mozzarella de buffle, pesto genovese fait maison, basilic frais.",
        Cotto:"Jambon cuit, champignons sautés, fromage fontina..",
        Dolce:"Nutella et pistache",
        Vegan:"Aubergines et courgettes grillées, champignons sautés, roquette, tomates semi-séchées",
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
        Margherita:"Tomato, basil and mozzarella.",
        Regina:"Tomato, basil and mozzarella di bufala.",
        Principessa:"Tomato, Basil and Smoked Scamorza Cheese.",
        Burrata:"Tomato, basil, burratina d'Andria and red datterini tomatoes.",
        Marinara:"Tomato, garlic, oregano and basil.",
        RucolaReggiano:"Tomato, mozzarella, rocket and Parmigiano Reggiano cheese.",
        ProsciuttoFunghi:"Tomato, basil, mozzarella,ham and mushrooms.",
        Napoli:"Tomato, mozzarella, capers, Cetara anchovy fillets and oregano.",
        Siciliana:"Tomato, basil, mozzarella, capers, Cetara anchovy fillets, black olives and garlic.",
        Capricciosa:"Tomato, basil, mozzarella, ham, mushrooms, black olives and baked artichokes.",
        Diavola:"Tomato, basil, mozzarella and spicy salami.",
        Diavola2:"Tomato, basil, mozzarella and spicy salami, 'nduja*, scamorza smoked cheese, basil ( Pork sausage spiced with chilli made in Italy. )",
        Calabrese:"Tomato, basil, smoked scamorza cheese, spicy Salami, Tropea red onions and black olives.",
        Boscaiola:"Tomato, basil, smoked scamorza cheese, mascarpone, mushrooms, rocket and Parmigiano Reggiano cheese flakes.",
        BresaolaTartufo:"Tomato, mozzarella, rocket, Punta d'Anca Bresaola, Parmigiano Reggiano cheese flakes and black truffle.",
        Crudaiola:"Tomato, rocket, Parma ham, Parmigiano Reggiano cheese flakes, burrata Cream, datterini tomatoes, basil and oregano.",
        Vegana:"Tomato, mix of Vegetables, rocket and dried tomatoes.",
        Vegetariana:"Tomato, mozzarella and a mix of vegetables.",
        Calzone:"The \"Pizzaiolo\" will surprise you!.",
      },

      whitepizzas:{
        title:"Pizze bianche",
        SalsicciaFriarelli:"Fior di latte, basil, sausage and friarielli*. ( Broccoli sauvage )",
        QuattroFormaggi:"Fior di latte, smoked scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano cheese and basil.",
        PatateTartufo:"Fior di latte, basil, boiled potatoes and black truffle.",
        Mortadella:"Mozzarella, rocket, pistachio mortadella, Grana Padano flakes, cherry tomatoes, pistachio granules.",
      },

      maxipizzas:{
        title:"Maxi & slice",
        Italiano:"Raw ham, buffalo mozzarella, pine nuts, beef heart tomatoes.",
        Diavola:"Tomato, Basil, Mozzarella and spicy salami",
        ProsciuttoFunghi:"Tomato, basil, mozzarella, ham and mushrooms.",
        QuattroFormaggi:"Fior di latte, smoked scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano cheese and basil.",
        Suggestione:"Discover the suggestions of the day!",
      },

      paninis:{
        title:"Ciabatta",
        info: "Typical Italian sandwich",
        subtitle:"Discover the unique taste of our sandwiches, made with fresh bread, baked daily and leavened for 72 hours. Let yourself be tempted by the freshness of our seasonal ingredients, carefully selected to offer you authentic and intense flavours. Our suggestions invite you to explore new delights that change periodically to surprise you on every visit.",
        Finocchiona:"Finocchiona salami, rocket, Roman pecorino cheese, artichokes.",
        Speck:"Smoked speck, gorgonzola, rocket, walnuts, radicchio cream.",
        Piccante:"Crema di 'nduja*, spianata calabra, grilled aubergines, smoked provola cheese.( Pork sausage spiced with chilli made in Italy. )",
        Tricolore: "Parma ham, buffalo mozzarella, sliced tomato, home-made pesto genovese.",
        Vegetariano:"Grilled aubergines, grilled courgettes, smoked provola cheese, rocket, semi-dried tomatoes.",
        BresaolaTartufo:"Bresaola punda d'Anca, rocket, parmesan flakes, walnuts, black truffle.",
        Mortadella:"Mortadella, burratina pugliese, pistachio granola and pistachio cream.",
        Caprese:"Sliced tomato, buffalo mozzarella, home-made pesto genovese, fresh basil.",
        Cotto:"Ham, sautéed mushrooms, fontina cheese.",
        Dolce:"Nutella and pistachio",
        Vegan:"Grilled aubergines and courgettes, sautéed mushrooms, rocket, semi-dried tomatoes",
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
        ProsciuttoFunghi:"Pomodoro, basilico, fior di latte, prosciutto cotto e funghi.",
        Napoli:"Pomodoro, fior di latte, capperi, filetti di alici di Cetara e origano.",
        Siciliana:"Pomodoro, basilico, fior di latte, capperi, filetti di alici di Cetara, olive nere e aglio.",
        Capricciosa:"Pomodoro, basilico, fior di latte, prosciutto cotto, funghi, olive nere e carciofi al forno.",
        Diavola:"Pomodoro, basilico, fior di latte e salamino piccante.",
        Diavola2:"Pomodoro, basilico, fior di latte, salamino piccante, 'nduja*, scamorza affumicata, basilico",
        Calabrese:"Pomodoro, basilico, scamorza affumicata, salamino piccante, cipolle rosse di Tropea e olive nere.",
        Boscaiola:"Pomodoro, basilico, scamorza affumicata, mascarpone, funghi, rucola e scaglie di grana.",
        BresaolaTartufo:"Pomodoro, fior di latte, rucola, bresaola Punta d'Anca, scaglie di grana e tartufo nero.",
        Crudaiola:"Pomodoro, rucola, prosciutto crudo di Parma, scaglie di grana, crema di burrata, datterini, basilico ed origano.",
        Vegana:"Pomodoro, mix di verdure, rucola e pomodori secchi",
        Vegetariana:"Pomodoro, fior di latte e mix di verdure.",
        Calzone:"Sorpresa del pizzaiolo!",
      },

      whitepizzas:{
        title:"Pizze bianche",
        SalsicciaFriarelli:"Fior di latte, basilico, salsiccia e friarielli Napoletani.",
        QuattroFormaggi:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        PatateTartufo:"Fior di latte, basilico, patate lesse e tartufo nero.",
        Mortadella:"Mozzarella, rucola, mortadella al pistacchio, scaglie di Grana Padano, pomodorini, granella di pistacchio.",
      },

      maxipizzas:{
        title:"Maxi & slice",
        Margherita:"Pomodoro, basilico e fior di latte.",
        Diavola:"Pomodoro, basilico, fior di latte e salamino piccante.",
        ProsciuttoFunghi:"Pomodoro, basilico, fior di latte, prosciutto cotto e funghi.",
        QuattroFormaggi:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        Suggestione:"Scopri le suggestioni del giorno!"

      },

      paninis:{
        title:"Panini",
        info: "",
        subtitle:"Scoprite il gusto unico dei nostri panini, preparati con pane fresco, cotto giornalmente e lievitato per 72 ore. Lasciatevi tentare dalla freschezza dei nostri ingredienti stagionali, accuratamente selezionati per offrirvi sapori autentici e intensi. Le nostre suggestioni vi invitano a esplorare nuove delizie che variano periodicamente per sorprendervi ad ogni visita.",
        Finocchiona:"Salame Finocchiona, rucola, pecorino romano, carciofi.",
        Speck:"Speck affumicato, gorgonzola, rucola, noci, crema di radicchio.",
        Piccante:"Crema di 'nduja, spianata calabra, melanzane grigliate, provola affumicata.",
        Tricolore: "Prosciutto crudo di Parma, mozzarella di bufala, pomodoro a fette, pesto genovese home-made.",
        Vegetariano:"Melanzane grigliate, zucchine grigliate, provola affumicata, rucola, pomodori semi-dry.",
        BresaolaTartufo:"Bresaola punda d'Anca, rucola, scaglie di grana, noci, tartufo nero.",
        Mortadella:"Mortadella, burratina pugliese, granella di pistacchio e crema di pistacchio",
        Caprese:"Pomodoro a fette, mozzarella di bufala, pesto genovese home-made, basilico fresco.",
        Cotto:"Prosciutto cotto, funghi saltati, fontina.",
        Dolce:"Nutella e pistacchio",
        Vegan:"Melanzane e zucchine grigliate, funghi saltati, rucola, pomodori semi-dry",
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
