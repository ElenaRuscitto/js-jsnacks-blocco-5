const zucchine = [
  {
    varieta: 'romanesca',
    peso: 10,
    lunghezza: 15,
  },

  {
    varieta: 'nera',
    peso: 9,
    lunghezza: 20,
  },

  {
    varieta: 'ortolana',
    peso: 8,
    lunghezza: 10,
  }, 

  {
    varieta: 'siciliana',
    peso: 12,
    lunghezza: 27,
  },

  {
    varieta: 'striata',
    peso: 11,
    lunghezza: 18,
  },

  {
    varieta: 'bianca',
    peso: 15,
    lunghezza: 7,
  },

  {
    varieta: 'tonda',
    peso: 13,
    lunghezza: 5,
  },

  {
    varieta: 'trombetta',
    peso: 20,
    lunghezza: 28,
  },

  {
    varieta: 'gialla',
    peso: 12,
    lunghezza: 18,
  },

  {
    varieta: 'crookneck',
    peso: 9,
    lunghezza: 20,
  }
]

///////////////////////////////////////////    SNACK 1 ///////////////////////////////////////////

let totalePeso = 0;

zucchine.forEach(zucchine => {
  totalePeso += zucchine.peso
})

console.log(`il peso di tutte le zucchine è: ${totalePeso} gr`);