---
layout: ../../layouts/PostLayout.astro
title: "Huddle landing page "
image: "https://raw.githubusercontent.com/PanuGr/frontendmentor-challenges/main/junior/huddle-landing-page/screenshot.jpg"
date: "2022-02-17"
categories:
  - challenges
  - junior
---
This is a solution to the <ins>*[Huddle landing page with alternating feature blocks challenge](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100)*</ins> on Frontend Mentor challenge.

## Built with
- Semantic HTML5 markup
- Mobile-first workflow
- Tailwind Css - Tailwind CLI

## Process
In this project, I keep working with the Tailwind CLI. I built the whole layout with just tailwind classes. In order to use my brand colors and hero images, I customized the tailwind.config file. I completely override the font-families since I am only using custom fonts. I add colors and images on the extend object because I still wanted access to tailwinds colors.

````js
module.exports ={
theme: {
    fontFamily: {
      body: ['Open Sans'],
      headings: ['Poppins'],
    },

    extend: {
      colors: {
        'pink': '#ff52bf',
        'paleCyan': '#ebfbff',
        'darkCyan': '#00252e',
        'grayBlue': '#6c7781',

      },
      backgroundImage: {
        'hero-desktop': "url('/images/bg-hero-desktop.svg')",
        'hero-mobile': "url('/images/bg-hero-mobile.svg')"
      }
}
````
<br>
This project is not just a component but a whole page, so my .index file quicly filled up with Tailwinds classes. Even thoug it is quite esasy to work with tailwind, the html code looks weird and crowded with class names.

````html
<section
  class="shadow-[0_0_18px_1px_rgba(0,0,0,0.3)] rounded-xl py-10 text-center space-y-4 max-w-7xl mx-auto xl:grid grid-cols-2 xl:place-items-center xl:text-left"></section>
````
<br>

Next time I would like to use the @apply directive to add classes to the elements.
The outputed css file was 20KB. This time I took advantage of tailwind’s build-in minification and purging features. It was super easy, I just added a new script with the `--minify` flag like this:</br>
``"build": "npx tailwindcss -i style.css -o style.css --minify"`` <br>
My final css file is only 11KB.

*<ins>[see the demo](https://panugr.github.io/frontendmentor-challenges/junior/huddle-landing-page)</ins>* <br>
*<ins>[see the code](https://github.com/PanuGr/frontendmentor-challenges/tree/main/junior/huddle-landing-page)</ins>*

