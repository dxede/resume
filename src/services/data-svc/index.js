import experienceData from './experience-data';
import skillsData from './skills-data';
import SimpleIcons from './icons';

export default class DataSvc {
  /**
   * Social Sharing Links used site wide
   */
  socialSharing = [
    {
      name: 'Gmail',
      linkTo: 'mailto:eoiwoh@gmail.com'
    },
    {
      name: 'LinkedIn',
      linkTo: 'https://linkedin.com/in/ededeoiwoh'
    },
    {
      name: 'Github',
      linkTo: 'https://github.com/dxede',
      hex: 'ff9300'
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

  /**
   * Get a simple icon object.
   * 
   * @param name The brand you need an icon for.
   */
  getSimpleIcon (name) {
    return SimpleIcons[name];
  }

  get experienceData () {
    return experienceData;
  }

  get educationData () {
    return {
      title: 'BSc in Honors Geomatics with Computer Science Minor',
      company: 'University of Waterloo',
      logo: 'UWaterlooLogo',
      dateString: 'Sept. 2015 - Apr. 2020',
    };
  }

  get skillsData () {
    return skillsData.map(s => {
      const icon = this.getSimpleIcon(s.label) || {};
      
      return {
        ...icon,
        ...s,
        logo: this.makeSimpleIconURL(icon.slug),
      }
    });
  }
}