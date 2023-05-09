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
