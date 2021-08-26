const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Companion',
  tagline: 'The manual to a successful remote startup software engineering career!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/companion/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'commitdev',
  projectName: 'companion',
  themeConfig: {
    navbar: {
      title: 'Companion',
      // logo: {
      //   alt: 'Companion Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // {
        //   docId: 'intro',
        //   label: 'Tutorial',
        //   position: 'left',
        //   type: 'doc',
        // },
        // {
        //   label: 'News',
        //   position: 'left',
        //   to: '/info',
        // },
        {
          label: 'Guides',
          position: 'left',
          to: '/guides',
        },
        {
          label: 'Contribute',
          position: 'left',
          to: '/contribute',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'EP Program',
              to: '/guides/ep-program',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://commit.dev/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/commitdev/companion',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Commit Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/commitdev/companion/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/commitdev/companion/edit/master/website/blog/',
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
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          }
        ],
      },
    ],
  ],
};
