---
layout: ../../layouts/PostLayout.astro
title: "Explore_Suomi"
image: "/images/explore_suomi.webp"
date: "2021-09-14"
categories:
  - portfolio
  
---

Explore_Suomi is a blog website supplementary to the instagram account *<ins>[@explore_suomi](https://www.instagram.com/explore_suomi/)</ins>* which contains stories and photos of trips in Finland.
 
## Features:
- Astro static site builder
- PaperCss framework
- ImageKit-CDN
- Supabase database
- hosted in Netlify
 
I used this opportunity to learn how to work with the Astro builder.
The transition was relatively easy. I copied all the assets to the Astro folder. I had to change the paths of the files so Astro can successfully build the site.
I am also using Astro's fetch function to fetch information from database. I am using the Supabase database and the development has been very easy and nice experience. Supabase comes with good documentation and even snippets that reflect your own data, which simplifies very much the process of working with databases. Astro gets and posts information using asynchronous functions.
Astro manages the templating. The posts now are just markdown files, which are transformed into html during build time. Astro uses vite under the hood.

*<ins>[Visit the site](https://explore-suomi.netlify.app)</ins>*