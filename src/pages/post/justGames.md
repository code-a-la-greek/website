---
layout: ../../layouts/PostLayout.astro
title: "Just Games Ltd"
date: "2022-01-30"
image: "/images/justgames.webp"
categories:
  - portfolio
---

Just Games is an indie start-up game company based in Helsinki, Finland. They had their website on Wix.com but they needed a custom-built website. 

## Features:
- custom html/css/js
- mobile navigation
- Image Modals
- iframe optimizations
- flip-cards, displaying games and info 
- Github flow (repository, issues, other participants)
- Snowpack build
- Netlify .toml file setup

I was provided with a design, giving me a layout to start with, images, text and some instructions on fonts, font-sizes and what features they would like to have. I created a color palette of 5 colors based on their logo.

The project's repository was on Github with one more participant from the company with whom I was discussing and solving any issues or bugs during the development.

**During development:**

All the images were already optimized and in .webp format. I only resized them locally using Squoosh. I optimized the iframes, using lazy loading. I used snowpack for utilizing the @use method on my .scss stylesheet instead of the deprecated @import method and for code splitting as well. Last I created a .toml file so they won't have to set up their netlify build settings.   

<ins>*[Visit the site](https://www.justgames.fi)*</ins>