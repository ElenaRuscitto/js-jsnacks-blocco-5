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

/////////////////////////////////////////  SNACK 1   /////////////////////////////////////////

let totalePeso = 0;

zucchine.forEach(zucchine => {
  totalePeso += zucchine.peso
})

console.log(`il peso di tutte le zucchine è: ${totalePeso} gr`);


/////////////////////////////////////////  SNACK 2   /////////////////////////////////////////

const shortZucchine = [];
const longZucchine = [];

zucchine.filter (zucchina => {
  if (zucchina.lunghezza > 15 ) {
    return longZucchine.push (zucchina);
  } else {
    return shortZucchine.push (zucchina);
  }
});

console.log(shortZucchine);
console.log(longZucchine);

let pesoShortZucchine = 0;
shortZucchine.forEach(zucchina => {
  pesoShortZucchine += zucchina.peso
})

console.log(`il peso di tutte le zucchine che sono puù lunghe di 15 è: ${pesoShortZucchine} gr`);



let pesoLongZucchine = 0;
longZucchine.forEach(zucchina => {
  pesoLongZucchine += zucchina.peso
})
console.log(shortZucchine);
console.log(`il peso di tutte le zucchine che sono puù lunghe di 15 è: ${pesoLongZucchine} gr`);


/////////////////////////////////////////  SNACK 3   /////////////////////////////////////////

const parola = 'cielo';

function daGirare(parola) {
  return parola.split('').reverse().join(' ');

}

console.log(daGirare(parola));


/////////////////////////////////////////  SNACK 4   /////////////////////////////////////////

const oggetti = ['accendino', 'binocolo', 'fuoco'];
const natura = ['albero', 'cielo', 'legna'];

let newArray = [];

// console.log(...oggetti[0], ...natura[0], ...oggetti[1], ...natura[1], ...oggetti[2], ...natura[2]);
let lunghezza = oggetti.length;

for (let i = 0; i < lunghezza; i++) {
  newArray.push(oggetti[i]);
  newArray.push(natura[i]);
}
console.log(newArray);


/////////////////////////////////////////  SNACK 5   /////////////////////////////////////////


const psicologi = ['Freud', 'Jung', 'Skinner', 'Pavlov', 'Piaget', 'Maslow', 'Wundt', 'Bandura', 'Maslow', 'Lewin'];

const prev = 2;
const next = 8;

function array (psicologi, prev, next) {
  const nuovoArray = [];

  for (let i = prev; i <= next; i++) {
    nuovoArray.push(psicologi[i])
  }
  return nuovoArray;
}

const result = array(psicologi, prev, next);

console.log(result);