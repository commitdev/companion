const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Companion',
  tagline: 'Navigate your way to a successful remote startup software career.',
  url: 'https://companion.commit.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'commitdev',
  projectName: 'companion',
  themeConfig: {
    navbar: {
      title: 'Companion',
      items: [
        {
          docId: 'journeys/get-started',
          label: 'Journeys',
          position: 'left',
          type: 'doc',
        },
        {
          docId: 'glossary',
          label: 'Glossary',
          position: 'left',
          type: 'doc',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Feedback',
          items: [
            {
              label: 'Report a bug',
              href: 'https://github.com/commitdev/companion/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+',
            },
            {
              label: 'Suggest a feature',
              href: 'https://github.com/commitdev/companion/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+',
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Dicussions',
              href: 'https://github.com/commitdev/companion/discussions',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/commitdev/companion',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAnalytics: {
      trackingID: 'UA-181466843-2',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/commitdev/companion/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/commitdev/companion/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#ff6ab9',
          }
        ],
      },
    ],
    '@docusaurus/plugin-google-analytics',
  ],
};
