import cocktail from "../img/old-fashioned.jpeg";
import cocktail2 from "../img/cocktail.jpeg";

const cocktailData = [
  {
    categoryTitle: "POPULAR DRINKS",
    id: 1,
    cocktails: [
      {
        image: require("../img/old-fashioned.jpeg"),
        name: "OLD FASHIONED",
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
        ],
      },
    ],
  },
  {
    categoryTitle: "LATEST DRINKS",
    id: 2,
    cocktails: [
      {
        image: require("../img/cocktail.jpeg"),
        name: "MOJITO",
        id: 1,
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
        id: 2,
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
        id: 1,
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
        id: 2,
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
];

export default cocktailData;
