import ServiceBase from './_base-svc';
import simpleIcons from 'simple-icons';

const experienceData = {
  stringmasters: {
    title: 'Full Stack Developer (Independent Contractor)',
    company: 'String Masters - Toronto, ON (Remote)',
    dateString: 'Sept. 2019 - Sept. 2020',
    logo: 'SMLogo',
    descriptionItems: [
      'Maintained existing codebase for a customer facing application using EmberJS.',
      'Maintained existing codebase for a backend server using Typescript.',
      'Implemented new features based on business requirements using EmberJS and Typescript.',
      'Implemented payment service using Typescript, Javascript and Stripe API.'
    ],
    from: null,
    till: null,
  },
  routethiscontract: {
    title: 'Front End Developer (Independent Contractor)',
    company: 'RouteThis - Waterloo, ON (Remote)',
    dateString: 'Apr. 2020 - Aug. 2020',
    logo: 'RouteThisLogo',
    descriptionItems: [
      'Designed and implemented a new customer facing dashboard using React and Socket.io.',
      'Built and maintained a React component library for the engineering team.',
      'Developed an HTML generator for customer facing help tips using Javascript and React.',
    ],
    from: null,
    till: null,
  },
  routethis: {
    title: 'Full Stack Developer',
    company: 'RouteThis - Waterloo, ON (Remote)',
    dateString: 'Jan. 2019 - Apr. 2019',
    logo: 'RouteThisLogo',
    descriptionItems: [
      'Implemented new dashboard and API features using Vanilla JS and Express.',
      'Developed customer facing web application using React Express, and MongoDB.',
      'Worked on development and deployment of iOS apps using Xcode and Objective C.',
      'Processed CSV data to extract sale insights using Python.',
      'Designed high fidelity mockups for dashboard elements using Adobe XD and Sketch.',
      'Created assets for iOS, Android and Web applications using Photoshop, Illustrator and Sketch.'
    ],
    from: null,
    till: null,
  },
  td: {
    title: 'Angular Developer',
    company: 'TD - Waterloo, ON',
    dateString: 'Apr. 2018 - Aug. 2018',
    logo: 'TDLogo',
    descriptionItems: [
      'Maintained Wealth Management Web Portal for US customers, using AngularJS.',
      'Fixed defects, tracked with JIRA by implementing or optimizing functions and modules.',
      'Created documentation and resources for team use.',
      'Proposed and implemented API test suite using Postman.'
    ],
    from: null,
    till: null,
  },
  mlf: {
    title: 'Developer & Designer',
    company: 'Maple Leaf Foods - Mississauga, ON',
    dateString: 'Sept. 2017 - Dec. 2017',
    logo: 'MLFLogo',
    descriptionItems: [
      'Built 3 rapid prototypes for internal web applications using Angular 4 and SQLite.',
      'Developed ChatBot using Microsoft Bot framework and NodeJS to optimize retrieval of information from a collection of PDF documents with content about company policy.',
      'Led architectural design for 3 internal projects, which were implemented as prototypes.',
      'Developed and presented proof of concepts to department heads and proposed use cases for the company.'
    ],
    from: null,
    till: null,
  },
}

const skillData = [
  {
    label: 'Javascript',
    siteUrl: `https://javascript.info`,
    type: 'language'
  },
  {
    label: 'Typescript',
    siteUrl: `https://www.typescriptlang.org`,
    type: 'language'
  },
  {
    label: 'Python',
    siteUrl: `https://www.python.org`,
    type: 'language'
  },
  {
    label: 'React',
    siteUrl: `https://reactjs.org`,
    type: 'frontend-framework'
  },
  {
    label: 'Angular',
    siteUrl: `https://angular.io`,
    type: 'frontend-framework'
  },
  {
    label: 'Ember.js',
    siteUrl: `https://emberjs.com`,
    type: 'frontend-framework'
  },
  {
    label: 'Sass',
    siteUrl: `http://sass-lang.com/`,
    type: 'css-framework'
  },
  {
    label: 'Node.js',
    siteUrl: `https://nodejs.org/en/`,
    type: 'server-side'
  },
  {
    label: 'MongoDB',
    siteUrl: `https://www.mongodb.com`,
    type: 'database'
  },
  {
    label: 'SQLite',
    siteUrl: `https://www.sqlite.org/index.html`,
    type: 'database'
  },
  {
    label: 'Docker',
    siteUrl: `https://www.docker.com`,
    type: 'deployment'
  },
  {
    label: 'Digital Ocean',
    name: 'DigitalOcean',
    siteUrl: `https://www.digitalocean.com`,
    type: 'cloud'
  },
  {
    label: 'AWS',
    name: 'Amazon AWS',
    hex: 'FF9900',
    siteUrl: `https://aws.amazon.com`,
    type: 'cloud'
  },
];

class ConfigSvc extends ServiceBase {
  /**
   * Social Sharing Links used site wide
   */
  socialSharing = [
    {
      name: 'gmail',
      linkTo: 'mailto:eoiwoh@gmail.com'
    },
    {
      name: 'linkedin',
      linkTo: 'https://linkedin.com/in/ededeoiwoh'
    },
    {
      name: 'github',
      linkTo: 'https://github.com/dxede'
    },
  ];

  /**
   * Create an image source URL for a simple icon.
   * 
   * @param name The icon you want the URL for.
   */
  makeSimpleIconURL (name) {
    return `https://unpkg.com/simple-icons@v3/icons/${name}.svg`
  }

  get experienceData () {
    return experienceData;
  }

  get educationData () {
    return {
      title: 'Bsc in Honors Geomatics with Computer Science Minor',
      company: 'University of Waterloo',
      logo: 'UWaterlooLogo',
      dateString: 'Sept. 2015 - Apr. 2020',
    };
  }

  get skillsData () {
    return skillData.map(s => {
      const icon = simpleIcons.get(s.name || s.label) || {};
      
      return {
        ...icon,
        ...s,
        logo: this.makeSimpleIconURL(icon.slug),
      }
    });
  }
}

export default new ConfigSvc();