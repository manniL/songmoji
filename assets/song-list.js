const DIFFICULTIES = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3
}

const CATEGORIES = {
  EVERGREEN: 1,
  GERMAN: 2,
  ENGLISH: 3,
  RAP: 4
}

const findEntryKeyByValue = object => value => Object.entries(object).find(([_, v]) => v === value)[0]

export const categoryNumberToWord = findEntryKeyByValue(CATEGORIES)
export const difficultyNumberToWord = findEntryKeyByValue(DIFFICULTIES)

export const songList = [
  {
    name: '99 Luftballons',
    emojis: '9️⃣9️⃣🎈🎈',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Cherry Cherry Lady',
    emojis: '🍒🍒👩🏼',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Around the world',
    emojis: '🔄🌍',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Englishman in New York',
    emojis: '💂‍♂️⬇️🗽',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH]
  },
  {
    name: 'Ice Ice Baby',
    emojis: '🍦🍦👶',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Eye of the Tiger',
    emojis: '👁️🐅',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Männer sind Schweine',
    emojis: '👨👴👱‍♂️➡️🐖🐖🐖',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Don\'t cry for me Argentina',
    emojis: '👎️😭🇦🇷',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH]
  },
  {
    name: 'Whot let the dogs out',
    emojis: '🏚️➡️🐶🐕️🐩⁉️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Highway to Hell',
    emojis: '🛣️😈',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'We will rock you',
    emojis: '👊👊👏',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Umbrella',
    emojis: '☂️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Lemon Tree',
    emojis: '🍋🌳',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'It\'s raining men',
    emojis: '🌧️👨👴👱‍♂️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Walking on Sunshine',
    emojis: '🚶🔛☀️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'I need a dollar',
    emojis: '😏💭💵',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Beds are burning',
    emojis: '🛏️🛏️🔥',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Firework',
    emojis: '🎆🎇🌃',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Atemlos (durch die Nacht)',
    emojis: '🙅🌬️🌃',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Pokerface',
    emojis: '♣️🎭️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  { name: 'Sleeping in my Car', emojis: '😴🚗', difficulty: DIFFICULTIES.MEDIUM, categories: [CATEGORIES.ENGLISH] },
  {
    name: 'I kissed a girl',
    emojis: '👩‍❤️‍💋‍👩',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Schwarz zu Blau',
    emojis: '⚫️➡️🔵',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Video killed the Radio Star',
    emojis: '🎞️☠️📻️⭐️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Perfekte Welle',
    emojis: '👍️👌🌊',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Baby One More Time',
    emojis: '👶1️⃣🕛️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'I see fire',
    emojis: '👁️🔥',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'The A Team',
    emojis: '🅰️👬',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'The Circle of Life',
    emojis: '🔄🤱',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Listen to your heart',
    emojis: '👂️❤️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Fireflies',
    emojis: '🔥🦗🔥🦗',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Chasing Cars',
    emojis: '🚗🚗🏃‍♀️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'I\'m Gonna Be (500 Miles)',
    emojis: '🏃‍♀️5️⃣0️⃣0️⃣',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Africa',
    emojis: '🌍️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Don\'t stop believing',
    emojis: '🚫🛑🙏',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Snow (hey oh)',
    emojis: '🌨️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Lila Wolken',
    emojis: '💜☁️☁️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Call Me Maybe',
    emojis: '☎️👧❓️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: '21 Guns',
    emojis: '🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫🔫',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: '7 Nation Army',
    emojis: '🇬🇧🇺🇸🇩🇪🇫🇷🇷🇺🇨🇳🇮🇳💂‍♀️💂‍♀️💂‍♀️🎖️🔫',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Rock me Amadeus',
    emojis: '🎸👱‍♂️🇦🇹🎻',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Barbie girl',
    emojis: '👱‍♀️👗🎀',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Boom boom boom boom!',
    emojis: '💥💥💥💥',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Boom Boom Boom',
    emojis: '💥💥💥',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Song 2',
    emojis: '🎵2️⃣',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Sandstorm',
    emojis: '🏜️🌬️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Blue (Da Ba Dee)',
    emojis: '💙📘🔷🔵',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Push the Button',
    emojis: '🔘👈️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Smells like teen spirit',
    emojis: '👃👦👻',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Candy Shop',
    emojis: '🍭🏪',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Last Christmas',
    emojis: '⏪️🎅 (🙄🙄🙄)',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Behind Blue Eyes',
    emojis: '👈️🔵👀',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Mambo Number 5',
    emojis: '💃🕺5️⃣',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Down Under',
    emojis: '🔽🌏️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Big in Japan',
    emojis: '💪🇯🇵',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Airplanes',
    emojis: '✈️✈️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Don\'t speak',
    emojis: '🤐',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Wake me up when september ends',
    emojis: '🛏️👆️🗓9️⃣🔚',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Alles hat ein Ende nur die Wurst hat 2',
    emojis: '🔚🌭2️⃣',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Barfuß am Klavier',
    emojis: '👣🎹',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Palmen aus Plastik',
    emojis: '🌴🌴♻️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Holz',
    emojis: '🌲🪓 (🇩🇪)',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Ein Affe und ein Pferd',
    emojis: '🐵🐴',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Urlaub für\'s Gehirn',
    emojis: '✈️🛄🏝️👉️🧠',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Trostpreis',
    emojis: '🥈😢',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Fledermausland',
    emojis: '🦇🦇🏳️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Hurra die Welt geht unter',
    emojis: '🥳🌍️💥💣️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Stoff und Schnaps',
    emojis: '💊➕🍸️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Bengalischer Tiger',
    emojis: '🇮🇳🐅',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Schüsse in die Luft',
    emojis: '🔫🔫🔫💨',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Erfolg ist kein Glück',
    emojis: '💪🚫🍀',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Drei Tage Wach',
    emojis: '📅📅📅🚫😴',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Bilder im Kopf',
    emojis: '🖼️🖼️➡️👤',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Willst du (mit mir Drogen nehmen)',
    emojis: '👫🍸️💉⚗️🚬❓️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: '36 Grad (und es wird noch heißer)',
    emojis: '3️⃣6️⃣🌡️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Griechischer Wein',
    emojis: '🇬🇷🍷',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Schwule Mädchen',
    emojis: '👨‍❤️‍💋‍👨👩👩',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Right Round',
    emojis: '➡️🔄',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Radioactive',
    emojis: '☢️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'What is love',
    emojis: '🤔💕💘💖💗❓️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Daddy Cool',
    emojis: '👨‍👩‍👦♂️😎',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Can\'t touch this',
    emojis: '👉️🚫',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Red Flag',
    emojis: '🚩',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Rock & Roll Queen',
    emojis: '🤘🎸👑♀️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Summer of 69',
    emojis: '⛱️🌞6️⃣9️⃣',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Schrei Nach Liebe',
    emojis: '😱💕',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Insekten im Eis',
    emojis: '❄️❄️🦋🐞🕷️🐝❄️❄️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN]
  },
  {
    name: 'Sex on Fire',
    emojis: '💑🔞🔥',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Mad World',
    emojis: '😡😢🌎️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Don\'t stop the Music',
    emojis: '🚫🛑🎵',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  { name: 'Party in the USA', emojis: '🎉🇺🇸', difficulty: DIFFICULTIES.MEDIUM, categories: [CATEGORIES.ENGLISH] },
  {
    name: 'Party Rock Anthem',
    emojis: '🎉🤘🎼',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Hi Kids',
    emojis: '🐼👋 🧒🧒🧒',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Bad Moon Rising',
    emojis: '👿🌕️🔝',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Sweet Dreams',
    emojis: '🍬🍭😴',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Born in the USA',
    emojis: '👶➡️🇺🇸',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Ring of Fire',
    emojis: '💍🔥',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  { name: 'Genie in a Bottle', emojis: '👻➡️🍾', difficulty: DIFFICULTIES.MEDIUM, categories: [CATEGORIES.ENGLISH] },
  {
    name: 'YMCA',
    emojis: '🤠👷👮‍♂️⛵️👨🏍️💁‍♂️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Dancing Queen',
    emojis: '💃👑',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Hit the road Jack',
    emojis: '🎯🛣️🏃🏿‍♂️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'House of the rising sun',
    emojis: '🏡🔝☀️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Bella Ciao',
    emojis: '👩🏻👋🏻🇮🇹',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Purple Rain',
    emojis: '💜🌧️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Like Ice in the Sunshine',
    emojis: '❤️🍦☀️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'The Spirit of the Hawk',
    emojis: '👻🐦️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Smoke on the Water',
    emojis: '🚬➡️🌊',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Sound of Silence',
    emojis: '👂🏻🔇',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Major Tom',
    emojis: '👩🏻‍🚀🚀🌍️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Zombie',
    emojis: '🧟',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Im Ascheregen',
    emojis: '🌋🚬🌧️',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN, CATEGORIES.RAP]
  },
  {
    name: 'Scheiß auf deine Party',
    emojis: '💩➡️🎉',
    difficulty: DIFFICULTIES.HARD,
    categories: [CATEGORIES.GERMAN, CATEGORIES.RAP]
  },
  {
    name: 'Yesterday',
    emojis: '🗓️⏪️',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Dance Monkey',
    emojis: '💃🐒',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH]
  },
  {
    name: 'Stille Nacht',
    emojis: '🔕🌃',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Hey Jude',
    emojis: '👋🕍',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Keine Nacht für niemand',
    emojis: '🚫🌃',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: '500K',
    emojis: '5️⃣0️⃣0️⃣💶',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Yellow Submarine',
    emojis: '💛🚢⬇️',
    difficulty: DIFFICULTIES.EASY,
    categories: [CATEGORIES.ENGLISH, CATEGORIES.EVERGREEN]
  },
  {
    name: 'Hurra die Schule brennt',
    emojis: '🥳🏫🔥',
    difficulty: DIFFICULTIES.MEDIUM,
    categories: [CATEGORIES.GERMAN, CATEGORIES.EVERGREEN]
  }
]
