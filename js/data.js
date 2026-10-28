// Datos de la tienda y de los perfumes. Notas oficiales de cada marca (lattafa-usa.com, armafperfume.com, afnan.com).
// Textos en [es, ca, en, fr].
window.SHOP = {
  wa: '',            // WhatsApp de la tienda, solo cifras con prefijo (p. ej. '34600000000'). Vacío: WhatsApp deja elegir el contacto
  name: 'Dubai Essence'
};

window.NOTE = {
  canela: ['Canela', 'Canyella', 'Cinnamon', 'Cannelle'], nuez: ['Nuez moscada', 'Nou moscada', 'Nutmeg', 'Noix de muscade'],
  bergamota: ['Bergamota', 'Bergamota', 'Bergamot', 'Bergamote'], datiles: ['Dátiles', 'Dàtils', 'Dates', 'Dattes'],
  praline: ['Praliné', 'Praliné', 'Praline', 'Praliné'], nardo: ['Nardo', 'Nard', 'Tuberose', 'Tubéreuse'],
  vainilla: ['Vainilla', 'Vainilla', 'Vanilla', 'Vanille'], tonka: ['Haba tonka', 'Fava tonka', 'Tonka bean', 'Fève tonka'],
  amberwood: ['Maderas ambaradas', 'Fustes ambrades', 'Amberwood', 'Bois ambrés'], mirra: ['Mirra', 'Mirra', 'Myrrh', 'Myrrhe'],
  benjui: ['Benjuí', 'Benjuí', 'Benzoin', 'Benjoin'], pimienta: ['Pimienta negra', 'Pebre negre', 'Black pepper', 'Poivre noir'],
  pina: ['Piña', 'Pinya', 'Pineapple', 'Ananas'], tabaco: ['Tabaco', 'Tabac', 'Tobacco', 'Tabac'],
  pachuli: ['Pachulí', 'Patxuli', 'Patchouli', 'Patchouli'], cafe: ['Café', 'Cafè', 'Coffee', 'Café'], iris: ['Iris', 'Iris', 'Iris', 'Iris'],
  ambar: ['Ámbar', 'Ambre', 'Amber', 'Ambre'], maderas: ['Maderas secas', 'Fustes seques', 'Dry woods', 'Bois secs'],
  amaderadas: ['Notas amaderadas', 'Notes llenyoses', 'Woody notes', 'Notes boisées'], labdano: ['Láudano', 'Làudan', 'Labdanum', 'Labdanum'],
  orquidea: ['Orquídea', 'Orquídia', 'Orchid', 'Orchidée'], heliotropo: ['Heliotropo', 'Heliotropi', 'Heliotrope', 'Héliotrope'],
  mandarina: ['Mandarina', 'Mandarina', 'Tangerine', 'Mandarine'], goloso: ['Acorde goloso', 'Acord gurmand', 'Gourmand accord', 'Accord gourmand'],
  tropical: ['Frutas tropicales', 'Fruites tropicals', 'Tropical fruits', 'Fruits tropicaux'], almizcle: ['Almizcle', 'Mesc', 'Musk', 'Musc'],
  sandalo: ['Sándalo', 'Sàndal', 'Sandalwood', 'Santal'], azafran: ['Azafrán', 'Safrà', 'Saffron', 'Safran'],
  lavanda: ['Lavanda', 'Lavanda', 'Lavender', 'Lavande'], oud: ['Oud', 'Oud', 'Oud', 'Oud'],
  caramelo: ['Caramelo', 'Caramel', 'Caramel', 'Caramel'], leche: ['Leche', 'Llet', 'Milk', 'Lait'], azucar: ['Azúcar', 'Sucre', 'Sugar', 'Sucre'],
  miel: ['Miel', 'Mel', 'Honey', 'Miel'], flores: ['Flores blancas', 'Flors blanques', 'White flowers', 'Fleurs blanches'],
  manzana: ['Manzana', 'Poma', 'Apple', 'Pomme'], jengibre: ['Jengibre', 'Gingebre', 'Ginger', 'Gingembre'], salvia: ['Salvia', 'Sàlvia', 'Sage', 'Sauge'],
  enebro: ['Enebro', 'Ginebre', 'Juniper', 'Genièvre'], geranio: ['Geranio', 'Gerani', 'Geranium', 'Géranium'], cedro: ['Cedro', 'Cedre', 'Cedar', 'Cèdre'],
  vetiver: ['Vetiver', 'Vetiver', 'Vetiver', 'Vétiver'], lecherosa: ['Leche de rosas', 'Llet de roses', 'Rose milk', 'Lait de rose'],
  almendra: ['Almendra', 'Ametlla', 'Almond', 'Amande'], merengue: ['Merengue', 'Merenga', 'Meringue', 'Meringue'],
  champan: ['Champán', 'Xampany', 'Champagne', 'Champagne'], fresa: ['Fresa', 'Maduixa', 'Strawberry', 'Fraise'], rosa: ['Rosa', 'Rosa', 'Rose', 'Rose'],
  sanguina: ['Naranja sanguina', 'Taronja sanguina', 'Blood orange', 'Orange sanguine'], gardenia: ['Gardenia', 'Gardènia', 'Gardenia', 'Gardénia'],
  jazmin: ['Jazmín', 'Gessamí', 'Jasmine', 'Jasmin'], orqvainilla: ['Orquídea de vainilla', 'Orquídia de vainilla', 'Vanilla orchid', 'Orchidée vanille'],
  castana: ['Castaña', 'Castanya', 'Chestnut', 'Châtaigne'], pimento: ['Pimienta de Jamaica', 'Pebre de Jamaica', 'Pimento', 'Piment de la Jamaïque'],
  florales: ['Notas florales', 'Notes florals', 'Floral notes', 'Notes florales'], resinas: ['Resinas', 'Resines', 'Resins', 'Résines'],
  incienso: ['Incienso', 'Encens', 'Incense', 'Encens'], abeto: ['Abeto balsámico', 'Avet balsàmic', 'Balsam fir', 'Sapin baumier'],
  higo: ['Higo', 'Figa', 'Fig', 'Figue'], mandverde: ['Mandarina verde', 'Mandarina verda', 'Green tangerine', 'Mandarine verte'],
  melon: ['Melón', 'Meló', 'Melon', 'Melon'], coco: ['Agua de coco', 'Aigua de coco', 'Coconut water', 'Eau de coco'],
  loto: ['Flor de loto', 'Flor de lotus', 'Lotus', 'Lotus'], nenufar: ['Nenúfar', 'Nenúfar', 'Water lily', 'Nénuphar'],
  ambroxan: ['Ambroxán', 'Ambroxan', 'Ambroxan', 'Ambroxan'], limon: ['Limón', 'Llimona', 'Lemon', 'Citron'],
  grosella: ['Grosella negra', 'Grosella negra', 'Blackcurrant', 'Cassis'], abedul: ['Abedul', 'Bedoll', 'Birch', 'Bouleau'],
  pistacho: ['Pistacho', 'Festuc', 'Pistachio', 'Pistache'], avellana: ['Avellana', 'Avellana', 'Hazelnut', 'Noisette'],
  knafeh: ['Knafeh', 'Knafeh', 'Knafeh', 'Knafeh'], chocolate: ['Chocolate', 'Xocolata', 'Chocolate', 'Chocolat'],
  cardamomo: ['Cardamomo', 'Cardamom', 'Cardamom', 'Cardamome'], resabeto: ['Resina de abeto', 'Resina d’avet', 'Fir resin', 'Résine de sapin'],
  lavandin: ['Lavandín', 'Lavandí', 'Lavandin', 'Lavandin'], azahar: ['Azahar', 'Flor de taronger', 'Orange blossom', 'Fleur d’oranger'],
  muguet: ['Lirio de los valles', 'Lliri de maig', 'Lily of the valley', 'Muguet'], frambuesa: ['Frambuesa', 'Gerd', 'Raspberry', 'Framboise'],
  violeta: ['Violeta', 'Violeta', 'Violet', 'Violette'], naranja: ['Naranja', 'Taronja', 'Orange', 'Orange'], peonia: ['Peonía', 'Peònia', 'Peony', 'Pivoine'],
  cipres: ['Ciprés', 'Xiprer', 'Cypress', 'Cyprès'], pino: ['Pino', 'Pi', 'Pine', 'Pin']
};

