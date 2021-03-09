export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60479573ea4c7403d92de1b9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5emdt1yp',
                  apiId: 'be1b089d-b428-42e2-8fd6-eec3379f1d63'
                },
                {
                  buildHookId: '60479574acdaace5db27edd1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s3zbugqx',
                  apiId: 'f0c08e20-3366-4cee-b0d8-960b0b49af84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/syahmifauzi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s3zbugqx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
