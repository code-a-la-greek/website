import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'nord',
      wrap: true,
    },
  },
  site: 'https://panagiotis.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
    NetlifyCMS({
      config: {
        publish_mode: 'editorial_workflow',
        logo_url:'https://panagiotis.netlify.app/favicon.ico',
        backend: {
          name: 'git-gateway',
          branch: 'master'
        },
        collections: [
          /*content collections*/
          // Define a blog post collection
          {
            name: 'posts',
            label: 'My projects',
            folder: 'src/pages/post',
            format: 'frontmatter',
            create: true,
            delete: true,
            fields: [
              { name: 'image', widget: 'image', label: 'Post Image', media_folder:'/images/'},
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'title', widget: 'string', label: 'Post Title' },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
            ],
          },
        ],
      },
    }),
  ],
});
