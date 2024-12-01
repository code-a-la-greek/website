---
layout: ../../layouts/PostLayout.astro
title: "Vakka-Viestintä"
image: "/images/vakkaviestinta.webp"
date: "2021-12-22"
categories:
  - portfolio
 
---
Vakka-Viestintä is a small advertising agency in Finland, specializing in digital advertisement and marketing. They already had a website that needed fixing.
 
## Issues:
- The site was made with an old version of Bootstrap 
- It didn't pass the lighthouse tests 
- It scored poorly on security tests
- It didn't comply with the GDPR policy

## Features:
- Astro website-builder
- Bootstrap
- ImageKit-CDN
- Netlify .toml-file setup
- custom server headers-increased security
 
I rebuilt their website. Since there were many pages sharing the same content, I used the Astro. <br>
I still used their brand colors and most of the text they had. For design, I used the new version of Bootstrap.
I optimized all of their images, serving .webp images.<br>
No cookies are used, but due to a contact form, a privacy policy is required. I created one with iubenda.com, an online policy-maker service for privacy-policies, terms of use, cookies etc. 
I also added the privacy and GDPR policy that Netlify provides. <br>
I increased the security of the site, setting some headers, such as referrer-policy, content-security-policy, x-frame options etc. That was a challenge as well but there's good documentation at mozilla.org. <br>
The site is hosted in Netlify but is currently archived.
