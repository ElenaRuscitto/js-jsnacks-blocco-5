JSnack
===
nome repo: js-jsnacks-blocco-5


Sviluppare i seguenti JSnack:


** JSnack 1 ** 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

**  JSnack 2 ** 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

**  JSnack 3 ** 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

**  JSnack 4 ** 
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

**  JSnack 5 ** 
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”


## SVOLGIMENTO
** JSnack 1 ** 
1. creo array con 10 zucchine, indicando per ognuna varietà, peso e lunghezza.
2. con il ciclo forEach faccio la somma di quanto pesano tutte le zucchine
3. stampo il risultato

** JSnack 2 ** 
1. creiamo 2 array vuoti
2. in un array vuoto devo pusharci le zucchine che sono lunghe < 15 cm
3. nell'altro array vuoto devo pusharci le zucchine che sono lunghe > 15 cm
4. stampo separatamente la somma del peso dei due array 

** JSnack 3 ** 
1. con SPLIT trasformo un array in una stringa
2. REVERSE per girare la stringa
3. JOIN per attaccare la parola

** JSnack 4 ** 
1. creo due array con lo stesso numero di elementi
2. creo un array vuoto dove pusherò al suo interno gli elementi degli altri array
3. ciclo for andando a prendere la lunghezza dei due array per puhare dentro gli elementi

** JSnack 5 ** 