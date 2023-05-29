export const selectCocktailData = (state) => state.cocktailData;
export const selectSelectedCocktail = (state) => state.selectedCocktail;
export const selectCocktailNeighbours = (state) => ({
  nextId: state.nextId,
  prevId: state.prevId,
});
export const selectSearchValue = (state) => state.value;
export const selectFavorites = (state) => state.favorites;
export const selectSearchResults = (state) => state.searchResults;
export const selectSelectedCategory = (state) => state.selectedCategory;
export const selectOpenPopup = (state) => state.popupOpen;
export const selectCategoryDrinks = (state) => state.cocktails;
export const isMobile = () => window.innerWidth < 768;
export const selectFavoriteCocktails = (state) => state.favoriteCocktails;
export const selectCachedCocktails = (state) => state.cachedCocktails;
