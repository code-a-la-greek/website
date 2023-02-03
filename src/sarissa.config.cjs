export default {
  siteTitle: "Code a la greek",
  siteDescription: "Welcome to the codealagreek website. Here you'll find projects which I've been making along with real-life websites",
  description: "Hello👋 My name is Panagiotis, a Front- end enthusiast and I've created this website for the youtube channel: Code a la greek",
  favicon: "/favicon.webp",
  siteImagePath: "/logo.webp",
  footer: "©️ 2020-2023 BY PANAGIOTIS PANAGIOTAKOPOULOS | FRONT-END DEVELOPER",
  //Site global date format. [Luxon](https://moment.github.io/luxon/#/parsing?id=table-of-tokens)
  dateFormat: "MMMM dd, yyyy",
  socialMedia: {
    /* facebook: "ozcelikismail",
    twitter: "ismailozcelik",*/
    youtube: "@codealagreek", 
    github: "code-a-la-greek",
    frontendmentor:"panugr"
  },
  menu: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
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
