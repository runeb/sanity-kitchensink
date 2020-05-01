export default {
  widgets: [
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
                  buildHookId: '5eac47d48ac1b0017305408d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchensink-studio',
                  apiId: '565f37ad-b3c8-4caf-831e-ba30ec95ac0f'
                },
                {
                  buildHookId: '5eac47d4d5d4240240d4dcde',
                  title: 'Blog Website',
                  name: 'sanity-kitchensink',
                  apiId: 'acc9d8cd-f322-48e6-a374-41354e91dca4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-kitchensink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchensink.netlify.app', category: 'apps'}
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
