# Angular - Exercise 11.1

-Creare un array di 10 oggetti di tipo `Beer`
- Creare un servizio, trasformare l'array  in un observable
- Creare un metodo che ritorni l'observable di dati
- Creare un metodo che prenda come parametro un id e che ritorni l'oggetto corrispondente sotto forma di observable

N.B. Con gli observable usare solo operatori RXJS

interface Beer {   
    id: number, 
    type: "small | medium",
    name: string, 
    price: number 
}

# Angular - Exercise 11.2

- Creare un componente shop, che mostrerà 2 select, uno contenente i nomi delle birre, l'altro i tipi, e un bottone search
- Entrambe le select sono required e il bottone sarà disabled finchè entrambi i campi non saranno compilati
- Al click del bottone dovranno essere visualizzate le card contenenti gli oggetti corrispondenti alla ricerca