window.LBL = {
  g: { h: ['Para él', 'Per a ell', 'For him', 'Pour lui'], m: ['Para ella', 'Per a ella', 'For her', 'Pour elle'], u: ['Unisex', 'Unisex', 'Unisex', 'Mixte'] },
  f: { dulce: ['Dulce', 'Dolç', 'Sweet', 'Sucré'], oud: ['Oud y maderas', 'Oud i fustes', 'Oud and woods', 'Oud et bois'], especiado: ['Especiado y ámbar', 'Espècies i ambre', 'Spicy and amber', 'Épicé et ambré'], fresco: ['Fresco', 'Fresc', 'Fresh', 'Frais'], floral: ['Floral', 'Floral', 'Floral', 'Floral'] },
  w: { dia: ['Todos los días', 'Cada dia', 'Every day', 'Au quotidien'], noche: ['Para salir de noche', 'Per sortir de nit', 'Nights out', 'Pour sortir le soir'], especial: ['Ocasiones especiales', 'Ocasions especials', 'Special occasions', 'Grandes occasions'] }
};

// g: h él, m ella, u unisex · f: familias (la primera es la principal) · w: cuándo · key: 3 notas para la tarjeta
window.PERFUMES = [
  { id: 'khamrah', brand: 'Lattafa', name: 'Khamrah', g: 'u', f: ['dulce', 'especiado'], w: ['noche', 'especial'],
    top: ['canela', 'nuez', 'bergamota'], mid: ['datiles', 'praline', 'nardo'], base: ['vainilla', 'tonka', 'amberwood', 'mirra', 'benjui'], key: ['datiles', 'canela', 'praline'],
    d: ['Dátiles, canela y praliné sobre una base de vainilla. Cálido, dulce y con mucha presencia.', 'Dàtils, canyella i praliné sobre una base de vainilla. Càlid, dolç i amb molta presència.', 'Dates, cinnamon and praline over a vanilla base. Warm, sweet and full of presence.', 'Dattes, cannelle et praliné sur un fond de vanille. Chaud, sucré et très présent.'] },
  { id: 'oud-for-glory', brand: 'Lattafa', line: 'Bade’e Al Oud', name: 'Oud for Glory', g: 'u', f: ['oud'], w: ['noche', 'especial'],
    top: ['azafran', 'nuez', 'lavanda'], mid: ['oud', 'pachuli'], base: ['oud', 'pachuli', 'almizcle'], key: ['oud', 'azafran', 'pachuli'],
    d: ['Oud y azafrán en estado puro. Profundo, ahumado y con mucha personalidad.', 'Oud i safrà en estat pur. Profund, fumat i amb molta personalitat.', 'Pure oud and saffron. Deep, smoky and full of character.', 'Oud et safran à l’état pur. Profond, fumé et plein de caractère.'] },
  { id: 'yara', brand: 'Lattafa', name: 'Yara', g: 'm', f: ['dulce', 'floral'], w: ['dia'],
    top: ['orquidea', 'heliotropo', 'mandarina'], mid: ['goloso', 'tropical'], base: ['vainilla', 'almizcle', 'sandalo'], key: ['orquidea', 'mandarina', 'vainilla'],
    d: ['Orquídea y mandarina con un fondo cremoso de vainilla. Dulce, suave y muy fácil de llevar.', 'Orquídia i mandarina amb un fons cremós de vainilla. Dolç, suau i molt fàcil de portar.', 'Orchid and tangerine with a creamy vanilla base. Sweet, soft and easy to wear.', 'Orchidée et mandarine sur un fond crémeux de vanille. Doux, tendre et facile à porter.'] },
  { id: 'asad', brand: 'Lattafa', name: 'Asad', g: 'h', f: ['especiado'], w: ['noche', 'especial'],
    top: ['pimienta', 'pina', 'tabaco'], mid: ['pachuli', 'cafe', 'iris'], base: ['vainilla', 'ambar', 'maderas', 'benjui', 'labdano'], key: ['pimienta', 'tabaco', 'cafe'],
    d: ['Pimienta negra, tabaco y café con fondo de vainilla y ámbar. Intenso y elegante.', 'Pebre negre, tabac i cafè amb fons de vainilla i ambre. Intens i elegant.', 'Black pepper, tobacco and coffee with a vanilla and amber base. Intense and elegant.', 'Poivre noir, tabac et café sur un fond de vanille et d’ambre. Intense et élégant.'] },
  { id: 'eclaire', brand: 'Lattafa', name: 'Eclaire', g: 'u', f: ['dulce'], w: ['dia', 'noche'],
    top: ['caramelo', 'leche', 'azucar'], mid: ['miel', 'flores'], base: ['vainilla', 'praline', 'almizcle'], key: ['caramelo', 'leche', 'miel'],
    d: ['Caramelo, leche y miel. Un perfume goloso que huele a pastelería recién hecha.', 'Caramel, llet i mel. Un perfum llaminer que fa olor de pastisseria acabada de fer.', 'Caramel, milk and honey. A gourmand scent that smells like a fresh pastry shop.', 'Caramel, lait et miel. Un parfum gourmand qui sent la pâtisserie tout juste sortie du four.'] },
  { id: 'cdn-intense', brand: 'Armaf', name: 'Club de Nuit Intense Man', g: 'h', f: ['fresco', 'oud'], w: ['dia', 'noche'],
    top: ['manzana', 'bergamota', 'grosella', 'pina', 'limon'], mid: ['rosa', 'abedul', 'jazmin'], base: ['almizcle', 'pachuli', 'vainilla'], key: ['pina', 'limon', 'abedul'],
    d: ['Piña y limón con abedul ahumado y almizcle. Un clásico masculino que siempre gusta.', 'Pinya i llimona amb bedoll fumat i mesc. Un clàssic masculí que sempre agrada.', 'Pineapple and lemon with smoky birch and musk. A men’s classic that always works.', 'Ananas et citron avec du bouleau fumé et du musc. Un classique masculin qui plaît toujours.'] },
  { id: 'noble-blush', brand: 'Lattafa', line: 'Bade’e Al Oud', name: 'Noble Blush', g: 'm', f: ['dulce', 'floral'], w: ['dia', 'noche'],
    top: ['lecherosa'], mid: ['merengue', 'almendra'], base: ['vainilla', 'almizcle', 'sandalo'], key: ['lecherosa', 'almendra', 'merengue'],
    d: ['Leche de rosas, almendra y merengue. Suave, cremoso y muy femenino.', 'Llet de roses, ametlla i merenga. Suau, cremós i molt femení.', 'Rose milk, almond and meringue. Soft, creamy and very feminine.', 'Lait de rose, amande et meringue. Doux, crémeux et très féminin.'] },
  { id: '9pm', brand: 'Afnan', name: '9 PM', g: 'h', f: ['dulce', 'especiado'], w: ['noche'],
    top: ['bergamota', 'lavandin', 'canela', 'manzana'], mid: ['muguet', 'azahar'], base: ['pachuli', 'ambar', 'vainilla', 'tonka'], key: ['manzana', 'canela', 'vainilla'],
    d: ['Manzana, canela y lavanda con vainilla y ámbar. Dulce y seductor, para salir de noche.', 'Poma, canyella i lavanda amb vainilla i ambre. Dolç i seductor, per sortir de nit.', 'Apple, cinnamon and lavender with vanilla and amber. Sweet and seductive, for nights out.', 'Pomme, cannelle et lavande avec vanille et ambre. Sucré et séduisant, pour sortir le soir.'] },
  { id: 'haya', brand: 'Lattafa', name: 'Haya', g: 'm', f: ['floral'], w: ['especial', 'noche'],
    top: ['champan', 'fresa', 'mandarina', 'sanguina', 'rosa'], mid: ['gardenia', 'jazmin', 'orqvainilla'], base: ['ambar', 'sandalo', 'castana'], key: ['champan', 'fresa', 'gardenia'],
    d: ['Champán y fresa con gardenia y jazmín. Alegre y luminoso, para celebrar.', 'Xampany i maduixa amb gardènia i gessamí. Alegre i lluminós, per celebrar.', 'Champagne and strawberry with gardenia and jasmine. Joyful and bright, made for celebrating.', 'Champagne et fraise avec gardénia et jasmin. Joyeux et lumineux, pour célébrer.'] },
  { id: 'oud-mood', brand: 'Lattafa', name: 'Oud Mood', g: 'u', f: ['oud', 'especiado'], w: ['noche', 'especial'],
    top: ['rosa', 'azafran', 'pimento'], mid: ['oud', 'caramelo', 'florales', 'pachuli'], base: ['amaderadas', 'ambar', 'resinas', 'incienso', 'almizcle'], key: ['oud', 'rosa', 'incienso'],
    d: ['Rosa, azafrán y oud con un toque de caramelo e incienso. Un oriental de los de siempre.', 'Rosa, safrà i oud amb un toc de caramel i encens. Un oriental dels de sempre.', 'Rose, saffron and oud with a touch of caramel and incense. A true classic oriental.', 'Rose, safran et oud avec une touche de caramel et d’encens. Un oriental classique.'] },
  { id: 'dubai-chocolat', brand: 'Armaf', name: 'Odyssey Dubai Chocolat', g: 'u', f: ['dulce'], w: ['dia', 'noche'],
    top: ['cafe', 'pistacho', 'praline', 'avellana', 'knafeh'], mid: ['vainilla', 'chocolate', 'cardamomo'], base: ['caramelo', 'tonka', 'amberwood'], key: ['pistacho', 'knafeh', 'chocolate'],
    d: ['Pistacho, knafeh y chocolate. El famoso chocolate de Dubái convertido en perfume.', 'Festuc, knafeh i xocolata. La famosa xocolata de Dubai convertida en perfum.', 'Pistachio, knafeh and chocolate. The famous Dubai chocolate turned into a fragrance.', 'Pistache, knafeh et chocolat. Le célèbre chocolat de Dubaï devenu parfum.'] },
  { id: 'fakhar-black', brand: 'Lattafa', name: 'Fakhar Black', g: 'h', f: ['fresco'], w: ['dia'],
    top: ['manzana', 'bergamota', 'jengibre'], mid: ['lavanda', 'salvia', 'enebro', 'geranio'], base: ['tonka', 'cedro', 'amberwood', 'vetiver'], key: ['manzana', 'jengibre', 'lavanda'],
    d: ['Manzana, jengibre y lavanda sobre maderas. Fresco y limpio, perfecto para el día a día.', 'Poma, gingebre i lavanda sobre fustes. Fresc i net, perfecte per al dia a dia.', 'Apple, ginger and lavender over woods. Fresh and clean, perfect for every day.', 'Pomme, gingembre et lavande sur des bois. Frais et net, parfait pour tous les jours.'] },
  { id: 'untold', brand: 'Armaf', name: 'Club de Nuit Untold', g: 'u', f: ['especiado', 'floral'], w: ['especial', 'noche'],
    top: ['azafran', 'jazmin'], mid: ['amberwood'], base: ['resabeto', 'cedro'], key: ['azafran', 'jazmin', 'amberwood'],
    d: ['Azafrán y jazmín sobre maderas ambaradas. Luminoso, elegante y muy original.', 'Safrà i gessamí sobre fustes ambrades. Lluminós, elegant i molt original.', 'Saffron and jasmine over amber woods. Radiant, elegant and truly original.', 'Safran et jasmin sur des bois ambrés. Lumineux, élégant et très original.'] },
  { id: 'mayar', brand: 'Lattafa', name: 'Mayar Natural Intense', g: 'm', f: ['fresco', 'floral'], w: ['dia'],
    top: ['higo', 'mandverde', 'melon', 'coco'], mid: ['loto', 'nenufar', 'jazmin'], base: ['ambroxan', 'almizcle', 'sandalo', 'vainilla'], key: ['higo', 'coco', 'loto'],
    d: ['Higo, agua de coco y flor de loto. Fresco y suave, ideal para el verano.', 'Figa, aigua de coco i flor de lotus. Fresc i suau, ideal per a l’estiu.', 'Fig, coconut water and lotus. Fresh and soft, ideal for summer.', 'Figue, eau de coco et lotus. Frais et doux, idéal pour l’été.'] },
  { id: 'qaed-al-fursan', brand: 'Lattafa', name: 'Qaed Al Fursan', g: 'u', f: ['fresco', 'oud'], w: ['dia'],
    top: ['pina', 'azafran'], mid: ['abeto', 'jazmin'], base: ['ambar', 'cedro', 'oud'], key: ['pina', 'azafran', 'cedro'],
    d: ['Piña y azafrán sobre cedro y un toque de oud. Afrutado, fresco y diferente.', 'Pinya i safrà sobre cedre i un toc d’oud. Afruitat, fresc i diferent.', 'Pineapple and saffron over cedar with a touch of oud. Fruity, fresh and different.', 'Ananas et safran sur du cèdre avec une touche d’oud. Fruité, frais et différent.'] },
  { id: '9pm-femme', brand: 'Afnan', name: '9 PM Pour Femme', g: 'm', f: ['floral'], w: ['noche'],
    top: ['frambuesa', 'manzana', 'violeta', 'naranja'], mid: ['rosa', 'peonia', 'iris', 'jazmin'], base: ['cedro', 'cipres', 'pino', 'ambar'], key: ['frambuesa', 'rosa', 'peonia'],
    d: ['Frambuesa y violeta con rosa y peonía sobre maderas. Floral e intenso, para la noche.', 'Gerd i violeta amb rosa i peònia sobre fustes. Floral i intens, per a la nit.', 'Raspberry and violet with rose and peony over woods. Floral and intense, for the evening.', 'Framboise et violette avec rose et pivoine sur des bois. Floral et intense, pour le soir.'] }
];

