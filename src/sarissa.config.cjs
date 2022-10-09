export default {
  siteTitle: "P.Panagiotakopoulos",
  siteDescription: "Welcome to my portfolio",
  description: "Hello there 👋 my name is Panagiotis and I am a Front- end enthusiast 😊. Welcome to my portfolio",
  favicon: "/favicon.ico",
  siteImagePath: "/panagiotis.webp",
  footer: "©️ 2020-2022 BY PANAGIOTIS PANAGIOTAKOPOULOS | FRONT-END DEVELOPER",
  //Site global date format. [Luxon](https://moment.github.io/luxon/#/parsing?id=table-of-tokens)
  dateFormat: "MMMM dd, yyyy",
  socialMedia: {
    /* facebook: "ozcelikismail",
    twitter: "ismailozcelik",
    linkedin: "ismail-özçelik", */
    github: "PanuGr",
  },
  menu: {
    home: "Home",
    about: "About",
    categories: "Categories",
    search: "Search",
    archive: "Archive",
  },
  pageSize: 5,
  categories: [
    /* {
      name: "portfolio",
      color: "btn-primary",
      image: "/portfolio.webp",
      order: 1,
    },
    {
      name: "challenges",
      color: "btn-primary",
      image: "/challenges.webp",
      order: 2,
    }, */
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
