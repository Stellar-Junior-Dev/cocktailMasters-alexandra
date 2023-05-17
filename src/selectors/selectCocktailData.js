export const selectCocktailData = (state) => state.cocktailData;
export const selectSelectedCocktail = (state) => state.selectedCocktail;
export const selectCocktailNeighbours = (state) => ({
  nextId: state.nextId,
  prevId: state.prevId,
});
export const selectSearchResults = (state) => state.searchResults;
export const selectSelectedCategory = (state) => state.selectedCategory;
export const selectOpenPopup = (state) => state.popupOpen;
export const isMobile = () => window.innerWidth < 768;
