// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Review Nhân Vật 3D',
  tagline: 'Templates Docusaurus with Tailwind CSS and Shadcn/ui',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'namnguyenthanhwork', // Usually your GitHub org/user name.
  projectName: 'docusaurus-tailwind-shadcn-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: {
    experimental_faster: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Review 3D',
        logo: {
          alt: 'Docusaurus Tailwind Shadcn/ui Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            to: '/',
            position: 'right',
            label: 'Nhân vật'
          },
          {
            to: '/blog',
            label: 'Cốt truyện',
            position: 'right'
          },
          {
            to: '/blog',
            label: 'Tin tức',
            position: 'right'
          },
          // {
          //   'href': 'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template',
          //   'position': 'right',
          //   'className': 'header-github-link',
          //   'aria-label': 'GitHub repository'
          // }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Review nhân vật 3D',
            // items: [
            //   {
            //     label: 'Tutorial',
            //     to: '/docs/intro'
            //   }
            // ]
          },
          {
            title: 'Community',
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            //   },
            // ]
          },
          {
            title: 'Về chúng tôi',
            items: [
              {
                label: 'Giới thiệu',
                to: '#'
              },
              {
                label: 'Chính sách và bảo mật',
                to: '#'
              },
              {
                label: 'Điều khoản và dịch vụ',
                to: '#'
              }
            ]
          }
        ],
        copyright: `Copyright ©  ${new Date().getFullYear()} <span style= "font-weight: bold">Review nhân vật 3D</span>. Đồng hành bởi <span style= "font-weight: bold">Trần Tấn Đạt</span>`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ]
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: 'Blog',
        blogDescription: 'Blog description is here ...',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: 'blog',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config
