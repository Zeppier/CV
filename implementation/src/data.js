import {faCoffee, faDatabase, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

const predefinedIcons = {
  coffee: faCoffee,
  database: faDatabase,
  languages: faLaptopCode
}

export const CVData = {
  personalData: {
    name: 'Yaroslav Bezruchenko',
    title: 'Middle Java Developer',
    image: 'https://i.ibb.co/XWRS078/22222.jpg',
    contacts: [
      {type: 'email', value: 'bezruchenko.y.v@gmail.com'},
      {type: 'phone', value: '+48 889 038 259'},
      {type: 'location', value: 'Łódź'},
      {type: 'website', value: 'https://zeppier.github.io/CV/'},
      {type: 'linkedin', value: 'linkedin.com/in/yaroslav-bezruchenko'},
      {type: 'github', value: 'github.com/zeppier'}
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: 'Novice team player software engineer with a can-do attitude and quick learning skills. Grew from zero to owning the architecture of the start-up and leading the team in parallel with feature development within two years. \n' +
        '\n' +
        'Created and owned multiple core microservices and concepts. Participated in planning, creating, and implementing different features from scratch. \n',
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Computer Science (Masters)',
          authority: 'Odessa National Polytechnic University',
          authorityWebSite: 'https://op.edu.ua/en',
          rightSide: '2020 - 2022'
        },
        {
          title: 'Computer Science (Bachelor)',
          authority: 'Odessa National Polytechnic University',
          description: 'CIG R&D LAB Finalist with own project',
          authorityWebSite: 'https://op.edu.ua/en',
          rightSide: '2017 - 2020'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      icon: 'archive',
      items: [
        {
          title: 'Platform Architect',
          company: 'Intempt',
          description: 'Working as a developer with architect and team lead responsibilities. Architected solutions for features and improved platform stability and load handling. Was able to double the processing speed under the load in one month by redoing multiple core components on my own..',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2022.06 - present',
          descriptionTags: ['Java', 'Microservices', 'Architecture']
        },
        {
          title: 'Software Developer',
          company: 'Intempt',
          description: 'Owned multiple microservices and was responsible for the stability of a core project. Built multiple microservices and maintained them. Grew up as a software developer from junior to platform architect.',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2020.08 - 2022.06',
          descriptionTags: ['Java', 'Project Reactor']
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
          description: 'Upper-intermediate'
        },
        {
          authority: 'Ukrainian',
          description: 'Native'
        },
        {
          authority: 'Russian',
          description: 'Native'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Programming languages',
      icon: predefinedIcons.languages,
      items: ['Java 11', 'Scala 2.12']
    },
    {
      type: 'tag-list',
      title: 'Java Frameworks',
      icon: predefinedIcons.coffee,
      items: ['Spring Boot', 'Project Reactive', 'Spark', 'Apache Flink', 'Spring Webflux']
    },
    {
      type: 'tag-list',
      title: 'Tools',
      icon: 'rocket',
      items: ['Kafka', 'Terraform', 'Debezium', 'Multi-cloud storage provider Noobaa', 'Kafka Connect', 'Maven', 'RSocket', 'Git', 'Linux', 'GitHub Actions']
    },
    {
      type: 'tag-list',
      title: 'Other skills',
      icon: 'rocket',
      items: ['AWS S3', 'AWS MSK', 'AWS EKS', 'AWS CloudFront', 'AWS ECR', 'AWS IAM', 'Kubernetes', 'Docker', 'Microservice Architecture']
    },
    {
      type: 'tag-list',
      title: 'Databases',
      icon: predefinedIcons.database,
      items: ['PostgreSQL', 'Cassandra', 'Clickhouse', 'SQLite']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Piano', 'Computer Science']
    }
  ]
}
