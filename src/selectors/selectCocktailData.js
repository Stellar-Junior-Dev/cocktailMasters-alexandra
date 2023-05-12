export const selectCocktailData = (state) => state.cocktailData;
export const selectSelectedCocktail = (state) => state.selectedCocktail;
export const selectCocktailNeighbours = (state) => ({
  nextId: state.nextId,
  prevId: state.prevId,
});
export const selectSearchResults = (state) => state.searchResults;
