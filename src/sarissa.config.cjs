export default {
  siteTitle: "P.Panagiotakopoulos | Front-end Developer",
  siteDescription: "I'm Panagiotis and welcome to my portfolio. I like front-end development and building projects.",
  favicon: "/favicon.ico",
  siteImagePath: "/images/sarissa.png",
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
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
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
