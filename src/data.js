
export const CVData = {
  personalData: {
    name: 'Yaroslav Bezruchenko',
    title: 'Middle Java Developer',
    image: 'https://i.ibb.co/GWWyXfy/photo-2023-01-10-12-45-29.jpg',
    contacts: [
      {type: 'email', value: 'bezruchenko.y.v@gmail.com'},
      {type: 'phone', value: '+48 889 038 259'},
      {type: 'location', value: 'Łódź'},
      {type: 'website', value: 'example.com'},
      {type: 'linkedin', value: 'linkedin.com/in/yaroslav-bezruchenko'},
      {type: 'github', value: 'github.com/zeppier'}
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: 'Novice team player software ' +
        'engineer with a can-do attitude ' +
        'and quick-learning skills. In two ' +
        'years grew from zero to owning ' +
        'the architecture of the start-up ' +
        'and leading the team in parallel ' +
        'with feature development.',
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Computer Science (Bachelor)',
          authority: 'Odessa National Polytechnic University',
          authorityWebSite: 'https://op.edu.ua/en',
          rightSide: '2016 - 2020'
        },
        {
          title: 'Computer Science (Masters)',
          authority: 'Odessa National Polytechnic University',
          authorityWebSite: 'https://op.edu.ua/en',
          rightSide: '2020 - 2022'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: 'Optional',
      icon: 'archive',
      items: [
        {
          title: 'Platform Architect',
          company: 'Intempt',
          description: 'I\'m working as a lead developer yeeeey!',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2022.08 - present',
          descriptionTags: ['Javascript', 'React']
        },
        {
          title: 'Software Developer',
          company: 'Intempt',
          description: 'I\'m working as a lead developer yeeeey!',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2020.08 - 2022.08',
          descriptionTags: ['Javascript', 'React']
        }
      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      description: 'Optional',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'Company Name',
          description: 'Optional',
          items: [
            {title: 'Project', projectUrl: 'optional', description: 'Optional'},
            {title: 'Project', projectUrl: 'optional', description: 'Optional'},
            {title: 'Project', projectUrl: 'optional', description: 'Optional'}
          ]
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Conferences & Certificates',
      description: '',
      icon: 'comments',
      items: [
        {
          title: 'Some Conferences / 2019',
          authority: 'SomeConf',
          authorityWebSite: 'https://www.someconf.somesome'
        },
        {
          title: 'Some Conferences / 2019',
          authority: 'SomeConf',
          authorityMeta: 'Speaker',
          authorityWebSite: 'https://www.someconf.somesome',
          rightSide: 'test'
        },
        {
          title: 'Some Conferences / 2012',
          authorityMeta: 'Speaker'
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'English',
          authorityMeta: 'Professional'
        },
        {
          authority: 'Spanish',
          authorityMeta: 'Beginner'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Skills Proficiency',
      icon: 'rocket',
      items: ['React', 'Javascript', 'CSS', 'SQL', 'SomeTech', 'CoolTech']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Photography', 'Poetry']
    }
  ]
}
