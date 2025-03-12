// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Classroom Explorers',
  tagline: 'Revolutionizing the way students learn',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://system-engineering-group-9.github.io', // Turn this into https://students.cs.ucl.ac.uk, when hosting on UCL servers
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // Turn this into /2024/group9/, when hosting on UCL servers

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'System-Engineering-Group-9', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // Header configuration
      navbar: {
        title: 'Classroom Explorers',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/requirements', label:'Requirements', position: 'left'},
          {to: '/docs/HCI', label:'HCI', position: 'left'},
          {to: '/docs/research', label:'Research', position: 'left'},
          {to: '/docs/algorithms', label:'Algorithms', position: 'left'},
          {to: '/docs/uiDesign', label:'UI Design', position: 'left'},
          {to: '/docs/systemDesign', label:'System Design', position: 'left'},
          {to: '/docs/implementation', label:'Implementatioin', position: 'left'},
          {to: '/docs/testing', label:'Testing', position: 'left'},
          {to: '/docs/evaluation', label:'Evaluation', position: 'left'},

          {to: '/docs/gameRules', label:'Appendices', position: 'right'},
          {to: '/blog', label: 'Dev. Blog', position: 'right'},
          {
            href: 'https://github.com/System-Engineering-Group-9/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {to: '/docs/requirements', label: 'Requirements'},
              {to: '/docs/HCI', label: 'HCI'},
              {to: '/docs/research', label: 'Research'},
              {to: '/docs/algorithms', label: 'Algorithms'},
              {to: '/docs/uiDesign', label: 'UI Design'},
              {to: '/docs/systemDesign', label: 'System Design'},
              {to: '/docs/implementation', label: 'Implementation'},
              {to: '/docs/testing', label: 'Testing'},
              {to: '/docs/evaluation', label: 'Evaluation'},
              {to: '/docs/gameRules', label: 'Appendices'},
              {to: '/blog', label: 'Dev. Blog'},
              {
                href: 'https://github.com/System-Engineering-Group-9/',
                label: 'GitHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Classroom Explorers`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
