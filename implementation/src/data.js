import {faCoffee, faDatabase, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

const predefinedIcons = {
  coffee: faCoffee,
  database: faDatabase,
  languages: faLaptopCode
}

export const CVData = {
  personalData: {
    name: 'Yaroslav Bezruchenko',
    title: 'Software Engineer - Platform Architect',
    image: 'https://i.ibb.co/XWRS078/22222.jpg',
    contacts: [
      {type: 'email', value: 'bezruchenko.y.v@gmail.com'},
      {type: 'phone', value: '+48 889 038 259'},
      {type: 'location', value: 'Łódź'},
      {type: 'linkedin', value: 'linkedin.com/in/yaroslav-bezruchenko'},
      {type: 'github', value: 'github.com/zeppier'}
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: 'Experienced software engineer and platform architect with a proven track record of rapidly growing from junior to architecture-level ownership in under two years. I specialize in designing and scaling high-throughput distributed systems, building cloud-native infrastructure, and delivering real-time data pipelines in production. \n\nRecently focused on LLM-based applications — including custom multi-step agents, retrieval-augmented generation (RAG), and complex orchestration workflows. I thrive in fast-moving teams where engineering quality, system design, and product impact intersect.\n',
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
          description: '* Redesigned core platform services, achieving 10x performance improvement under load.\n' +
              '* Architected and implemented high-scale systems for customer data management and real-time event ingestion using Flink and Spark.\n' +
              '* Explored applications of LLMs for internal research workflows, with proof-of-concept implementations using retrieval-augmented generation.\n' +
              '* Created custom agents for building complex objects using chat with the customer. A custom agent can generate deep sequences of emails and SMS, including complex conditions for triggering and goals, reducing user input by 80%. \n' +
              '* Re-created platform infrastructure using Terraform scripts, providing a robust instruction set to manage environments.\n' +
              '* Revisited GitHub Actions flow to improve CI/CD.\n' +
              '* Created a recommendation system from the ground up using a graph database with vector search capabilities.\n',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2022.06 - present',
          descriptionTags: ['Java', 'Python', 'LLM', 'Microservices', 'Architecture']
        },
        {
          title: 'Software Engineer',
          company: 'Intempt',
          description: 'Owned multiple microservices and was responsible for the stability of a core project. Built multiple microservices and maintained them. Grew up as a software engineer from junior to platform architect.',
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
      items: ['Java', 'Scala', 'Python']
    },
    {
      type: 'tag-list',
      title: 'Java Frameworks',
      icon: predefinedIcons.coffee,
      items: ['Spring Boot', 'Project Reactor', 'Apache Spark', 'Apache Flink', 'Spring Webflux', 'Spring Webflux', 'RSocket']
    },
    {
      type: 'tag-list',
      title: 'LLM',
      icon: predefinedIcons.database,
      items: ['RAG', 'OpenAI API', 'AI Agents', 'vLLM', 'Langgraph', 'uvicorn', 'FastAPI']
    },
    {
      type: 'tag-list',
      title: 'Tools',
      icon: 'rocket',
      items: ['Kafka', 'Terraform', 'Debezium', 'Multi-cloud storage provider Noobaa', 'Kafka Connect', 'Maven', 'Git', 'Linux', 'GitHub Actions']
    },
    {
      type: 'tag-list',
      title: 'Infrastructure',
      icon: 'rocket',
      items: ['AWS S3', 'AWS MSK', 'AWS EKS', 'AWS CloudFront', 'AWS ECR', 'AWS IAM', 'Kubernetes', 'Docker', 'Microservice Architecture']
    },
    {
      type: 'tag-list',
      title: 'Databases',
      icon: predefinedIcons.database,
      items: ['PostgreSQL', 'RocksDB', 'Clickhouse', 'SQLite', 'Neo4j', 'Redis']
    }
  ]
}
