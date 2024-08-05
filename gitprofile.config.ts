// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shubhankarkalra', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/shubhankarkalra/shubhankarkalra.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/shubhankarkalra/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['shubhankarkalra/my-project1', 'shubhankarkalra/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['shubhankarkalra/CLI-OpenAI', 'shubhankarkalra/image-processing'], // List of repository names to display. example: ['shubhankarkalra/my-project1', 'shubhankarkalra/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Shubhankar Kalra',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shubhankarkalra',
    twitter: 'shubhukalra',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'shubhukalra97',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.skalra.in',
    phone: '',
    email: 'kalra.shubhankar@outlook.com',
  },
  resume: {
    fileUrl:
      'https://1drv.ms/b/s!ArZa6VLQoe6riT8a-3uP-H-fgsrk?e=Csz4rE', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kubernetes',
    'Terraform',
    'Docker',
    'Packer',
    'Prometheus',
    'Grafana',
    'Google Cloud',
    'GitLab',
    'Azure Cloud',
    'Docker',
    'Helm',
    'Shell Scripting',

  ],
  experiences: [
    {
      company: 'Ericsson',
      position: 'Terraform Engineer',
      from: 'Aug 2021',
      to: 'Present',
      companyLink: 'https://ericsson.com',
    },
    {
      company: 'Successive Technologies',
      position: 'DevOps Engineer',
      from: 'June 2019',
      to: 'August 2021',
      companyLink: 'https://successive.tech/',
    },
  ],
  certifications: [
    {
      name: 'CKA: Certified Kubernetes Administrator',
      body: 'Issuer: The Linux Foundation',
      year: 'Feb 2024',
      link: 'https://www.credly.com/go/wA2jXrYp7HRxfe8xn9BAzA',
    },
    {
      name: 'Terraform Associate',
      body: 'Issuer: Hashicorp',
      year: 'Feb 2024',
      link: 'https://www.credly.com/badges/b7ef82ef-747b-47f1-98e6-513354d8eca0/public_url',
    },
  ],
  educations: [
    {
      institution: 'Manav Rachna International University',
      degree: 'B.Tech in Computer Science ',
      from: '2016',
      to: '2019',
    },
    {
      institution: 'DITMR',
      degree: 'Diploma in Computer Science',
      from: '2013',
      to: '2016',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'https://medium.com/', // medium | dev
    username: 'shubhukalra97', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-Q6EKNTGM8S', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/shubhankarkalra/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
