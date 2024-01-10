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
        title: "L'Artigiano",
        subtitle:"72 heures à lever, un moment pour tomber amoureux !",
        download:"Télécharger carte",
        call:"Appel",
      },

      cta:{
        description:"Au cœur d'Ixelles, notre pizzeria offre une expérience italienne authentique avec une pâte levée pendant 72 heures, garantissant une légèreté et une digestibilité uniques. Chaque pizza est une œuvre d'art, créée avec des produits de la plus haute qualité et travaillée avec amour et dévouement pour apporter un goût d'Italie dans l'assiette de chaque client. Venez découvrir le vrai goût de la tradition italienne !",
        button:"Pizza Vino",
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
        Napoli:"Tomate, Mozzarella, Câpres, Filets d'Anchois de Cetara et Origan.",
        Siciliana:"Tomate, Basilic, Mozzarella, Câpres, Filets d'Anchois de Cetara, Olives Noires et Ail.",
        Capricciosa:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia*, Champignons, Olives Noires et Artichauts au four. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        Diavola:"Tomate, Basilic, Mozzarella et 'Nduja*. ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
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
        subtitle:"Expressément conçu sans sauce tomate pour rehausser les saveurs typiques des produits italiens uniques. Une combinaison époustouflante qui ravira vos papilles.",
        SalsicciaFriarelli:"Mozzarella, Basilic, Saucisse and Friarielli*. ( Brocoli-rave ou rapini ).",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        PatateTartufo:"Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire.",
        Mortadella:"Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano*, Pesto de tomates séchées et Pistaches grillées. ( Fromage traditionnel à base de lait entier de brebis, à pâte pressée cuite )",
        Genovese:"Mozzarella, Pesto Génois, Tomates jaunes et rouges de Piennolo del Vesuvio, Copeaux de Ricotta* et Pignons de pin grillés. ( Fromage à pâte fraîche )"

      },

      maxipizzas:{
        title:"Maxi & slice",
        subtitle:"Savourez notre maxi pizza de 50 cm : idéale pour partager des moments savoureux entre amis ou au bureau. Ne manquez pas l'occasion de profiter d'un déjeuner convivial ou d'une pause détente avec nos parts de pizza, idéales pour ceux qui sont pressés mais qui ne veulent pas renoncer à la saveur et à la qualité authentiques.",
        Margherita:"Tomate, Basilic et Mozzarella.",
        Diavola:"Tomate, Basilic, Mozzarella et 'Nduja*. ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre )",
        PorchettaFunghi:"Tomate, Basilic, Mozzarella, Porchetta d'Ariccia* et Champignons. ( Charcuterie à base de porc rôti aux épices préparée traditionnellement sur l'ensemble du territoire la commune d'Ariccia )",
        QuattroFormaggi:"Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic.",
        Suggestione:"Découvrez les suggestions du jour !"
      },

      paninis:{
        title:"Panini",
        subtitle:"Découvrez le goût unique de nos sandwichs, préparés avec du pain frais, cuit quotidiennement et levé pendant 72 heures. Laissez-vous tenter par la fraîcheur de nos ingrédients de saison, soigneusement sélectionnés pour vous offrir des saveurs authentiques et intenses. Outre les classiques, nos suggestions vous invitent à explorer de nouveaux délices qui changent périodiquement pour vous surprendre à chaque visite.",
        Italiano: "Jambon cru,pesto génois, mozzarella de bufflonne, pignons de pin, tomates cœur de bœuf.",
        Mortadella:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        Soppressa:"Soppressa vénitienne ( saucisson ), crème d'artichaut, fromage Asiago.",
        Piccante:"Crème 'nduja ( Saucisse de porc épicée avec du piment fabriquée en Italie, à l'origine en Calabre ), spianata calabra ( Salami épicé ), aubergines grillées, roquette.",
        Vegetariano:"À définir",
        Suggestione:"Découvrez les suggestions du jour !"
      },

      secondShort:{
        over:"La vraie pizza",
        title:"Four à bois",
        subtitle:"Design absolument italien depuis plus d'un siècle, excellentes performances, les fours Valoriani sont internationalement reconnus. Certifications et certificats reçus de la Napolitan True Pizza Association, de partenaires tels que Slow Food, Gambero Rosso, Witaly etc...",
      },

      product:{
        over:"Pour une excellente pizza",
        title:"Produits de qualité",
        subtitle:"Pour nous, il est important de servir une pizza de haute qualité. Des produits de haute qualité à des prix abordables pour offrir aux clients un produit final excellent au goût et facile à digérer. Les ingrédients strictement d'origine italienne (et la façon dont ils sont traités) sont, surtout en ce qui concerne la pizza, la partie la plus importante.",
      },

      review:{
        over:"tripadvisor",
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
        pizzas:"Pizzas",
        wines:"Wines",
        contact:"Contact",
      },

      header: {
        title: "L'Artigiano",
        subtitle:"72 hours of leavening, a moment to fall in love!",
        download:"Download menu",
        call:"Call",
      },

      cta:{
        description:"In the heart of Ixelles, our pizzeria offers an authentic Italian experience with dough leavened for 72 hours, guaranteeing unique lightness and digestibility. Each pizza is a work of art, created with the highest quality products and processed with love and dedication to bring a taste of Italy to each customer's plate. Come and discover the true taste of Italian tradition!",
        button:"Pizza Vino",
      },

      short:{
        over:"Know-how",
        title:"Made with love",
        subtitle:"A light dough that rests between 48 and 72 hours before being used, made with high quality ingredients, to obtain a pronounced but hollowed out cornice; cooking in a combined gas / wood rotary oven at 450 ° C allows to preserve the authentic flavors of tomato and fiordilatte mozzarella.",
      },

      redpizzas:{
        title:"Pizze Rosse",
        subtitle:"Sauce made with Piennolo tomato, typical of the Vesuvian area of Campania, it owes its name to the way in which the tomato clusters are intertwined to be preserved. They have an oval but elongated shape and a typically sour taste.",
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
        Diavola:"Tomato, Basil, Mozzarella and 'Nduja*. ( Spicy, spreadable pork sausage from the region of Calabria )",
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
        subtitle:"Expressly designed without tomato sauce to enhance the typical flavors of unique Italian products. An amazing combination that will tickle your taste buds.",
        SalsicciaFriarelli:"Fior di latte, Basil, Sausage and Friarielli*. ( Neapolitan Broccoli )",
        QuattroFormaggi:"Fior di latte, Smoked Scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano Cheese and Basil.",
        PatateTartufo:"Fior di latte, Basil, boiled Potatoes and Black Truffle.",
        Mortadella:"Fior di latte, Rocket, Mortadella, Pecorino Romano cheese flakes, Dried Tomato Pesto and Toasted Pistachios.",
        Genovese:"Fior di latte, Genoese Pesto, yellow and red Tomatoes from \"Piennolo del Vesuvio\", Ricotta cheese flakes and Toasted Pine Nuts."

      },

      maxipizzas:{
        title:"Maxi & slice",
        subtitle:"Enjoy our 50 cm maxi pizza: perfect for sharing tasty moments with friends or at the office. Don't miss the opportunity to enjoy a convivial lunch or a leisurely break with our pizza slices, ideal for those who are in a hurry but don't want to give up authentic flavour and quality.",
        Italiano:"Raw ham, buffalo mozzarella, pine nuts, beef heart tomatoes.",
        Diavola:"Tomato, Basil, Mozzarella and 'Nduja*. ( Spicy, spreadable pork sausage from the region of Calabria )",
        PorchettaFunghi:"Tomato, Basil, Mozzarella, Porchetta d'Ariccia and Mushrooms.",
        QuattroFormaggi:"Fior di latte, Smoked Scamorza cheese, Gorgonzola cheese, Parmigiano Reggiano Cheese and Basil.",
        Suggestione:"Discover the suggestions of the day!",
      },

      paninis:{
        title:"Paninis",
        subtitle:"Discover the unique taste of our sandwiches, made with fresh bread, baked daily and leavened for 72 hours. Let yourself be tempted by the freshness of our seasonal ingredients, carefully selected to offer you authentic and intense flavours. In addition to the classics, our suggestions invite you to explore new delights that change periodically to surprise you on every visit.",
        Italiano:"Raw ham, pesto genovese, buffalo mozzarella, pine nuts, beef heart tomatoes.",
        Mortadella:"Mortadella, burrata stracciatella ( kind of creamy mozzarella ), dried tomatoes, rocket, pistachio",
        Soppressa:"Venetian soppressa(salami), artichoke cream, Asiago cheese.",
        Piccante:"Nduja cream ( Spicy, spreadable pork sausage from the region of Calabria ), spianate piccante ( spicy salami ), grilled aubergines, rocket.",
        Vegetariano:"to define",
        Suggestione:"Discover the suggestions of the day!",
      },

      secondShort:{
        over:"The true pizza",
        title:"Wood-fired oven",
        subtitle:"Absolutely Italian design for more than a century, excellent performance, Valoriani ovens are internationally recognized. Certifications and certificates received from the Neapolitan True Pizza Association, from partners such as Slow Food, Gambero Rosso, Witaly etc...",
      },

      product:{
        over:"For a good pizza",
        title:"Quality products",
        subtitle:"For us it is important to serve a high quality pizza. High quality products at affordable prices to give customers a final product that is excellent to taste and easy to digest. The ingredients only Made in Italy (and the way they are processed) are, especially with regards to pizza, the most important part.",
      },

      review:{
        over:"tripadvisor",
        title:"Your opinion is important to us!",
        subtitle:"Leave a comment. Your comments are our best advertisement. Thanks!.",
        dateOne:"July 16, 2021",
        revOne:"This Resteraunt is just amazing. The Staff is very friendly and polite. If you wanna eat an ORIGINAL italian Pizza and drink a real coffee, don't miss to go there. I will come again.",
        dateTwo:"July 16, 2021",
        revTwo:"Really good pizza and very nice people. We absolutely loved it (thin crust, fresh quality toppings) and will certainly be back to enjoy an evening with a bottle of wine to go with our food. In the meantime we'll probably order again. Highly recommended.",
        dateThree:"July 16, 2021",
        revThree:"Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon fumé (on le voit avec son étiquette italienne dans le frigo à l'entrée). La pate est fine. Le prix est raisonable vu la qualité des produits.",
      },

      contact:{
        title:"Contact",
        desc:"Click on the icons to find us on a map or over the social media. Do you want to book a table or order a pizza? Click on the phone! We are waiting for you!",
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
        pizzas:"Pizze",
        wines:"Vini",
        contact:"Contatti",
      },

      header: {
        title: "L'Artigiano",
        subtitle:"72 ore di lievitazione, un attimo per innamorarsi!",
        download:"Scarica il menu",
        call:"Chiama",
      },

      cta:{
        description:"Nel cuore di Ixelles, la nostra pizzeria offre un'autentica esperienza italiana con un impasto lievitato per 72 ore, garantendo una leggerezza e una digeribilità uniche. Ogni pizza è un'opera d'arte, creata con prodotti di altissima qualità viene lavorata con amore e dedizione, per portare un assaggio dell'Italia nel piatto di ogni cliente. Venite a scoprire il vero sapore della tradizione italiana!",
        button:"Pizza Vino",
      },

      short:{
        over:"Savoir faire",
        title:"Made with love",
        subtitle:"Un impasto leggero che riposa tra le 48 e le 72 ore prima di essere utizzato, realizzato con ingredienti di alta qualità, per ottenere un cornicione pronunciato ma scavato all'interno; la cottura in un forno rotante misto gas / legna a 450°C permette di preservare i sapori autentici del pomodoro e della mozzarella fiordilatte.",
      },

      redpizzas:{
        title:"Pizze Rosse",
        subtitle:"Sugo a base di pomodoro del Piennolo, tipico dell'area vesuviana campana, deve il suo nome al modo in cui i grappoli vengono intrecciati per essere conservati. Hanno una forma ovale ma allungata e un sapore tipicamente acidulo.",
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
        subtitle:"Espressamente pensate senza salsa di pomodoro per esaltare i sapori tipici di prodotti italiani unici. Una combinazione strabiliante che solleticherà le vostre papille gustative.",
        SalsicciaFriarelli:"Fior di latte, basilico, salsiccia e friarielli Napoletani.",
        QuattroFormaggi:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        PatateTartufo:"Fior di latte, basilico, patate lesse e tartufo nero.",
        Mortadella:"Fior di latte, rucola, mortadella, scaglie di pecorino Romano, pesto di pomodori secchi e pistacchi tostati.",
        Genovese:"Fior di latte, pesto alla genovese, pomodorini gialli e rossi del Piennolo del Vesuvio, ricottan scaglie di grana e pinoli tostati."

      },

      maxipizzas:{
        title:"Maxi & slice",
        subtitle:"Godetevi la nostra pizza maxi da 50 centimetri: perfetta per condividere momenti gustosi con gli amici o in ufficio. Non lasciatevi sfuggire l'occasione di vivere un pranzo conviviale o di concedervi una pausa piacevole con i nostri tranci di pizza, ideali per chi è di fretta ma non vuole rinunciare al sapore autentico e alla qualità.",
        Margherita:"Pomodoro, basilico e fior di latte.",
        Diavola:"Pomodoro, basilico, fior di latte e salamino piccante.",
        PorchettaFunghi:"Pomodoro, basilico, fior di latte, porchetta d'Ariccia e funghi.",
        QuattroFormaggi:"Fior di latte, scamorza affumicata, gorgonzola, scaglie di grana e basilico.",
        Suggestione:"Scopri le suggestioni del giorno!"

      },

      paninis:{
        title:"Panini",
        subtitle:"Scoprite il gusto unico dei nostri panini, preparati con pane fresco, cotto giornalmente e lievitato per 72 ore. Lasciatevi tentare dalla freschezza dei nostri ingredienti stagionali, accuratamente selezionati per offrirvi sapori autentici e intensi. Oltre ai classici, le nostre suggestioni vi invitano a esplorare nuove delizie che variano periodicamente per sorprendervi ad ogni visita.",
        Italiano:"Prosciutto crudo, pesto genovese, mozzarella di bufala, pinoli, pomodori cuore di bue.",
        Mortadella:"Mortadella, stracciatella di burrata, pomodori secchi, rucola, pistacchio",
        Soppressa:"Soppressa veneta, crema di carciofi, formaggio asiago.",
        Piccante:"Crema di 'nduja, spianata calabra, melanzane grigliate, rucola.",
        Vegetariano:"Fior di latte, pesto alla genovese, pomodorini gialli e rossi del Piennolo del Vesuvio, ricottan scaglie di grana e pinoli tostati.",
        Suggestione:"",
      },

      secondShort:{
        over:"La vera pizza",
        title:"Forno a legna",
        subtitle:"Design assolutamente italiano da più di un secolo, ottime prestazioni, i forni Valoriani sono riconosciuti a livello internazionale. Certificazioni e attestati ricevuti dall'Associazione Napoletana Vera Pizza, da partner come Slow Food, Gambero Rosso, Witaly ecc...",
      },

      product:{
        over:"Per una buona pizza",
        title:"Qualità dei prodotti",
        subtitle:"Per noi è importante servire una pizza di alta qualità. Prodotti di alta qualità a prezzi convenienti per dare ai clienti un prodotto finale ottimo da gustare. Gli ingredienti rigorosamente italiani (e il modo in cui vengono lavorati) sono, soprattutto per quanto riguarda la pizza, la parte più importante.",
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
        desc:"Clicca sulle icone per trovarci sulla mappa o sui social media. Vuoi prenotare un tavolo o ordinare una pizza? Clicca sul telefono! Ti stiamo aspettando!",
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
