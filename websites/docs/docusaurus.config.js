// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suspensive',
  tagline: 'Declarative components to use suspense for React',
  url: 'https://docs.suspensive.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'suspensive', // Usually your GitHub org/user name.
  projectName: 'Suspensive', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      ko: {
        htmlLang: 'ko-KR',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/suspensive/react/tree/main/docs/react',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Suspensive',
        logo: {
          alt: 'Suspensive Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/motivation.i18n',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/suspensive/react/tree/main/packages/react',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro/motivation.i18n',
              },
              {
                label: 'Installation',
                to: '/docs/intro/installation.i18n',
              },
              {
                label: 'API Reference',
                to: '/docs/react/README.i18n',
              },
              {
                label: 'Visualization',
                href: 'https://visualization.suspensive.org/react',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/suspensive/react/tree/main/packages/react',
              },
            ],
          },
          {
            title: 'Libraries',
            items: [
              {
                label: '@suspensive/react',
                href: 'https://github.com/suspensive/react/tree/main/packages/react',
              },
              {
                label: '@suspensive/react-query',
                href: 'https://github.com/suspensive/react/tree/main/packages/react-query',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jonghyeon Ko and the Suspensive authors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config