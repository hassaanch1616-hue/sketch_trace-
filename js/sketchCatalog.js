/**
 * SketchTrace - HD Authentic Anime Names Catalog
 */

window.SketchTrace = window.SketchTrace || {};

const CATEGORIES = [
  { id: 'anime', name: 'Anime', icon: '\u2728', count: 70, description: 'Tanjiro Kamado, Gabimaru, Sasuke, Itachi, Gojo, Sukuna, Naruto, Kakashi' },
  { id: 'cars', name: 'Cars', icon: '\uD83C\uDFCE', count: 20, description: 'Bugatti Chiron, Lamborghini, McLaren, Ferrari, BMW, Audi, Nissan Skyline & Supercars' },
  { id: 'aircraft', name: 'Aircraft', icon: '\u2708', count: 10, description: 'F-15 Eagle, Fighter Jets, Commercial Airliners, Helicopters & Biplanes' },
  { id: 'cartoon', name: 'Cartoon', icon: '\uD83C\uDFA8', count: 22, description: 'Mickey Mouse, Doraemon, SpongeBob, Hello Kitty, Pikachu, Tom & Jerry, Minions' },
  { id: 'bikes', name: 'Bikes', icon: '\uD83C\uDFCD', count: 11, description: 'Yamaha YZF-R6, Batman Batcycle, Vespa Scooter, Harley Chopper, Motocross Dirt Bike, ATV Quad & MTB' },
  { id: 'trains', name: 'Trains', icon: '\uD83D\uDE86', count: 14, description: 'Shinkansen Bullet Train, Thomas the Tank Engine, Edward, Steam Locomotives, Metro & Intercity Express' },
  { id: 'superheroes', name: 'Superheroes', icon: '\u26A1', count: 18, description: 'Batman, Iron Man, Spider-Man, Superman, Thor, Deadpool, Venom, Black Panther & The Flash' },
  { id: 'ships', name: 'Ships', icon: '\uD83D\uDEA2', count: 18, description: 'RMS Titanic, Pirate Galleons, Naval Battleships, Luxury Cruise Ships, Mayflower & Sailboats' },
  { id: 'fish', name: 'Fish', icon: '\uD83D\uDC20', count: 24, description: 'Baby Shark, Dolphins, Blue Whales, Goldfish, Seahorses, Angelfish & Clownfish' },
  { id: 'animals', name: 'Animals', icon: '\uD83E\uDD81', count: 21, description: 'Lions, Horses, Cats, Dogs, Rabbits, Giraffes, Deers, Elephants & Goats' },
  { id: 'birds', name: 'Birds', icon: '\uD83E\uDD85', count: 15, description: 'Peacocks, Macaw Parrots, Toucans, Hummingbirds, Swans, Doves, Swallows & Owls' },
  { id: 'flowers', name: 'Flowers', icon: '\uD83C\uDF39', count: 20, description: 'Roses, Tulips, Daisies, Lilies, Hibiscus, Sunflowers, Plumeria, Cherry Blossoms & Bouquets' }
];

