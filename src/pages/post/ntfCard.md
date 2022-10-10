---
layout: ../../layouts/PostLayout.astro
title: "NTF-card"
image: "https://raw.githubusercontent.com/PanuGr/frontendmentor-challenges/main/newbie/ntf-card/screenshot.jpg"
date: "2022-02-12"
categories:
  - challenges
  - newbie
---
This is a solution to the *<ins>[NFT preview card component](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U)</ins>* challenge on Frontend Mentor. 

## Build with
- Semantic HTML5 markup
- Mobile-first workflow
- Tailwind Css - Tailwind CLI

## Process
I am learning how to use Tailwind Css therefore this solution is built with Tailwind Css.
This time I am using the tailwind CLI method to install tailwind. The command generates a tailwind.config.js file, in which I set the given style instructions(color,fonts) as tailwind's default. Then it was easy to use them as utility classes in my html.

````js
 theme: {
    colors:{
      softBlue:"#8bacda",
      cyan:"#00fff7",
      blueMain:"#0d192b",
      blueCard:"#14253d",
      blueLine:"#2f415b",
      white:"#ffffff",
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif']}
````

Working with tailwind this time was relatively easier than the first time. The only time I had to write custom css was on 1 hover effect on the first img element. I needed an overlay effect which I couldn't achieve with utility-classes, or at least that's what I think. The overlay is achieved by using the ::after pseudo-class:

````css
 .overlay:hover::after{
        position: absolute;
        content: url("./assets/icon-view.svg");
        inset: 0;
        width: 288px;
        height: 288px;
        display: grid;
        place-content: center;
        background-color: cyan;
        opacity: .6;
      }
````

*<ins>[see the demo](https://panugr.github.io/frontendmentor-challenges/newbie/ntf-card/)</ins>* <br>
*<ins>[see the code](https://github.com/PanuGr/frontendmentor-challenges/tree/main/newbie/ntf-card)</ins>*