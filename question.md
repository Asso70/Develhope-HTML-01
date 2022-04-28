# Angular - Exercise 9.1

Da un progetto vuoto:


- Avere un servizio con una proprietà privata `counter` inizializzata a 0 che non potrà mai essere negativa
- Il servizio dovrà:
  - Esporre un metodo per recuperare il valore di `counter`
  - Esporre un metodo che aumenti il valore di `counter` di un numero deciso dall'utente (default 1) e che ne stampi il valore in console 
  - Esporre un metodo che diminuisca il valore di `counter` di un numero deciso dall'utente (default 1) e che ne stampi il valore in console 
  - Qualora si tentasse a diminuire il valore di `counter` sotto lo 0, bisognerà mostrare in console un messaggio di errore 


# Angular - Exercise 9.2
- Creare un componente `show-counter` e un componente `edit-counter`
- Il componente `show-counter` dovrà mostrare il valore della proprietà `counter`
- Il componente `edit-counter` dovrà mostrare:
  - Un campo di input (che determinerà il valore che si vorrà sommare o sottrarre a `counter`)
  - Due bottoni `Aggiungi { valore dinamico }` e ` Sottrai { valore dinamico }` 
- Qualora si tentasse a diminuire il valore di `counter` sotto lo 0, bisognerà mostrare nel componente `show-counter` un messaggio di errore 

Per svolgere questo esercizio create 2 branch, esercizio9.1 e esercizio9.2 e create le pr per mergiare in develop.