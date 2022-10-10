---
layout: ../../layouts/PostLayout.astro
title: "Vakka-Viestintä"
image: "/images/vakkaviestinta.webp"
date: '2021-12-22'
categories:
  - portfolio
 
---
Vakka-Viestintä is an advertising agency located in Uusikaupunki (FI) and specializing in digital advertisement and marketing.
 
I identified several areas which I could improve:
- The site was made with Bootstrap 3 
- It didn't pass the lighthouse tests 
- It scored poorly on security tests
- It didn't comply with the GDPR policy

## Features:
- html/css/js
- Bootstrap 5
- ImageKit-CDN
- Injected privacy policies with javascript
- Netlify .toml-file setup
- custom server headers-increased security
 
I rebuilt their website. I still used their brand colors and most of the text they had. For design, I used the new version of Bootstrap 5.
I optimized all of their videos and images, serving .webp images.
No cookies are used, but due to a contact form, a privacy policy is required. I created one with iubenda.com, an online policy-maker service for privacy-policies, terms of use, cookies etc. 
I also added the privacy and GDPR policy that Netlify provides.
I increased the security of the site, setting some headers, such as referrer-policy, content-security-policy, x-frame options etc. That was a challenge as well but there's good documentation at mozilla.org.
The site is hosted in Netlify.

*<ins>[Visit the site](https://vakkaviestinta.com)</ins>*