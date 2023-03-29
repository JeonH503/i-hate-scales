/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://i-hate-scales.online',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 1,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ]
    }
  }