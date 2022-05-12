// Result list
let elOututList = $(".js-list");

// Output pokemons's items outup withe foreach
pokemons.forEach(function(pokemon) {

  // Create elements
  let newLi = elCreateElement("li", "", "");
  let newDi = elCreateElement("div", "", "");
  let newImg = elCreateElement("img", "", "");
  let pokemonName = elCreateElement("p", "", "");
  let pokemonHeight = elCreateElement("p", "", "");
  let pokemonWeight = elCreateElement("p", "", "");
  let newId = document.createElement("p");
  
  newLi.setAttribute("class", "col-lg-3 col-md-3, col-sm-6, col-xs-12 border border-1 m-2 rounded-3");

  // Update data
  newImg.src = pokemon.img;
  pokemonName.textContent = `Pokemon name: ${pokemon.name}`;
  pokemonHeight.textContent = `Pokemon height: ${pokemon.height}`;
  pokemonWeight.textContent =  `Pokemon height: ${pokemon.weight}`;
  newId.textContent = `Pokemon Id: ${pokemon.id}`;

  // Append data 
  newDi.append(newImg, newId, pokemonName, pokemonHeight, pokemonWeight,);
  newLi.append(newDi)
  elOututList.append(newLi)

});