const ANIME_PRESETS = [
  {
    id: 'anime-tanjiro',
    name: 'Tanjiro Kamado',
    category: 'anime',
    tags: ['anime', 'anime-tanjiro', 'Tanjiro Kamado'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-tanjiro.jpg'
  },
  {
    id: 'anime-gabimaru',
    name: 'Gabimaru the Hollow',
    category: 'anime',
    tags: ['anime', 'anime-gabimaru', 'Gabimaru the Hollow'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-gabimaru.jpg'
  },
  {
    id: 'anime-zenitsu',
    name: 'Zenitsu Agatsuma',
    category: 'anime',
    tags: ['anime', 'anime-zenitsu', 'Zenitsu Agatsuma'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-zenitsu.jpg'
  },
  {
    id: 'anime-naruto-baryon',
    name: 'Naruto Baryon Mode',
    category: 'anime',
    tags: ['anime', 'anime-naruto-baryon', 'Naruto Baryon Mode'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-naruto-baryon.jpg'
  },
  {
    id: 'anime-deidara',
    name: 'Deidara (Akatsuki)',
    category: 'anime',
    tags: ['anime', 'anime-deidara', 'Deidara (Akatsuki)'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-deidara.jpg'
  },
  {
    id: 'anime-sakura',
    name: 'Sakura Haruno',
    category: 'anime',
    tags: ['anime', 'anime-sakura', 'Sakura Haruno'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-sakura.jpg'
  },
  {
    id: 'anime-luffy',
    name: 'Monkey D. Luffy',
    category: 'anime',
    tags: ['anime', 'anime-luffy', 'Monkey D. Luffy'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-luffy.png'
  },
  {
    id: 'anime-neji',
    name: 'Neji Hyuga',
    category: 'anime',
    tags: ['anime', 'anime-neji', 'Neji Hyuga'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-neji.png'
  },
  {
    id: 'anime-sukuna',
    name: 'Ryomen Sukuna',
    category: 'anime',
    tags: ['anime', 'anime-sukuna', 'Ryomen Sukuna'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-sukuna.png'
  },
  {
    id: 'anime-jinwoo',
    name: 'Sung Jin-woo',
    category: 'anime',
    tags: ['anime', 'anime-jinwoo', 'Sung Jin-woo'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-jinwoo.png'
  },
  {
    id: 'anime-gojo',
    name: 'Satoru Gojo',
    category: 'anime',
    tags: ['anime', 'anime-gojo', 'Satoru Gojo'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-gojo.jpg'
  },
  {
    id: 'anime-shinobu',
    name: 'Shinobu Kocho',
    category: 'anime',
    tags: ['anime', 'anime-shinobu', 'Shinobu Kocho'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-shinobu.jpg'
  },
  {
    id: 'anime-naruto-run',
    name: 'Naruto Running',
    category: 'anime',
    tags: ['anime', 'anime-naruto-run', 'Naruto Running'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-naruto-run.png'
  },
  {
    id: 'anime-kakashi',
    name: 'Kakashi Hatake',
    category: 'anime',
    tags: ['anime', 'anime-kakashi', 'Kakashi Hatake'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-kakashi.jpg'
  },
  {
    id: 'anime-css-1',
    name: 'Naruto Uzumaki Sage Mode',
    category: 'anime',
    tags: ['anime', 'naruto', 'uzumaki', 'sage mode', 'shippuden'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-1.jpg'
  },
  {
    id: 'anime-css-2',
    name: 'Sasuke Uchiha Chidori',
    category: 'anime',
    tags: ['anime', 'sasuke', 'uchiha', 'chidori', 'sharingan'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-2.jpg'
  },
  {
    id: 'anime-css-3',
    name: 'Kakashi Hatake Sharingan',
    category: 'anime',
    tags: ['anime', 'kakashi', 'hatake', 'sharingan', 'ninja'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-3.jpg'
  },
  {
    id: 'anime-css-4',
    name: 'Itachi Uchiha Akatsuki',
    category: 'anime',
    tags: ['anime', 'itachi', 'uchiha', 'akatsuki', 'sharingan'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/anime/anime-css-4.jpg'
  },
  {
    id: 'anime-css-5',
    name: 'Sakura Haruno Line Art',
    category: 'anime',
    tags: ['anime', 'sakura', 'haruno', 'naruto', 'ninja'],
    difficulty: 'Medium',
    popularity: 94,
    imageUrl: './assets/anime/anime-css-5.png'
  },
  {
    id: 'anime-css-6',
    name: 'Itachi Mangekyo Sharingan',
    category: 'anime',
    tags: ['anime', 'itachi', 'sharingan', 'eye', 'uchiha'],
    difficulty: 'Medium',
    popularity: 93,
    imageUrl: './assets/anime/anime-css-6.png'
  },
  {
    id: 'anime-css-7',
    name: 'Naruto Shippuden Hero',
    category: 'anime',
    tags: ['anime', 'naruto', 'shippuden', 'hero'],
    difficulty: 'Medium',
    popularity: 92,
    imageUrl: './assets/anime/anime-css-7.jpg'
  },
  {
    id: 'anime-css-8',
    name: 'Sakura Haruno Medical Ninja',
    category: 'anime',
    tags: ['anime', 'sakura', 'naruto'],
    difficulty: 'Medium',
    popularity: 91,
    imageUrl: './assets/anime/anime-css-8.jpg'
  },
  {
    id: 'anime-css-9',
    name: 'Sasuke Uchiha Rinnegan',
    category: 'anime',
    tags: ['anime', 'sasuke', 'uchiha', 'rinnegan'],
    difficulty: 'Medium',
    popularity: 90,
    imageUrl: './assets/anime/anime-css-9.png'
  },
  {
    id: 'anime-css-10',
    name: 'Sharingan Eye Symbol',
    category: 'anime',
    tags: ['anime', 'sharingan', 'eye', 'uchiha'],
    difficulty: 'Medium',
    popularity: 89,
    imageUrl: './assets/anime/anime-css-10.jpg'
  },
  {
    id: 'anime-css-11',
    name: 'Gojo Satoru Unlimited Void',
    category: 'anime',
    tags: ['anime', 'gojo', 'satoru', 'jujutsu kaisen'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-11.jpg'
  },
  {
    id: 'anime-css-12',
    name: 'Ryomen Sukuna King of Curses',
    category: 'anime',
    tags: ['anime', 'sukuna', 'ryomen', 'jujutsu kaisen'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-12.png'
  },
  {
    id: 'anime-css-13',
    name: 'Megumi Fushiguro Ten Shadows',
    category: 'anime',
    tags: ['anime', 'megumi', 'fushiguro', 'jujutsu kaisen'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-13.jpg'
  },
  {
    id: 'anime-css-14',
    name: 'Yuji Itadori Black Flash',
    category: 'anime',
    tags: ['anime', 'yuji', 'itadori', 'jujutsu kaisen'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-14.png'
  },
  {
    id: 'anime-css-15',
    name: 'Portgas D. Ace (One Piece)',
    category: 'anime',
    tags: ['anime', 'ace', 'portgas', 'one piece', 'fire fist'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-15.jpg'
  },
  {
    id: 'anime-css-16',
    name: 'Sung Jin-woo (Solo Leveling)',
    category: 'anime',
    tags: ['anime', 'jinwoo', 'sung jinwoo', 'solo leveling', 'shadow monarch'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-16.png'
  },
  {
    id: 'anime-css-17',
    name: 'Red-Haired Shanks (One Piece)',
    category: 'anime',
    tags: ['anime', 'shanks', 'red hair', 'one piece', 'yonko'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-17.jpg'
  },
  {
    id: 'anime-css-18',
    name: 'Megumi Fushiguro (Jujutsu Kaisen)',
    category: 'anime',
    tags: ['anime', 'megumi', 'fushiguro', 'jujutsu kaisen', 'ten shadows'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-18.jpg'
  },
  {
    id: 'anime-css-19',
    name: 'Rengoku Kyojuro Flame Hashira',
    category: 'anime',
    tags: ['anime', 'rengoku', 'flame hashira', 'demon slayer'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-19.jpg'
  },
  {
    id: 'anime-css-20',
    name: 'Akaza Upper Moon Three',
    category: 'anime',
    tags: ['anime', 'akaza', 'demon slayer'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/anime/anime-css-20.jpg'
  },
  {
    id: 'anime-css-21',
    name: 'Monkey D. Luffy Gear 5',
    category: 'anime',
    tags: ['anime', 'luffy', 'one piece', 'gear 5'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/anime/anime-css-21.jpg'
  },
  {
    id: 'anime-css-22',
    name: 'Roronoa Zoro Three Sword Style',
    category: 'anime',
    tags: ['anime', 'zoro', 'roronoa', 'one piece'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-22.jpg'
  },
  {
    id: 'anime-css-23',
    name: 'Vinsmoke Sanji Diable Jambe',
    category: 'anime',
    tags: ['anime', 'sanji', 'one piece'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-23.jpg'
  },
  {
    id: 'anime-css-24',
    name: 'Portgas D. Ace Fire Fist',
    category: 'anime',
    tags: ['anime', 'ace', 'one piece'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-24.jpg'
  },
  {
    id: 'anime-css-25',
    name: 'Son Goku Super Saiyan',
    category: 'anime',
    tags: ['anime', 'goku', 'dragon ball', 'saiyan'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/anime/anime-css-25.jpg'
  },
  {
    id: 'anime-css-26',
    name: 'Prince Vegeta Ultra Ego',
    category: 'anime',
    tags: ['anime', 'vegeta', 'dragon ball', 'saiyan'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-26.png'
  },
  {
    id: 'anime-css-27',
    name: 'Gohan Beast Mode',
    category: 'anime',
    tags: ['anime', 'gohan', 'dragon ball'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-27.jpg'
  },
  {
    id: 'anime-css-28',
    name: 'Future Trunks Sword',
    category: 'anime',
    tags: ['anime', 'trunks', 'dragon ball'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-28.jpg'
  },
  {
    id: 'anime-css-29',
    name: 'Eren Yeager Attack Titan',
    category: 'anime',
    tags: ['anime', 'eren', 'yeager', 'attack on titan'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-29.jpg'
  },
  {
    id: 'anime-css-30',
    name: 'Levi Ackerman ODM Gear',
    category: 'anime',
    tags: ['anime', 'levi', 'ackerman', 'attack on titan'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/anime/anime-css-30.jpg'
  },
  {
    id: 'anime-css-31',
    name: 'Mikasa Ackerman Blade',
    category: 'anime',
    tags: ['anime', 'mikasa', 'ackerman', 'attack on titan'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-31.jpg'
  },
  {
    id: 'anime-css-32',
    name: 'Saitama One Punch Man',
    category: 'anime',
    tags: ['anime', 'saitama', 'one punch man'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-32.jpg'
  },
  {
    id: 'anime-css-33',
    name: 'Genos Demon Cyborg',
    category: 'anime',
    tags: ['anime', 'genos', 'one punch man'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/anime/anime-css-33.jpg'
  },
  {
    id: 'anime-css-34',
    name: 'Light Yagami Death Note',
    category: 'anime',
    tags: ['anime', 'light', 'yagami', 'death note'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-34.jpg'
  },
  {
    id: 'anime-css-35',
    name: 'L Lawliet Detective',
    category: 'anime',
    tags: ['anime', 'l', 'lawliet', 'death note'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-35.jpg'
  },
  {
    id: 'anime-css-36',
    name: 'Edward Elric Fullmetal Alchemist',
    category: 'anime',
    tags: ['anime', 'edward', 'elric', 'fullmetal'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-36.jpg'
  },
  {
    id: 'anime-css-37',
    name: 'Alphonse Elric Armor',
    category: 'anime',
    tags: ['anime', 'alphonse', 'elric', 'fullmetal'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/anime/anime-css-37.jpg'
  },
  {
    id: 'anime-css-38',
    name: 'Killua Zoldyck Godspeed',
    category: 'anime',
    tags: ['anime', 'killua', 'zoldyck', 'hunter x hunter'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-38.png'
  },
  {
    id: 'anime-css-39',
    name: 'Gon Freecss Jajanken',
    category: 'anime',
    tags: ['anime', 'gon', 'freecss', 'hunter x hunter'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-39.jpg'
  },
  {
    id: 'anime-css-40',
    name: 'Kurapika Scarlet Eyes',
    category: 'anime',
    tags: ['anime', 'kurapika', 'hunter x hunter'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/anime/anime-css-40.jpg'
  },
  {
    id: 'anime-css-41',
    name: 'Minato Namikaze Yellow Flash',
    category: 'anime',
    tags: ['anime', 'minato', 'namikaze', 'fourth hokage', 'naruto'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-41.jpg'
  },
  {
    id: 'anime-css-42',
    name: 'Jiraiya Toad Sage',
    category: 'anime',
    tags: ['anime', 'jiraiya', 'sage', 'naruto'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-42.png'
  },
  {
    id: 'anime-css-43',
    name: 'Tsunade Senju 100 Healings',
    category: 'anime',
    tags: ['anime', 'tsunade', 'senju', 'hokage', 'naruto'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-43.jpg'
  },
  {
    id: 'anime-css-44',
    name: 'Gaara Sand Shield',
    category: 'anime',
    tags: ['anime', 'gaara', 'kazekage', 'naruto'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-44.png'
  },
  {
    id: 'anime-css-45',
    name: 'Obito Uchiha Tobi Mask',
    category: 'anime',
    tags: ['anime', 'obito', 'uchiha', 'tobi', 'naruto'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-45.jpg'
  },
  {
    id: 'anime-css-46',
    name: 'Madara Uchiha Perfect Susanoo',
    category: 'anime',
    tags: ['anime', 'madara', 'uchiha', 'susanoo', 'naruto'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/anime/anime-css-46.png'
  },
  {
    id: 'anime-css-47',
    name: 'Gaara of the Desert (Naruto)',
    category: 'anime',
    tags: ['anime', 'gaara', 'kazekage', 'sand', 'naruto'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-47.jpg'
  },
  {
    id: 'anime-css-48',
    name: 'Ryomen Sukuna (Jujutsu Kaisen)',
    category: 'anime',
    tags: ['anime', 'sukuna', 'ryomen', 'jujutsu kaisen', 'king of curses'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-48.png'
  },
  {
    id: 'anime-css-49',
    name: 'Itachi Uchiha Akatsuki (Naruto)',
    category: 'anime',
    tags: ['anime', 'itachi', 'uchiha', 'akatsuki', 'sharingan', 'naruto'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-49.jpg'
  },
  {
    id: 'anime-css-50',
    name: 'Satoru Gojo Six Eyes (Jujutsu Kaisen)',
    category: 'anime',
    tags: ['anime', 'gojo', 'satoru', 'six eyes', 'jujutsu kaisen'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/anime/anime-css-50.png'
  },
  {
    id: 'anime-css-51',
    name: 'Shoto Todoroki Half Cold Half Hot',
    category: 'anime',
    tags: ['anime', 'todoroki', 'shoto', 'my hero academia'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/anime/anime-css-51.jpg'
  },
  {
    id: 'anime-css-52',
    name: 'Katsuki Bakugo Explosion',
    category: 'anime',
    tags: ['anime', 'bakugo', 'katsuki', 'my hero academia'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/anime/anime-css-52.png'
  },
  {
    id: 'anime-css-53',
    name: 'Izuku Midoriya One For All',
    category: 'anime',
    tags: ['anime', 'deku', 'midoriya', 'my hero academia'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/anime/anime-css-53.jpg'
  },
  {
    id: 'anime-css-54',
    name: 'All Might Plus Ultra',
    category: 'anime',
    tags: ['anime', 'all might', 'my hero academia'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/anime/anime-css-54.png'
  },
  {
    id: 'anime-css-55',
    name: 'Sharingan Eye Pattern 1',
    category: 'anime',
    tags: ['anime', 'sharingan', 'eye', 'naruto'],
    difficulty: 'Medium',
    popularity: 94,
    imageUrl: './assets/anime/anime-css-55.png'
  },
  {
    id: 'anime-css-56',
    name: 'Sharingan Eye Pattern 2',
    category: 'anime',
    tags: ['anime', 'sharingan', 'eye', 'naruto'],
    difficulty: 'Medium',
    popularity: 93,
    imageUrl: './assets/anime/anime-css-56.png'
  }
];

const CAR_PRESETS = [
  {
    id: 'car-bugatti-chiron',
    name: 'Bugatti Chiron',
    category: 'cars',
    tags: ['cars', 'bugatti', 'supercar', 'line art'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/cars/car-v2-1.jpg'
  },
  {
    id: 'car-lamborghini-huracan',
    name: 'Lamborghini Huracan',
    category: 'cars',
    tags: ['cars', 'lamborghini', 'supercar', 'line art'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/cars/car-v2-2.webp'
  },
  {
    id: 'car-mclaren-p1',
    name: 'McLaren P1',
    category: 'cars',
    tags: ['cars', 'mclaren', 'hypercar', 'line art'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/cars/car-v2-3.webp'
  },
  {
    id: 'car-audi-sportback',
    name: 'Audi Sportback',
    category: 'cars',
    tags: ['cars', 'audi', 'sedan', 'line art'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/cars/car-v2-4.webp'
  },
  {
    id: 'car-audi-r8-concept',
    name: 'Audi R8 Concept',
    category: 'cars',
    tags: ['cars', 'audi', 'sports car', 'line art'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/cars/car-v2-5.webp'
  },
  {
    id: 'car-bmw-m8-csl',
    name: 'BMW M8 CSL',
    category: 'cars',
    tags: ['cars', 'bmw', 'coupe', 'line art'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/cars/car-v2-6.webp'
  },
  {
    id: 'car-sports-coupe',
    name: 'Toyota Supra GR Sports Coupe',
    category: 'cars',
    tags: ['cars', 'toyota', 'supra', 'sports car', 'line art'],
    difficulty: 'Easy',
    popularity: 94,
    imageUrl: './assets/cars/car-v2-7.jpg'
  },
  {
    id: 'car-audi-a3-cabriolet',
    name: '2014 Audi A3 Cabriolet',
    category: 'cars',
    tags: ['cars', 'audi', 'cabriolet', 'line art'],
    difficulty: 'Medium',
    popularity: 93,
    imageUrl: './assets/cars/car-v2-8.jpg'
  },
  {
    id: 'car-bugatti-veyron',
    name: 'Bugatti Veyron 16.4 Grand Sport',
    category: 'cars',
    tags: ['cars', 'bugatti', 'supercar', 'line art'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/cars/car-v2-9.jpg'
  },
  {
    id: 'car-ferrari-f40',
    name: 'Ferrari F40 Twin-Turbo',
    category: 'cars',
    tags: ['cars', 'ferrari', 'supercar', 'classic'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/cars/car-v2-10.webp'
  },
  {
    id: 'car-pagani-zonda',
    name: 'Pagani Zonda Cinque Roadster',
    category: 'cars',
    tags: ['cars', 'pagani', 'hypercar', 'line art'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/cars/car-v2-11.jpg'
  },
  {
    id: 'car-nissan-skyline-r34',
    name: 'Nissan Skyline GT-R R34 V-Spec',
    category: 'cars',
    tags: ['cars', 'nissan', 'jdm', 'skyline'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/cars/car-v2-12.webp'
  },
  {
    id: 'car-race-car-gt',
    name: 'Ford GT Le Mans Race Car',
    category: 'cars',
    tags: ['cars', 'race car', 'ford gt', 'line art'],
    difficulty: 'Easy',
    popularity: 92,
    imageUrl: './assets/cars/car-v2-13.webp'
  },
  {
    id: 'car-rolls-royce-ghost',
    name: 'Rolls-Royce Ghost Extended',
    category: 'cars',
    tags: ['cars', 'rolls royce', 'luxury', 'line art'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/cars/car-v2-14.jpg'
  },
  {
    id: 'car-porsche-gt3-rs',
    name: 'Porsche 911 GT3 RS (992)',
    category: 'cars',
    tags: ['cars', 'porsche', 'supercar', 'line art'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/cars/car-v2-15.png'
  },
  {
    id: 'car-classic-muscle',
    name: '1969 Ford Mustang Boss 429',
    category: 'cars',
    tags: ['cars', 'muscle car', 'ford mustang', 'vintage'],
    difficulty: 'Medium',
    popularity: 94,
    imageUrl: './assets/cars/car-v2-16.webp'
  },
  {
    id: 'car-supercar-outline',
    name: 'Koenigsegg Jesko Attack Hypercar',
    category: 'cars',
    tags: ['cars', 'koenigsegg', 'jesko', 'hypercar'],
    difficulty: 'Medium',
    popularity: 93,
    imageUrl: './assets/cars/car-v2-17.webp'
  },
  {
    id: 'car-modern-drift',
    name: 'Mazda RX-7 FD Spec Drift Car',
    category: 'cars',
    tags: ['cars', 'mazda', 'rx7', 'drift', 'jdm'],
    difficulty: 'Medium',
    popularity: 92,
    imageUrl: './assets/cars/car-v2-18.webp'
  },
  {
    id: 'car-track-racing',
    name: 'Aston Martin Valkyrie Track Racer',
    category: 'cars',
    tags: ['cars', 'aston martin', 'valkyrie', 'racing'],
    difficulty: 'Medium',
    popularity: 91,
    imageUrl: './assets/cars/car-v2-19.jpg'
  },
  {
    id: 'car-toyota-supra-mk4',
    name: 'Toyota Supra MK4 Turbo',
    category: 'cars',
    tags: ['cars', 'toyota', 'supra', 'jdm'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/cars/car-v2-20.png'
  }
];

const AIRCRAFT_PRESETS = [
  {
    id: 'aircraft-commercial-jet',
    name: 'Boeing 787 Dreamliner Commercial Jet',
    category: 'aircraft',
    tags: ['aircraft', 'airplane', 'boeing', '787', 'airliner'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/aircraft/aircraft-1.jpg'
  },
  {
    id: 'aircraft-passenger-plane',
    name: 'Airbus A380 Double-Decker Airliner',
    category: 'aircraft',
    tags: ['aircraft', 'airplane', 'airbus', 'a380', 'passenger'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/aircraft/aircraft-2.jpg'
  },
  {
    id: 'aircraft-helicopter',
    name: 'AH-64 Apache Attack Helicopter',
    category: 'aircraft',
    tags: ['aircraft', 'helicopter', 'apache', 'chopper', 'rotor'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/aircraft/aircraft-3.webp'
  },
  {
    id: 'aircraft-propeller-biplane',
    name: 'Sopwith Camel WW1 Vintage Biplane',
    category: 'aircraft',
    tags: ['aircraft', 'biplane', 'sopwith', 'propeller', 'vintage'],
    difficulty: 'Medium',
    popularity: 94,
    imageUrl: './assets/aircraft/aircraft-4.jpg'
  },
  {
    id: 'aircraft-f15-eagle',
    name: 'F-15 Eagle Fighter Jet',
    category: 'aircraft',
    tags: ['aircraft', 'f-15', 'fighter jet', 'military', 'air force'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/aircraft/aircraft-5.jpg'
  },
  {
    id: 'aircraft-f15-strike-eagle',
    name: 'F-15 Strike Eagle Supersonic Jet',
    category: 'aircraft',
    tags: ['aircraft', 'f-15', 'strike eagle', 'fighter jet'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/aircraft/aircraft-6.jpg'
  },
  {
    id: 'aircraft-f5-tiger',
    name: 'Northrop F-5 Tiger II Fighter',
    category: 'aircraft',
    tags: ['aircraft', 'f-5', 'tiger', 'fighter jet'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/aircraft/aircraft-7.webp'
  },
  {
    id: 'aircraft-supersonic-jet',
    name: 'Concorde Supersonic Passenger Jet',
    category: 'aircraft',
    tags: ['aircraft', 'concorde', 'supersonic', 'jet'],
    difficulty: 'Hard',
    popularity: 96,
    imageUrl: './assets/aircraft/aircraft-8.jpg'
  },
  {
    id: 'aircraft-military-cargo',
    name: 'Lockheed C-130 Hercules Cargo Plane',
    category: 'aircraft',
    tags: ['aircraft', 'hercules', 'cargo', 'military'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/aircraft/aircraft-9.jpg'
  },
  {
    id: 'aircraft-vintage-monoplane',
    name: 'P-51 Mustang Vintage Monoplane',
    category: 'aircraft',
    tags: ['aircraft', 'p-51', 'mustang', 'vintage', 'classic'],
    difficulty: 'Medium',
    popularity: 93,
    imageUrl: './assets/aircraft/aircraft-10.jpg'
  }
];

const CARTOON_PRESETS = [
  {
    id: 'cartoon-tom-cat',
    name: 'Tom Cat (Tom & Jerry)',
    category: 'cartoon',
    tags: ['cartoon', 'tom', 'jerry', 'cat', 'tom and jerry'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-1.webp'
  },
  {
    id: 'cartoon-bob-minion',
    name: 'Bob the Minion (Despicable Me)',
    category: 'cartoon',
    tags: ['cartoon', 'minion', 'bob', 'despicable me'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/cartoon/cartoon-2.jpg'
  },
  {
    id: 'cartoon-squidward',
    name: 'Squidward Tentacles (SpongeBob)',
    category: 'cartoon',
    tags: ['cartoon', 'squidward', 'spongebob', 'nickelodeon'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/cartoon/cartoon-3.webp'
  },
  {
    id: 'cartoon-sonic-hedgehog',
    name: 'Sonic the Hedgehog',
    category: 'cartoon',
    tags: ['cartoon', 'sonic', 'hedgehog', 'sega', 'gaming'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-4.webp'
  },
  {
    id: 'cartoon-nick-judy-zootopia',
    name: 'Nick Wilde & Judy Hopps (Zootopia)',
    category: 'cartoon',
    tags: ['cartoon', 'zootopia', 'nick wilde', 'judy hopps', 'disney'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/cartoon/cartoon-5.webp'
  },
  {
    id: 'cartoon-hello-kitty',
    name: 'Hello Kitty',
    category: 'cartoon',
    tags: ['cartoon', 'hello kitty', 'sanrio', 'cute'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/cartoon/cartoon-6.webp'
  },
  {
    id: 'cartoon-mickey-mouse',
    name: 'Mickey Mouse',
    category: 'cartoon',
    tags: ['cartoon', 'mickey mouse', 'disney', 'classic'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-7.jpg'
  },
  {
    id: 'cartoon-dancing-minion',
    name: 'Dancing Minion Dave',
    category: 'cartoon',
    tags: ['cartoon', 'minion', 'dave', 'despicable me'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/cartoon/cartoon-8.webp'
  },
  {
    id: 'cartoon-pikachu-electric',
    name: 'Pikachu (Electric Art)',
    category: 'cartoon',
    tags: ['cartoon', 'pikachu', 'pokemon', 'anime'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-9.webp'
  },
  {
    id: 'cartoon-shizuka-minamoto',
    name: 'Shizuka Minamoto (Doraemon)',
    category: 'cartoon',
    tags: ['cartoon', 'shizuka', 'doraemon', 'anime'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/cartoon/cartoon-10.webp'
  },
  {
    id: 'cartoon-gian-gouda',
    name: 'Gian / Takeshi Gouda (Doraemon)',
    category: 'cartoon',
    tags: ['cartoon', 'gian', 'takeshi gouda', 'doraemon'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/cartoon/cartoon-11.jpg'
  },
  {
    id: 'cartoon-doraemon',
    name: 'Doraemon',
    category: 'cartoon',
    tags: ['cartoon', 'doraemon', 'nobita', 'cat robot'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-12.jpg'
  },
  {
    id: 'cartoon-carl-fredricksen',
    name: 'Carl Fredricksen (UP Movie)',
    category: 'cartoon',
    tags: ['cartoon', 'carl', 'up', 'pixar', 'disney', 'balloons'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/cartoon/cartoon-13.jpg'
  },
  {
    id: 'cartoon-homer-simpson',
    name: 'Homer Simpson (The Simpsons)',
    category: 'cartoon',
    tags: ['cartoon', 'homer', 'simpson', 'the simpsons'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/cartoon/cartoon-14.webp'
  },
  {
    id: 'cartoon-happy-pikachu',
    name: 'Happy Waving Pikachu',
    category: 'cartoon',
    tags: ['cartoon', 'pikachu', 'pokemon'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/cartoon/cartoon-15.webp'
  },
  {
    id: 'cartoon-robin-teen-titans',
    name: 'Robin (Teen Titans Go!)',
    category: 'cartoon',
    tags: ['cartoon', 'robin', 'teen titans', 'teen titans go', 'dc'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/cartoon/cartoon-16.webp'
  },
  {
    id: 'cartoon-dekisugi',
    name: 'Dekisugi Hidetoshi (Doraemon)',
    category: 'cartoon',
    tags: ['cartoon', 'dekisugi', 'hidetoshi', 'doraemon'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/cartoon/cartoon-17.webp'
  },
  {
    id: 'cartoon-suneo',
    name: 'Suneo Honekawa (Doraemon)',
    category: 'cartoon',
    tags: ['cartoon', 'suneo', 'honekawa', 'doraemon'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/cartoon/cartoon-18.webp'
  },
  {
    id: 'cartoon-boss-baby',
    name: 'The Boss Baby (Ted Templeton)',
    category: 'cartoon',
    tags: ['cartoon', 'boss baby', 'ted templeton', 'dreamworks'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/cartoon/cartoon-19.webp'
  },
  {
    id: 'cartoon-nobita-nobi',
    name: 'Nobita Nobi (Doraemon)',
    category: 'cartoon',
    tags: ['cartoon', 'nobita', 'nobi', 'doraemon'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-20.webp'
  },
  {
    id: 'cartoon-spongebob-squarepants',
    name: 'SpongeBob SquarePants',
    category: 'cartoon',
    tags: ['cartoon', 'spongebob', 'squarepants', 'nickelodeon'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/cartoon/cartoon-21.webp'
  },
  {
    id: 'cartoon-cute-duckling',
    name: 'Cute Duckling in Raincoat',
    category: 'cartoon',
    tags: ['cartoon', 'duckling', 'duck', 'raincoat', 'cute'],
    difficulty: 'Easy',
    popularity: 94,
    imageUrl: './assets/cartoon/cartoon-22.jpg'
  }
];

const BIKE_PRESETS = [
  {
    id: 'bike-vespa-scooter',
    name: 'Classic Vespa Scooter',
    category: 'bikes',
    tags: ['bikes', 'scooter', 'vespa', 'classic', 'italian'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/bikes/bike-1.webp'
  },
  {
    id: 'bike-touring-cruiser',
    name: 'Touring Cruiser (Honda Goldwing)',
    category: 'bikes',
    tags: ['bikes', 'touring', 'goldwing', 'cruiser', 'motorcycle'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/bikes/bike-2.jpg'
  },
  {
    id: 'bike-yamaha-r6',
    name: 'Yamaha YZF-R6 Superbike',
    category: 'bikes',
    tags: ['bikes', 'yamaha', 'r6', 'superbike', 'sports bike'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/bikes/bike-3.webp'
  },
  {
    id: 'bike-sport-outline',
    name: 'Minimalist Sport Bike Vector',
    category: 'bikes',
    tags: ['bikes', 'sport bike', 'vector', 'outline', 'minimalist'],
    difficulty: 'Easy',
    popularity: 94,
    imageUrl: './assets/bikes/bike-4.webp'
  },
  {
    id: 'bike-harley-chopper',
    name: 'Classic Chopper Cruiser (Harley Style)',
    category: 'bikes',
    tags: ['bikes', 'chopper', 'harley', 'cruiser', 'motorcycle'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/bikes/bike-5.webp'
  },
  {
    id: 'bike-motogp-futuristic',
    name: 'Futuristic MotoGP Superbike',
    category: 'bikes',
    tags: ['bikes', 'motogp', 'superbike', 'racing', 'futuristic'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/bikes/bike-6.jpg'
  },
  {
    id: 'bike-motocross-dirt',
    name: 'Motocross Dirt Bike',
    category: 'bikes',
    tags: ['bikes', 'dirt bike', 'motocross', 'off-road', 'enduro'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/bikes/bike-7.webp'
  },
  {
    id: 'bike-batman-batcycle',
    name: 'Batman on Batcycle',
    category: 'bikes',
    tags: ['bikes', 'batman', 'batcycle', 'dc', 'superhero'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/bikes/bike-8.jpg'
  },
  {
    id: 'bike-batman-batpod',
    name: 'Batman on Dark Knight Batpod',
    category: 'bikes',
    tags: ['bikes', 'batman', 'batpod', 'dark knight', 'dc'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/bikes/bike-9.webp'
  },
  {
    id: 'bike-atv-quad',
    name: 'Off-Road ATV Quad Bike',
    category: 'bikes',
    tags: ['bikes', 'atv', 'quad bike', '4x4', 'off-road'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/bikes/bike-10.webp'
  },
  {
    id: 'bike-mountain-mtb',
    name: 'Downhill Mountain Bicycle (MTB)',
    category: 'bikes',
    tags: ['bikes', 'bicycle', 'mtb', 'mountain bike', 'downhill'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/bikes/bike-11.webp'
  }
];

const TRAIN_PRESETS = [
  {
    id: 'train-bullet-shinkansen',
    name: 'High-Speed Bullet Train (Shinkansen)',
    category: 'trains',
    tags: ['trains', 'bullet train', 'shinkansen', 'high speed', 'japan'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/trains/train-1.jpg'
  },
  {
    id: 'train-edward-engine',
    name: 'Edward the Blue Engine (Thomas & Friends)',
    category: 'trains',
    tags: ['trains', 'edward', 'thomas and friends', 'steam engine'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/trains/train-2.jpg'
  },
  {
    id: 'train-vintage-steam-front',
    name: 'Vintage Steam Locomotive (Front View)',
    category: 'trains',
    tags: ['trains', 'vintage', 'steam train', 'locomotive', 'steam engine'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/trains/train-3.jpg'
  },
  {
    id: 'train-puffing-choo-choo',
    name: 'Puffing Choo-Choo Steam Train',
    category: 'trains',
    tags: ['trains', 'steam train', 'choo choo', 'puffing'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/trains/train-4.jpg'
  },
  {
    id: 'train-modern-monorail',
    name: 'Modern Monorail Subway Train',
    category: 'trains',
    tags: ['trains', 'monorail', 'subway', 'metro', 'modern'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/trains/train-5.jpg'
  },
  {
    id: 'train-thomas-tank-engine',
    name: 'Thomas the Tank Engine (Smiling Thomas)',
    category: 'trains',
    tags: ['trains', 'thomas', 'tank engine', 'thomas and friends'],
    difficulty: 'Easy',
    popularity: 100,
    imageUrl: './assets/trains/train-6.jpg'
  },
  {
    id: 'train-thomas-on-tracks',
    name: 'Thomas the Tank Engine on Tracks',
    category: 'trains',
    tags: ['trains', 'thomas', 'tracks', 'thomas and friends'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/trains/train-7.jpg'
  },
  {
    id: 'train-cute-toy-choo-choo',
    name: 'Cute Toy Steam Train for Kids',
    category: 'trains',
    tags: ['trains', 'toy train', 'kids', 'cute', 'choo choo'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/trains/train-8.webp'
  },
  {
    id: 'train-modern-metro-station',
    name: 'Modern Metro Train at Station',
    category: 'trains',
    tags: ['trains', 'metro', 'station', 'subway', 'passenger'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/trains/train-9.webp'
  },
  {
    id: 'train-long-express-steam',
    name: 'Long Express Steam Passenger Train',
    category: 'trains',
    tags: ['trains', 'express', 'steam train', 'passenger train'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/trains/train-10.webp'
  },
  {
    id: 'train-electric-intercity',
    name: 'Modern Electric Intercity Express (TGV)',
    category: 'trains',
    tags: ['trains', 'electric train', 'intercity', 'tgv', 'express'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/trains/train-11.jpg'
  },
  {
    id: 'train-classic-wild-west',
    name: 'Classic 19th Century Steam Locomotive',
    category: 'trains',
    tags: ['trains', 'wild west', 'classic', '19th century', 'locomotive'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/trains/train-12.jpg'
  },
  {
    id: 'train-diesel-passenger',
    name: 'Diesel Passenger Train Engine',
    category: 'trains',
    tags: ['trains', 'diesel', 'passenger', 'engine', 'railway'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/trains/train-13.jpg'
  },
  {
    id: 'train-diesel-express-locomotive',
    name: 'Diesel Express Locomotive',
    category: 'trains',
    tags: ['trains', 'diesel', 'locomotive', 'express', 'railway'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/trains/train-14.jpg'
  }
];

const SUPERHERO_PRESETS = [
  {
    id: 'superhero-batman-classic',
    name: 'Batman (Classic Dark Knight)',
    category: 'superheroes',
    tags: ['superheroes', 'batman', 'dark knight', 'dc'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/superheroes/superhero-v2-1.jpg'
  },
  {
    id: 'superhero-thanos-gauntlet',
    name: 'Thanos Infinity Gauntlet',
    category: 'superheroes',
    tags: ['superheroes', 'thanos', 'infinity gauntlet', 'avengers', 'marvel'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/superheroes/superhero-v2-2.jpg'
  },
  {
    id: 'superhero-deadpool-heart',
    name: 'Deadpool Making a Heart',
    category: 'superheroes',
    tags: ['superheroes', 'deadpool', 'marvel', 'wadewilson', 'cute'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/superheroes/superhero-v2-3.jpg'
  },
  {
    id: 'superhero-chibi-spidey-friends',
    name: 'Chibi Spider-Man & Friends',
    category: 'superheroes',
    tags: ['superheroes', 'spiderman', 'spidey', 'ghost spider', 'miles morales'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/superheroes/superhero-v2-4.jpg'
  },
  {
    id: 'superhero-ironman-repulsor',
    name: 'Iron Man Repulsor Pose',
    category: 'superheroes',
    tags: ['superheroes', 'iron man', 'tony stark', 'avengers', 'marvel'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/superheroes/superhero-v2-5.webp'
  },
  {
    id: 'superhero-venom-symbiote',
    name: 'Venom (Marvel Symbiote)',
    category: 'superheroes',
    tags: ['superheroes', 'venom', 'symbiote', 'spiderman', 'marvel'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/superheroes/superhero-v2-6.jpg'
  },
  {
    id: 'superhero-lego-batman',
    name: 'Lego Batman',
    category: 'superheroes',
    tags: ['superheroes', 'lego', 'batman', 'dc', 'lego superhero'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/superheroes/superhero-v2-7.webp'
  },
  {
    id: 'superhero-thor-hammer',
    name: 'Thor Mjolnir Hammer',
    category: 'superheroes',
    tags: ['superheroes', 'thor', 'mjolnir', 'hammer', 'marvel'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/superheroes/superhero-v2-8.jpg'
  },
  {
    id: 'superhero-batman-logo',
    name: 'Classic Batman Bat Emblem',
    category: 'superheroes',
    tags: ['superheroes', 'batman', 'bat emblem', 'logo', 'dc'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/superheroes/superhero-v2-9.jpg'
  },
  {
    id: 'superhero-lego-spiderman',
    name: 'Lego Spider-Man Minifigure',
    category: 'superheroes',
    tags: ['superheroes', 'lego', 'spiderman', 'minifigure', 'marvel'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/superheroes/superhero-v2-10.jpg'
  },
  {
    id: 'superhero-flash-logo',
    name: 'The Flash Lightning Emblem',
    category: 'superheroes',
    tags: ['superheroes', 'the flash', 'flash', 'lightning', 'dc'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/superheroes/superhero-v2-11.jpg'
  },
  {
    id: 'superhero-black-panther-mask',
    name: 'Black Panther Mask',
    category: 'superheroes',
    tags: ['superheroes', 'black panther', 'mask', 'wakanda', 'marvel'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/superheroes/superhero-v2-12.webp'
  },
  {
    id: 'superhero-nebula-batons',
    name: 'Nebula with Batons (Guardians)',
    category: 'superheroes',
    tags: ['superheroes', 'nebula', 'guardians of the galaxy', 'marvel'],
    difficulty: 'Hard',
    popularity: 95,
    imageUrl: './assets/superheroes/superhero-v2-13.webp'
  },
  {
    id: 'superhero-superman-heroic',
    name: 'Superman Heroic Pose (Man of Steel)',
    category: 'superheroes',
    tags: ['superheroes', 'superman', 'man of steel', 'clark kent', 'dc'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/superheroes/superhero-v2-14.jpg'
  },
  {
    id: 'superhero-superman-logo',
    name: 'Superman S Chest Emblem',
    category: 'superheroes',
    tags: ['superheroes', 'superman', 'emblem', 'logo', 'dc'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/superheroes/superhero-v2-15.jpg'
  },
  {
    id: 'superhero-thor-odinson',
    name: 'Thor Odinson (God of Thunder)',
    category: 'superheroes',
    tags: ['superheroes', 'thor', 'god of thunder', 'avengers', 'marvel'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/superheroes/superhero-v2-16.jpg'
  },
  {
    id: 'superhero-thor-hammer-icon',
    name: 'Mjolnir Hammer Icon Vector',
    category: 'superheroes',
    tags: ['superheroes', 'mjolnir', 'thor', 'hammer', 'icon'],
    difficulty: 'Easy',
    popularity: 94,
    imageUrl: './assets/superheroes/superhero-v2-17.webp'
  },
  {
    id: 'superhero-spiderman-chest-logo',
    name: 'Spider-Man Spider Chest Emblem',
    category: 'superheroes',
    tags: ['superheroes', 'spiderman', 'spider emblem', 'logo', 'marvel'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/superheroes/superhero-v2-18.webp'
  }
];

const SHIP_PRESETS = [
  {
    id: 'ship-cute-tugboat',
    name: 'Cute Toy Steamboat / Tugboat',
    category: 'ships',
    tags: ['ships', 'tugboat', 'steamboat', 'cute', 'boat'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/ships/ship-1.webp'
  },
  {
    id: 'ship-rms-titanic',
    name: 'RMS Titanic Ocean Liner',
    category: 'ships',
    tags: ['ships', 'titanic', 'ocean liner', 'steamship', 'famous'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/ships/ship-2.webp'
  },
  {
    id: 'ship-naval-battleship',
    name: 'Naval Battleship with Cannons',
    category: 'ships',
    tags: ['ships', 'battleship', 'warship', 'military', 'navy'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/ships/ship-3.jpg'
  },
  {
    id: 'ship-vintage-steamship',
    name: 'Vintage Steam Passenger Ship',
    category: 'ships',
    tags: ['ships', 'steamship', 'vintage', 'passenger', 'liner'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/ships/ship-4.jpg'
  },
  {
    id: 'ship-grand-cruise-liner',
    name: 'Grand Cruise Liner with Anchor',
    category: 'ships',
    tags: ['ships', 'cruise ship', 'liner', 'anchor', 'ocean'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/ships/ship-5.webp'
  },
  {
    id: 'ship-pirate-galleon',
    name: 'Classic Pirate Galleon Sailing Ship',
    category: 'ships',
    tags: ['ships', 'pirate ship', 'galleon', 'sailing ship', 'caribbean'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/ships/ship-6.jpg'
  },
  {
    id: 'ship-mayflower-historical',
    name: 'The Mayflower Historical Sailing Ship',
    category: 'ships',
    tags: ['ships', 'mayflower', 'history', 'sailing ship', 'pilgrims'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/ships/ship-7.webp'
  },
  {
    id: 'ship-skull-crossbones-pirate',
    name: 'Skull & Crossbones Pirate Ship',
    category: 'ships',
    tags: ['ships', 'pirate', 'jolly roger', 'skull', 'flag'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/ships/ship-8.webp'
  },
  {
    id: 'ship-colorful-sailboat',
    name: 'Colorful Sailboat on Waves',
    category: 'ships',
    tags: ['ships', 'sailboat', 'waves', 'simple', 'cute'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/ships/ship-9.webp'
  },
  {
    id: 'ship-luxury-cruise',
    name: 'Luxury Ocean Cruise Ship at Sea',
    category: 'ships',
    tags: ['ships', 'cruise ship', 'luxury', 'ocean', 'vacation'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/ships/ship-10.webp'
  },
  {
    id: 'ship-wooden-frigate',
    name: 'Tall Wooden Sailing Frigate',
    category: 'ships',
    tags: ['ships', 'frigate', 'wooden ship', 'sailing', 'masts'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/ships/ship-11.webp'
  },
  {
    id: 'ship-stormy-sea-sailing',
    name: 'Majestic Sailing Vessel in Stormy Sea',
    category: 'ships',
    tags: ['ships', 'stormy sea', 'sailing ship', 'waves', 'ocean'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/ships/ship-12.jpg'
  },
  {
    id: 'ship-jolly-roger-going-merry',
    name: 'Jolly Roger Pirate Ship',
    category: 'ships',
    tags: ['ships', 'pirate ship', 'jolly roger', 'going merry', 'anime'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/ships/ship-13.jpg'
  },
  {
    id: 'ship-single-mast-sailboat',
    name: 'Single-Mast Sailboat with Lifebuoy',
    category: 'ships',
    tags: ['ships', 'sailboat', 'lifebuoy', 'single mast', 'boat'],
    difficulty: 'Easy',
    popularity: 94,
    imageUrl: './assets/ships/ship-14.jpg'
  },
  {
    id: 'ship-three-masted-schooner',
    name: 'Three-Masted Schooner Ship',
    category: 'ships',
    tags: ['ships', 'schooner', 'three masted', 'sailing ship', 'vintage'],
    difficulty: 'Hard',
    popularity: 96,
    imageUrl: './assets/ships/ship-15.webp'
  },
  {
    id: 'ship-fishing-trawler',
    name: 'Ocean Fishing Trawler Boat',
    category: 'ships',
    tags: ['ships', 'fishing boat', 'trawler', 'ocean', 'boat'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/ships/ship-16.webp'
  },
  {
    id: 'ship-vintage-caravel',
    name: 'Vintage Wooden Caravel Ship',
    category: 'ships',
    tags: ['ships', 'caravel', 'vintage', 'wooden ship', 'explorer'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/ships/ship-17.jpg'
  },
  {
    id: 'ship-titanic-sunny-sky',
    name: 'Titanic Steam Liner with Sun & Clouds',
    category: 'ships',
    tags: ['ships', 'titanic', 'steam liner', 'kids', 'sun'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/ships/ship-18.webp'
  }
];

const FISH_PRESETS = [
  {
    id: 'fish-orca-killer-whale',
    name: 'Orca Killer Whale',
    category: 'fish',
    tags: ['fish', 'orca', 'killer whale', 'ocean', 'sea'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/fish/fish-1.webp'
  },
  {
    id: 'fish-baby-shark',
    name: 'Baby Shark',
    category: 'fish',
    tags: ['fish', 'baby shark', 'shark', 'cute', 'kids'],
    difficulty: 'Easy',
    popularity: 100,
    imageUrl: './assets/fish/fish-2.jpg'
  },
  {
    id: 'fish-simple-icon',
    name: 'Simple Minimalist Fish Icon',
    category: 'fish',
    tags: ['fish', 'icon', 'simple', 'minimalist', 'outline'],
    difficulty: 'Easy',
    popularity: 94,
    imageUrl: './assets/fish/fish-3.jpg'
  },
  {
    id: 'fish-cute-jumping-dolphin',
    name: 'Cute Jumping Dolphin',
    category: 'fish',
    tags: ['fish', 'dolphin', 'ocean', 'jumping', 'cute'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/fish/fish-4.webp'
  },
  {
    id: 'fish-friendly-shark',
    name: 'Friendly Cartoon Shark',
    category: 'fish',
    tags: ['fish', 'shark', 'cartoon', 'friendly'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/fish/fish-5.jpg'
  },
  {
    id: 'fish-blue-whale-outline',
    name: 'Simple Blue Whale Outline',
    category: 'fish',
    tags: ['fish', 'blue whale', 'whale', 'ocean'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/fish/fish-6.webp'
  },
  {
    id: 'fish-swimming-shark-bubbles',
    name: 'Happy Swimming Shark with Bubbles',
    category: 'fish',
    tags: ['fish', 'shark', 'bubbles', 'swimming'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/fish/fish-7.webp'
  },
  {
    id: 'fish-cute-goldfish',
    name: 'Cute Goldfish / Bubble Fish',
    category: 'fish',
    tags: ['fish', 'goldfish', 'bubble fish', 'cute'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/fish/fish-8.jpg'
  },
  {
    id: 'fish-bottlenose-dolphin',
    name: 'Bottlenose Dolphin in Mid-Air Jump',
    category: 'fish',
    tags: ['fish', 'dolphin', 'bottlenose', 'ocean', 'jump'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/fish/fish-9.webp'
  },
  {
    id: 'fish-ocean-seahorse',
    name: 'Ocean Seahorse',
    category: 'fish',
    tags: ['fish', 'seahorse', 'hippocampus', 'ocean'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/fish/fish-10.webp'
  },
  {
    id: 'fish-seahorse-starfish',
    name: 'Cute Seahorse with Starfish & Seaweed',
    category: 'fish',
    tags: ['fish', 'seahorse', 'starfish', 'seaweed', 'cute'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/fish/fish-11.webp'
  },
  {
    id: 'fish-tropical-angelfish',
    name: 'Cartoon Tropical Angelfish',
    category: 'fish',
    tags: ['fish', 'angelfish', 'tropical', 'cartoon'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/fish/fish-12.webp'
  },
  {
    id: 'fish-spouting-blue-whale',
    name: 'Spouting Blue Whale at Sea',
    category: 'fish',
    tags: ['fish', 'blue whale', 'whale', 'spout', 'ocean'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/fish/fish-13.webp'
  },
  {
    id: 'fish-great-white-shark',
    name: 'Great White Shark Underwater',
    category: 'fish',
    tags: ['fish', 'great white shark', 'shark', 'underwater'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/fish/fish-14.jpg'
  },
  {
    id: 'fish-baby-dolphin-seaweed',
    name: 'Cute Baby Dolphin in Seaweed',
    category: 'fish',
    tags: ['fish', 'baby dolphin', 'dolphin', 'seaweed'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/fish/fish-15.jpg'
  },
  {
    id: 'fish-playful-dolphin',
    name: 'Playful Ocean Dolphin',
    category: 'fish',
    tags: ['fish', 'dolphin', 'playful', 'ocean'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/fish/fish-16.webp'
  },
  {
    id: 'fish-goldfish-bowl',
    name: 'Goldfish in Round Fishbowl',
    category: 'fish',
    tags: ['fish', 'goldfish', 'fishbowl', 'aquarium'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/fish/fish-17.webp'
  },
  {
    id: 'fish-bass-salmon',
    name: 'Large Bass / Salmon River Fish',
    category: 'fish',
    tags: ['fish', 'bass', 'salmon', 'river fish', 'detailed'],
    difficulty: 'Hard',
    popularity: 95,
    imageUrl: './assets/fish/fish-18.webp'
  },
  {
    id: 'fish-veiltail-goldfish',
    name: 'Fancy Veiltail Goldfish',
    category: 'fish',
    tags: ['fish', 'veiltail', 'goldfish', 'fancy fish'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/fish/fish-19.webp'
  },
  {
    id: 'fish-simple-dolphin',
    name: 'Simple Dolphin Outline',
    category: 'fish',
    tags: ['fish', 'dolphin', 'simple', 'outline'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/fish/fish-20.webp'
  },
  {
    id: 'fish-seahorse-bubbles',
    name: 'Adorable Seahorse with Bubbles',
    category: 'fish',
    tags: ['fish', 'seahorse', 'bubbles', 'adorable'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/fish/fish-21.webp'
  },
  {
    id: 'fish-fountain-whale',
    name: 'Water Fountain Spouting Whale',
    category: 'fish',
    tags: ['fish', 'whale', 'spouting', 'fountain'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/fish/fish-22.jpg'
  },
  {
    id: 'fish-scaled-carp',
    name: 'Scaled Pond Fish / Carp',
    category: 'fish',
    tags: ['fish', 'carp', 'pond fish', 'scaled'],
    difficulty: 'Medium',
    popularity: 94,
    imageUrl: './assets/fish/fish-23.jpg'
  },
  {
    id: 'fish-striped-clownfish',
    name: 'Striped Clownfish in Seaweed',
    category: 'fish',
    tags: ['fish', 'clownfish', 'nemo', 'seaweed', 'striped'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/fish/fish-24.webp'
  }
];

const ANIMAL_PRESETS = [
  {
    id: 'animal-cute-lamb',
    name: 'Cute Fluffy Lamb / Sheep',
    category: 'animals',
    tags: ['animals', 'sheep', 'lamb', 'fluffy', 'farm'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/animals/animal-1.webp'
  },
  {
    id: 'animal-horse-head-stallion',
    name: 'Majestic Horse Head / Stallion',
    category: 'animals',
    tags: ['animals', 'horse', 'stallion', 'mane', 'majestic'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/animals/animal-2.webp'
  },
  {
    id: 'animal-cute-alligator',
    name: 'Cute Alligator / Crocodile',
    category: 'animals',
    tags: ['animals', 'alligator', 'crocodile', 'reptile', 'cute'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/animals/animal-3.webp'
  },
  {
    id: 'animal-cool-frog-sunglasses',
    name: 'Cool Frog with Sunglasses on Lily Pad',
    category: 'animals',
    tags: ['animals', 'frog', 'sunglasses', 'lily pad', 'cool'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/animals/animal-4.webp'
  },
  {
    id: 'animal-lion-king-jungle',
    name: 'Majestic Lion King of Jungle',
    category: 'animals',
    tags: ['animals', 'lion', 'king', 'jungle', 'wild'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/animals/animal-5.webp'
  },
  {
    id: 'animal-farm-goat',
    name: 'Farm Goat with Horns',
    category: 'animals',
    tags: ['animals', 'goat', 'horns', 'farm'],
    difficulty: 'Medium',
    popularity: 94,
    imageUrl: './assets/animals/animal-6.jpg'
  },
  {
    id: 'animal-fluffy-kitten-cat',
    name: 'Adorable Fluffy Kitten / Cat',
    category: 'animals',
    tags: ['animals', 'cat', 'kitten', 'cute', 'pet'],
    difficulty: 'Easy',
    popularity: 100,
    imageUrl: './assets/animals/animal-7.webp'
  },
  {
    id: 'animal-desert-camel',
    name: 'Desert Camel with Humps',
    category: 'animals',
    tags: ['animals', 'camel', 'desert', 'hump'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/animals/animal-8.jpg'
  },
  {
    id: 'animal-forest-deer-stag',
    name: 'Graceful Forest Deer / Stag',
    category: 'animals',
    tags: ['animals', 'deer', 'stag', 'antlers', 'forest'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/animals/animal-9.webp'
  },
  {
    id: 'animal-disney-bambi-deer',
    name: 'Disney Bambi Baby Deer',
    category: 'animals',
    tags: ['animals', 'bambi', 'deer', 'disney', 'cute'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/animals/animal-10.webp'
  },
  {
    id: 'animal-minimalist-rabbit',
    name: 'Minimalist Cute Rabbit / Bunny',
    category: 'animals',
    tags: ['animals', 'rabbit', 'bunny', 'minimalist', 'cute'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/animals/animal-11.webp'
  },
  {
    id: 'animal-fluffy-bunny-whiskers',
    name: 'Fluffy Bunny with Whiskers',
    category: 'animals',
    tags: ['animals', 'bunny', 'rabbit', 'whiskers', 'fluffy'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/animals/animal-12.webp'
  },
  {
    id: 'animal-baby-giraffe-spots',
    name: 'Cute Baby Giraffe with Spots',
    category: 'animals',
    tags: ['animals', 'giraffe', 'baby giraffe', 'spots', 'cute'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/animals/animal-13.webp'
  },
  {
    id: 'animal-labrador-puppy-dog',
    name: 'Labrador Retriever Puppy / Dog',
    category: 'animals',
    tags: ['animals', 'dog', 'labrador', 'puppy', 'pet'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/animals/animal-14.webp'
  },
  {
    id: 'animal-mountain-goat-beard',
    name: 'Mountain Goat with Beard & Horns',
    category: 'animals',
    tags: ['animals', 'goat', 'mountain goat', 'horns', 'beard'],
    difficulty: 'Medium',
    popularity: 95,
    imageUrl: './assets/animals/animal-15.webp'
  },
  {
    id: 'animal-kawaii-kitty-cat',
    name: 'Cute Kawaii Kitty Cat',
    category: 'animals',
    tags: ['animals', 'cat', 'kawaii', 'kitty', 'cute'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/animals/animal-16.webp'
  },
  {
    id: 'animal-african-elephant-head',
    name: 'African Elephant Head with Tusks',
    category: 'animals',
    tags: ['animals', 'elephant', 'tusks', 'trunk', 'safari'],
    difficulty: 'Hard',
    popularity: 98,
    imageUrl: './assets/animals/animal-17.webp'
  },
  {
    id: 'animal-geometric-polygonal-deer',
    name: 'Geometric Polygonal Deer Head',
    category: 'animals',
    tags: ['animals', 'deer', 'geometric', 'polygonal', 'art'],
    difficulty: 'Hard',
    popularity: 97,
    imageUrl: './assets/animals/animal-18.webp'
  },
  {
    id: 'animal-fluffy-poodle-puppy',
    name: 'Cute Fluffy Poodle Puppy',
    category: 'animals',
    tags: ['animals', 'dog', 'poodle', 'puppy', 'cute'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/animals/animal-19.webp'
  },
  {
    id: 'animal-peeking-giraffe-head',
    name: 'Peeking Giraffe Face / Head',
    category: 'animals',
    tags: ['animals', 'giraffe', 'head', 'peeking', 'cute'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/animals/animal-20.webp'
  },
  {
    id: 'animal-wild-horse-face',
    name: 'Wild Horse Face with Mane',
    category: 'animals',
    tags: ['animals', 'horse', 'wild horse', 'mane', 'face'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/animals/animal-21.webp'
  }
];

const BIRD_PRESETS = [
  {
    id: 'bird-songbird-branch',
    name: 'Songbird Perched on Tree Branch',
    category: 'birds',
    tags: ['birds', 'songbird', 'branch', 'tree', 'nature'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/birds/bird-1.webp'
  },
  {
    id: 'bird-tropical-macaw',
    name: 'Tropical Macaw Parrot',
    category: 'birds',
    tags: ['birds', 'macaw', 'parrot', 'tropical', 'jungle'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/birds/bird-2.jpg'
  },
  {
    id: 'bird-cute-robin-sparrow',
    name: 'Cute Little Robin / Sparrow',
    category: 'birds',
    tags: ['birds', 'robin', 'sparrow', 'cute', 'little bird'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/birds/bird-3.jpg'
  },
  {
    id: 'bird-tropical-toucan',
    name: 'Tropical Toucan Bird',
    category: 'birds',
    tags: ['birds', 'toucan', 'beak', 'tropical', 'rainforest'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/birds/bird-4.jpg'
  },
  {
    id: 'bird-mother-feeding-nest',
    name: 'Mother Bird Feeding Chicks in Nest',
    category: 'birds',
    tags: ['birds', 'mother bird', 'nest', 'chicks', 'family'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/birds/bird-5.webp'
  },
  {
    id: 'bird-flying-swallow',
    name: 'Graceful Flying Swallow Bird',
    category: 'birds',
    tags: ['birds', 'swallow', 'flying', 'graceful', 'sky'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/birds/bird-6.webp'
  },
  {
    id: 'bird-majestic-peacock',
    name: 'Majestic Peacock with Displayed Feathers',
    category: 'birds',
    tags: ['birds', 'peacock', 'feathers', 'majestic', 'tail'],
    difficulty: 'Hard',
    popularity: 100,
    imageUrl: './assets/birds/bird-7.webp'
  },
  {
    id: 'bird-cute-parakeet-lovebird',
    name: 'Cute Parakeet / Lovebird',
    category: 'birds',
    tags: ['birds', 'parakeet', 'lovebird', 'pet', 'cute'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/birds/bird-8.jpg'
  },
  {
    id: 'bird-flying-hummingbird',
    name: 'Flying Hummingbird with Long Beak',
    category: 'birds',
    tags: ['birds', 'hummingbird', 'beak', 'wings', 'flight'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/birds/bird-9.jpg'
  },
  {
    id: 'bird-peace-dove-heart',
    name: 'Dove of Peace with Heart',
    category: 'birds',
    tags: ['birds', 'dove', 'peace', 'heart', 'flying'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/birds/bird-10.webp'
  },
  {
    id: 'bird-elegant-swan-vector',
    name: 'Elegant Swan Line Art Vector',
    category: 'birds',
    tags: ['birds', 'swan', 'line art', 'vector', 'elegant'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/birds/bird-11.webp'
  },
  {
    id: 'bird-graceful-white-swan',
    name: 'Graceful White Swan on Water',
    category: 'birds',
    tags: ['birds', 'swan', 'water', 'lake', 'graceful'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/birds/bird-12.webp'
  },
  {
    id: 'bird-geometric-flying-owl',
    name: 'Geometric Flying Owl Logo',
    category: 'birds',
    tags: ['birds', 'owl', 'geometric', 'flying', 'logo'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/birds/bird-13.webp'
  },
  {
    id: 'bird-cute-baby-chick',
    name: 'Cute Baby Chick',
    category: 'birds',
    tags: ['birds', 'chick', 'baby chick', 'cute', 'chicken'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/birds/bird-14.webp'
  },
  {
    id: 'bird-peace-dove-olive-branch',
    name: 'Peace Dove with Olive Branch',
    category: 'birds',
    tags: ['birds', 'dove', 'pigeon', 'olive branch', 'peace'],
    difficulty: 'Easy',
    popularity: 100,
    imageUrl: './assets/birds/bird-15.jpg'
  }
];

const FLOWER_PRESETS = [
  {
    id: 'flower-simple-daisy',
    name: 'Simple 6-Petal Daisy Blossom',
    category: 'flowers',
    tags: ['flowers', 'daisy', 'simple', 'blossom', 'petal'],
    difficulty: 'Easy',
    popularity: 98,
    imageUrl: './assets/flowers/flower-1.webp'
  },
  {
    id: 'flower-elegant-tulip',
    name: 'Elegant Tulip Flower',
    category: 'flowers',
    tags: ['flowers', 'tulip', 'elegant', 'spring', 'stem'],
    difficulty: 'Easy',
    popularity: 99,
    imageUrl: './assets/flowers/flower-2.webp'
  },
  {
    id: 'flower-cute-garden',
    name: 'Cute Simple Garden Flower with Leaves',
    category: 'flowers',
    tags: ['flowers', 'garden', 'simple', 'leaves', 'cute'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/flowers/flower-3.webp'
  },
  {
    id: 'flower-lush-tree-of-life',
    name: 'Lush Flowering Tree of Life',
    category: 'flowers',
    tags: ['flowers', 'tree', 'flowering tree', 'nature', 'foliage'],
    difficulty: 'Hard',
    popularity: 99,
    imageUrl: './assets/flowers/flower-4.webp'
  },
  {
    id: 'flower-potted-tulip',
    name: 'Potted Tulip Plant',
    category: 'flowers',
    tags: ['flowers', 'tulip', 'potted plant', 'pot'],
    difficulty: 'Easy',
    popularity: 96,
    imageUrl: './assets/flowers/flower-5.webp'
  },
  {
    id: 'flower-blooming-lily-bud',
    name: 'Blooming Lily Flower with Bud',
    category: 'flowers',
    tags: ['flowers', 'lily', 'bud', 'blooming', 'garden'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/flowers/flower-6.webp'
  },
  {
    id: 'flower-tropical-hibiscus-branch',
    name: 'Tropical Hibiscus Flowers on Branch',
    category: 'flowers',
    tags: ['flowers', 'hibiscus', 'tropical', 'branch', 'blossoms'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/flowers/flower-7.jpg'
  },
  {
    id: 'flower-garden-floral-bunch',
    name: 'Elegant Garden Floral Bunch',
    category: 'flowers',
    tags: ['flowers', 'floral bunch', 'garden', 'wildflowers'],
    difficulty: 'Medium',
    popularity: 97,
    imageUrl: './assets/flowers/flower-8.webp'
  },
  {
    id: 'flower-potted-spring-blossoms',
    name: 'Potted Spring Blossoms Bunch',
    category: 'flowers',
    tags: ['flowers', 'potted', 'spring blossoms', 'pot'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/flowers/flower-9.webp'
  },
  {
    id: 'flower-quilting-stencil',
    name: 'Geometric Quilting Flower Stencil',
    category: 'flowers',
    tags: ['flowers', 'stencil', 'geometric', 'quilting'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/flowers/flower-10.webp'
  },
  {
    id: 'flower-plumeria-frangipani',
    name: 'Plumeria / Frangipani Blossom with Leaves',
    category: 'flowers',
    tags: ['flowers', 'plumeria', 'frangipani', 'tropical', 'leaves'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/flowers/flower-11.jpg'
  },
  {
    id: 'flower-cherry-blossom-sakura',
    name: '5-Petal Cherry Blossom / Sakura',
    category: 'flowers',
    tags: ['flowers', 'sakura', 'cherry blossom', 'japan', 'petal'],
    difficulty: 'Easy',
    popularity: 100,
    imageUrl: './assets/flowers/flower-12.jpg'
  },
  {
    id: 'flower-floral-corner-border',
    name: 'Elegant Floral Corner Border',
    category: 'flowers',
    tags: ['flowers', 'corner', 'border', 'vines', 'decorative'],
    difficulty: 'Medium',
    popularity: 98,
    imageUrl: './assets/flowers/flower-13.jpg'
  },
  {
    id: 'flower-simple-tulip-bud',
    name: 'Simple Tulip Bud for Kids',
    category: 'flowers',
    tags: ['flowers', 'tulip', 'bud', 'kids', 'simple'],
    difficulty: 'Easy',
    popularity: 95,
    imageUrl: './assets/flowers/flower-14.jpg'
  },
  {
    id: 'flower-bouquet-vase',
    name: 'Flower Bouquet in Ceramic Vase',
    category: 'flowers',
    tags: ['flowers', 'bouquet', 'vase', 'ceramic', 'gift'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/flowers/flower-15.jpg'
  },
  {
    id: 'flower-sunflower-marigold-icon',
    name: 'Multi-Petal Sunflower / Marigold Icon',
    category: 'flowers',
    tags: ['flowers', 'sunflower', 'marigold', 'icon', 'petal'],
    difficulty: 'Easy',
    popularity: 97,
    imageUrl: './assets/flowers/flower-16.webp'
  },
  {
    id: 'flower-hawaiian-hibiscus',
    name: 'Hawaiian Hibiscus Blossoms',
    category: 'flowers',
    tags: ['flowers', 'hawaiian', 'hibiscus', 'aloha', 'tropical'],
    difficulty: 'Medium',
    popularity: 99,
    imageUrl: './assets/flowers/flower-17.webp'
  },
  {
    id: 'flower-potted-hibiscus',
    name: 'Potted Hibiscus Plant in Pot',
    category: 'flowers',
    tags: ['flowers', 'hibiscus', 'potted', 'plant', 'pot'],
    difficulty: 'Medium',
    popularity: 96,
    imageUrl: './assets/flowers/flower-18.jpg'
  },
  {
    id: 'flower-single-rose-stem',
    name: 'Single Rose Stem with Leaves',
    category: 'flowers',
    tags: ['flowers', 'rose', 'single rose', 'stem', 'love'],
    difficulty: 'Easy',
    popularity: 100,
    imageUrl: './assets/flowers/flower-19.jpg'
  },
  {
    id: 'flower-blooming-rose-leaves',
    name: 'Beautiful Blooming Rose with Leaves',
    category: 'flowers',
    tags: ['flowers', 'rose', 'blooming rose', 'leaves', 'romantic'],
    difficulty: 'Medium',
    popularity: 100,
    imageUrl: './assets/flowers/flower-20.webp'
  }
];

function generateCategorySketches(categoryId, count) {
  count = count || 30;
  var categoryObj = CATEGORIES.find(function(c) { return c.id === categoryId; }) || CATEGORIES[0];
  var items = [];

  if (categoryId === 'anime') {
    items = ANIME_PRESETS.slice();
  } else if (categoryId === 'cars') {
    return CAR_PRESETS.slice();
  } else if (categoryId === 'aircraft') {
    return AIRCRAFT_PRESETS.slice();
  } else if (categoryId === 'cartoon') {
    return CARTOON_PRESETS.slice();
  } else if (categoryId === 'bikes') {
    return BIKE_PRESETS.slice();
  } else if (categoryId === 'trains') {
    return TRAIN_PRESETS.slice();
  } else if (categoryId === 'superheroes') {
    return SUPERHERO_PRESETS.slice();
  } else if (categoryId === 'ships') {
    return SHIP_PRESETS.slice();
  } else if (categoryId === 'fish') {
    return FISH_PRESETS.slice();
  } else if (categoryId === 'animals') {
    return ANIMAL_PRESETS.slice();
  } else if (categoryId === 'birds') {
    return BIRD_PRESETS.slice();
  } else if (categoryId === 'flowers') {
    return FLOWER_PRESETS.slice();
  }

  var startIdx = items.length;
  var adjectives = [
    'Classic', 'Minimalist', 'Detailed', 'Dynamic', 'Artistic', 'Modern', 'Geometric',
    'Studio', 'Pro Outline', 'Cyber', 'Neo', 'Vintage', 'Futuristic', 'Zen', 'Bold'
  ];

  for (var i = startIdx; i < count; i++) {
    var num = i + 1;
    var adj = adjectives[i % adjectives.length];
    var diff = (i % 3 === 0) ? 'Easy' : ((i % 3 === 1) ? 'Medium' : 'Hard');

    items.push({
      id: categoryId + '-sketch-' + num,
      name: adj + ' ' + categoryObj.name + ' #' + num,
      category: categoryId,
      tags: [categoryId, categoryObj.name.toLowerCase(), adj.toLowerCase()],
      difficulty: diff,
      popularity: Math.max(65, 99 - (i % 30)),
      svgPath: createProceduralSVG(categoryId, num, i)
    });
  }

  return items;
}

function createProceduralSVG(categoryId, num, index) {
  var sw = 3 + (index % 3);
  var offset = (index * 17) % 80;
  return '<g stroke="#000" stroke-width="' + sw + '" fill="none"><circle cx="200" cy="200" r="' + (80 + offset) + '" /><path d="M120 120 L280 280 M280 120 L120 280" stroke-width="' + sw + '" /></g>';
}

var catalogCache = new Map();

function getSketchesByCategory(categoryId) {
  if (catalogCache.has(categoryId)) return catalogCache.get(categoryId);
  var list = generateCategorySketches(categoryId, 30);
  catalogCache.set(categoryId, list);
  return list;
}

function getAllSketches() {
  var all = [];
  CATEGORIES.forEach(function(cat) {
    all = all.concat(getSketchesByCategory(cat.id));
  });
  return all;
}

function getFeaturedSketches() {
  return [
    CAR_PRESETS[0],  // Bugatti Chiron
    CAR_PRESETS[1],  // Lamborghini
    CAR_PRESETS[9],  // Ferrari F40
    CAR_PRESETS[11], // Nissan Skyline R34
    ANIME_PRESETS[0],  // Tanjiro
    ANIME_PRESETS[1],  // Gabimaru
    ANIME_PRESETS[13], // Kakashi
    ANIME_PRESETS[10]  // Gojo
  ];
}

function getTrendingSketches() {
  return [
    CAR_PRESETS[0],  // Bugatti Chiron
    CAR_PRESETS[2],  // McLaren P1
    CAR_PRESETS[5],  // BMW M8 CSL
    CAR_PRESETS[11], // Nissan Skyline
    ANIME_PRESETS[0],
    ANIME_PRESETS[1],
    ANIME_PRESETS[8],
    ANIME_PRESETS[10]
  ];
}

function getNewSketches() {
  return [
    CAR_PRESETS[0],  // Bugatti Chiron
    CAR_PRESETS[1],  // Lamborghini
    CAR_PRESETS[2],  // McLaren P1
    CAR_PRESETS[9],  // Ferrari F40
    CAR_PRESETS[11], // Nissan Skyline GT-R R34
    CAR_PRESETS[13], // Rolls Royce Ghost
    ANIME_PRESETS[0],
    ANIME_PRESETS[1]
  ];
}

function searchSketches(query) {
  if (!query || !query.trim()) return [];
  var q = query.toLowerCase().trim();
  var all = getAllSketches();
  return all.filter(function(s) {
    var nameMatch = s.name && s.name.toLowerCase().indexOf(q) !== -1;
    var catMatch = s.category && s.category.toLowerCase().indexOf(q) !== -1;
    var idMatch = s.id && s.id.toLowerCase().indexOf(q) !== -1;
    var tagMatch = s.tags && Array.isArray(s.tags) && s.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; });
    return nameMatch || catMatch || idMatch || tagMatch;
  });
}

function getSketchById(id) {
  var preset = ANIME_PRESETS.find(function(p) { return p.id === id; });
  if (preset) return preset;
  var carPreset = CAR_PRESETS.find(function(p) { return p.id === id; });
  if (carPreset) return carPreset;
  var airPreset = AIRCRAFT_PRESETS.find(function(p) { return p.id === id; });
  if (airPreset) return airPreset;
  var toonPreset = CARTOON_PRESETS.find(function(p) { return p.id === id; });
  if (toonPreset) return toonPreset;
  var bikePreset = BIKE_PRESETS.find(function(p) { return p.id === id; });
  if (bikePreset) return bikePreset;
  var trainPreset = TRAIN_PRESETS.find(function(p) { return p.id === id; });
  if (trainPreset) return trainPreset;
  var heroPreset = SUPERHERO_PRESETS.find(function(p) { return p.id === id; });
  if (heroPreset) return heroPreset;
  var shipPreset = SHIP_PRESETS.find(function(p) { return p.id === id; });
  if (shipPreset) return shipPreset;
  var fishPreset = FISH_PRESETS.find(function(p) { return p.id === id; });
  if (fishPreset) return fishPreset;
  var animPreset = ANIMAL_PRESETS.find(function(p) { return p.id === id; });
  if (animPreset) return animPreset;
  var birdPreset = BIRD_PRESETS.find(function(p) { return p.id === id; });
  if (birdPreset) return birdPreset;
  var flowerPreset = FLOWER_PRESETS.find(function(p) { return p.id === id; });
  if (flowerPreset) return flowerPreset;
  var catId = id.split('-')[0];
  var list = getSketchesByCategory(catId);
  return list.find(function(s) { return s.id === id; }) || null;
}

window.SketchTrace.sketchCatalog = {
  CATEGORIES: CATEGORIES,
  ANIME_PRESETS: ANIME_PRESETS,
  CAR_PRESETS: CAR_PRESETS,
  AIRCRAFT_PRESETS: AIRCRAFT_PRESETS,
  CARTOON_PRESETS: CARTOON_PRESETS,
  BIKE_PRESETS: BIKE_PRESETS,
  TRAIN_PRESETS: TRAIN_PRESETS,
  SUPERHERO_PRESETS: SUPERHERO_PRESETS,
  SHIP_PRESETS: SHIP_PRESETS,
  FISH_PRESETS: FISH_PRESETS,
  ANIMAL_PRESETS: ANIMAL_PRESETS,
  BIRD_PRESETS: BIRD_PRESETS,
  FLOWER_PRESETS: FLOWER_PRESETS,
  generateCategorySketches: generateCategorySketches,
  getSketchesByCategory: getSketchesByCategory,
  getAllSketches: getAllSketches,
  getFeaturedSketches: getFeaturedSketches,
  getTrendingSketches: getTrendingSketches,
  getNewSketches: getNewSketches,
  searchSketches: searchSketches,
  getSketchById: getSketchById
};