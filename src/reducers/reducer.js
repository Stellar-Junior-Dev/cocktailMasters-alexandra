import { createStore } from "redux";

const initialState = {
  cocktailData: [
    {
      categoryTitle: "POPULAR DRINKS",
      id: 0,
      cocktails: [
        {
          image: require("../img/old-fashioned.jpeg"),
          name: "OLD FASHIONED",
          id: 0,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
            {
              language: "es",
              flag: ".jpg",
              text: "bllbbll",
            },
          ],
          favorite: true, // / false
          tags: ["iba", "classic", "alcoholic", "expensive"],
          ingredients: [
            {
              image:
                "https://www.descopera.ro/wp-content/uploads/2020/01/18693413/3-cai-curiozitati-11-ian-2020-shutterstock-1175510683-descopera.jpg",
              quantity: "4.5oz ...",
            },
            {
              image: "ingredient image.jpg",
              quantity: "4.0oz ...",
            },
            {
              image: "ingredient image.jpg",
              quantity: "4.0oz ...",
            },
            {
              image: "ingredient image.jpg",
              quantity: "4.0oz ...",
            },
            {
              image: "ingredient image.jpg",
              quantity: "4.0oz ...",
            },
          ],
        },
        {
          image: require("../img/old-fashioned.jpeg"),
          name: "OL FASHIONED",
          id: 1,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
          ],
          favorite: true, // / false
          tags: ["iba", "classic"],
          ingredients: [
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
          ],
        },
        {
          image: require("../img/old-fashioned.jpeg"),
          name: "OLD FASHIONED",
          id: 2,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
          ],
          favorite: true, // / false
          tags: ["iba", "classic"],
          ingredients: [
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
          ],
        },
      ],
    },
    {
      categoryTitle: "LATEST DRINKS",
      id: 1,
      cocktails: [
        {
          image: require("../img/cocktail.jpeg"),
          name: "MOJITO",
          id: 3,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
          ],
          favorite: false,
          tags: ["summer", "refreshing"],
          ingredients: [
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
          ],
        },
        {
          image: require("../img/cocktail.jpeg"),
          name: "MOJITO",
          id: 4,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
          ],
          favorite: false,
          tags: ["summer", "refreshing"],
          ingredients: [
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
              name: "ingredient name",
            },
          ],
        },
      ],
    },

    {
      categoryTitle: "RANDOM DRINKS",
      id: 3,
      cocktails: [
        {
          image: require("../img/cocktail.jpeg"),
          name: "MOJITO",
          id: 5,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
          ],
          favorite: false,
          tags: ["summer", "refreshing"],
          ingredients: [
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
          ],
        },
        {
          image: require("../img/cocktail.jpeg"),
          name: "MOJITO",
          id: 6,
          instructions: [
            {
              language: "en",
              flag: ".jpg",
              text: "cum faci cocktail-ul in limba engleza",
            },
          ],
          favorite: false,
          tags: ["summer", "refreshing"],
          ingredients: [
            {
              image: "ingredient image.jpg",
              quantity: "4.5oz ...",
            },
          ],
        },
      ],
    },
  ],
  selectedCocktail: undefined,
  prevId: undefined,
  nextId: undefined,
  searchResults: [],
  selectedCategory: undefined,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COCKTAIL":
      let prevId, nextId;
      let cocktailId = action.payload.id;
      let cocktail;
      state.cocktailData.forEach((category) => {
        let found = category.cocktails.find((it) => it.id == cocktailId);
        if (found && cocktail == undefined) {
          cocktail = found;
        }
      });
      let categoryList = state.cocktailData;
      categoryList.forEach((category) => {
        let prevResults = category.cocktails.filter(
          (el) => el.id == cocktail.id - 1
        );
        let nextResults = category.cocktails.filter(
          (el) => el.id == cocktail.id + 1
        );
        if (prevResults.length > 0) {
          prevId = prevResults[0].id;
        }
        if (nextResults.length > 0) {
          nextId = nextResults[0].id;
        }
      });
      return {
        ...state,
        selectedCocktail: cocktail,
        prevId: prevId,
        nextId: nextId,
      };
    case "SEARCH":
      const name = action.payload.searchParam;
      if (name === "") {
        return {
          ...state,
          searchResults: [],
        };
      }
      let n = name.toLowerCase();
      const r = [];

      state.cocktailData.forEach((category) => {
        let searchResults = category.cocktails.filter((el) =>
          el.name.toLowerCase().includes(n)
        );

        searchResults.forEach((result) => {
          //TODO: compare with ids instead of name
          const f = r.find((e) => e.name === result.name);

          if (!f) {
            r.push(result);
          }
        });
      });
      return {
        ...state,
        searchResults: r,
      };

    case "SET_CATEGORY":
      let categoryId = action.payload.id;
      let category = state.cocktailData.find((it) => it.id == categoryId);
      return {
        ...state,
        selectedCategory: category,
      };

    default:
      return state;
  }
}
