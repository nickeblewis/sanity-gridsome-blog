export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d83696c84c8d61bb04454bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-cdr2mmc6',
                  apiId: '498f1371-d69f-4c9a-832a-4b5c0853c72e'
                },
                {
                  buildHookId: '5d83696c090a9c023b1a1636',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-jpqjttzy',
                  apiId: '98739a1e-8de7-4785-8c46-ed53d2e11bea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-jpqjttzy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