// Frascos de la portada
window.HERO = ['khamrah', 'oud-for-glory', 'yara', 'asad'];

// Aromas de Oriente: palabra árabe, nombre, texto y notas que cuentan para el filtro
window.ING = [
  { id: 'oud', ar: 'عود', notes: ['oud'], n: ['Oud', 'Oud', 'Oud', 'Oud'],
    d: ['La madera más preciada de Oriente. Profunda, ahumada y elegante.', 'La fusta més preuada d’Orient. Profunda, fumada i elegant.', 'The most precious wood of the East. Deep, smoky and elegant.', 'Le bois le plus précieux d’Orient. Profond, fumé et élégant.'] },
  { id: 'azafran', ar: 'زعفران', notes: ['azafran'], n: ['Azafrán', 'Safrà', 'Saffron', 'Safran'],
    d: ['Cálido y especiado, con un punto de cuero. Da lujo a cualquier perfume.', 'Càlid i especiat, amb un punt de cuir. Dona luxe a qualsevol perfum.', 'Warm and spicy, with a hint of leather. It makes any scent feel luxurious.', 'Chaud et épicé, avec une pointe de cuir. Il rend tout parfum luxueux.'] },
  { id: 'rosa', ar: 'ورد', notes: ['rosa', 'lecherosa'], n: ['Rosa', 'Rosa', 'Rose', 'Rose'],
    d: ['La rosa de Oriente: intensa, aterciopelada y romántica.', 'La rosa d’Orient: intensa, vellutada i romàntica.', 'The rose of the East: intense, velvety and romantic.', 'La rose d’Orient : intense, veloutée et romantique.'] },
  { id: 'ambar', ar: 'عنبر', notes: ['ambar', 'amberwood'], n: ['Ámbar', 'Ambre', 'Amber', 'Ambre'],
    d: ['Cálido, dulce y envolvente. La base de los perfumes de noche.', 'Càlid, dolç i envoltant. La base dels perfums de nit.', 'Warm, sweet and enveloping. The heart of evening scents.', 'Chaud, doux et enveloppant. La base des parfums du soir.'] },
  { id: 'almizcle', ar: 'مسك', notes: ['almizcle'], n: ['Almizcle', 'Mesc', 'Musk', 'Musc'],
    d: ['Suave y limpio, como la piel recién duchada. Hace que el perfume dure.', 'Suau i net, com la pell acabada de dutxar. Fa que el perfum duri.', 'Soft and clean, like freshly showered skin. It helps a scent last.', 'Doux et propre, comme une peau sortie de la douche. Il fait durer le parfum.'] },
  { id: 'vainilla', ar: 'فانيلا', notes: ['vainilla', 'orqvainilla'], n: ['Vainilla', 'Vainilla', 'Vanilla', 'Vanille'],
    d: ['Dulce y cremosa. El toque goloso de los perfumes más pedidos.', 'Dolça i cremosa. El toc llaminer dels perfums més demanats.', 'Sweet and creamy. The gourmand touch in the most-loved scents.', 'Douce et crémeuse. La touche gourmande des parfums les plus demandés.'] }
];
