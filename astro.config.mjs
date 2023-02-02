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
        logo_url: 'https://panagiotis.netlify.app/favicon.ico',
        media_folder:'src/assets/images',
        public_folder:'/assets/images',
        backend: {
          name: 'git-gateway',
          branch: 'master'
        },
        collections: [
          {
            name: 'posts',
            label: 'My projects',
            folder: 'src/pages/post',
            format: 'frontmatter',
            create: true,
            delete: true,
            fields: [
              { name: 'image', widget: 'image', label: 'Post Image' },
              { name: 'categories', widget: 'select', label: 'Post category', multiple:true, min: 1, options: ['challenges', 'newbie', 'junior', 'intermediate', 'advance', 'guru', 'portfolio'] },
              {
                name: 'date',
                widget: 'datetime',
                format: 'YYYY-MM-DD',
                date_format: 'DD MMM YYYY',
                label: 'Publish Date',
                time_format:false
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
