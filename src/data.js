import {faCoffee, faDatabase, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import React from 'react';


const predefinedIcons = {
  coffee: faCoffee,
  database: faDatabase,
  languages: faLaptopCode
}

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
        },
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
          description: 'Working as a developer with architect ' +
              'and team lead responsibilities. Created and ' +
              'maintained multiple core projects in a platform.',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2022.08 - present',
          descriptionTags: ['Java', 'Microservices', 'Architecture']
        },
        {
          title: 'Software Developer',
          company: 'Intempt',
          description: 'Grew up as a software developer from junior to platform architect.',
          companyWebSite: 'https://www.intempt.com/',
          companyMeta: '',
          datesBetween: '2020.08 - 2022.08',
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
      items: ['Spring Boot', 'Project Reactive', 'Spark', 'Apache Flink']
    },
    {
      type: 'tag-list',
      title: 'Tools',
      icon: 'rocket',
      items: ['Kafka', 'Kafka Connect', 'Terraform', 'Debezium', 'Multi-cloud storage provider Noobaa', 'Maven', 'RSocket', 'Git']
    },
    {
      type: 'tag-list',
      title: 'Databases',
      icon: predefinedIcons.database,
      items: ['PostgreSQL', 'Cassandra', 'Clickhouse']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Piano', 'Computer Science']
    }
  ]
}
