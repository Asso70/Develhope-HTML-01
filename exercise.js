function createStore() {
  const assortimentoo = []; /* Riecco la doppia lettera finale. Ebbene, laddove non si vorrà nominare un array con l'entità del singolo elemento declinata al plurale
                            (es. in questo caso sarebbe stato "articoli") ma si preferirà utilizzare un termine esprimente collettività, tale termine, che verrà declinato al
                            singolare, avrà appunto la doppia finale per convenzionalmente (©opyright: Stefano Assogna) indicare che è riferito a un array */
  return function(articolo) {
    assortimentoo.push(articolo);
    assortimentoo.forEach(ele => {
      console.log(`Item #${ele.id}: ${ele.name}`);
    });
  }    
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);