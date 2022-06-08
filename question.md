# Esercitazione Finale (classe di Aprile 2021)
Creare un modulo “PokemonModule”.

Attraverso l’api https://pokeapi.co/ recuperare un pokémon random (da 1 a 898) mostrare la schermata di cattura e due CTA Cattura e Rifiuta. 
Qualora si catturasse il pokémon, questo finirebbe nella squadra (limite 6 pokémon), altrimenti nella lista dei pokémon rifiutati. Se la squadra è 
completa allora la CTA Cattura sarà disabilitata.
Una volta selezionata una delle due CTA, si ri-effettua la chiamata per recuperare il pokémon random.
Se invece si clicca su un pokémon qualunque della squadra o di quelli rifiutati, andare nella view dei dettagli di quel pokémon. 
La UI non è obbligatoria.
Design: https://www.figma.com/file/2E6ZxZSOHrU6Zay5AQwvuZ/Angular-Test-Finale?node-id=0%3A1

Bonus:
- Implementare la possibilità di eliminare un pokémon dalla lista dei catturati
- Caricare il modulo “PokemonModule” in Lazy Loading
- Implementare il caching dei pokémon catturati o rifiutati attraverso l’utilizzo di localStorage
Tempo a disposizione: 5 ore