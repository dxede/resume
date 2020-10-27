import ExperienceData from './experience-data';
import SkillsData from './skills-data';
import EducationData from './education-data';
import AppIcons from './icons';
import { DatabaseWrapper, ServiceApi } from './utils';

export default class DataSvc {
  db = new DatabaseWrapper();
  api = new ServiceApi();

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
    return AppIcons[name];
  }

  /**
   * Get data from a Firestore collection.
   * 
   * If a callback is provided, the callback is called without returning the data.
   * 
   * @param collectionName The collection which contains the data.
   * @param callback A callback function which takes in the remote data.
   */
  async fetchRemoteData (collectionName, callback = null) {
    const retrieverFunction = async () => await this.db.retrieveCollectionDocuments(collectionName);
    let fallbackData;

    switch (collectionName) {
      case 'experience':
        fallbackData = ExperienceData;
        break;
      case 'education':
        fallbackData = EducationData;
        break;
      case 'skills':
        fallbackData = SkillsData;
        break;
      default:
        break;
    }

    if (!retrieverFunction) {
      console.error(`Collection "${collectionName}" does not exist.`);
      return;
    } else {
      let data;

      try {
        data = await retrieverFunction();
      } catch (error) {
        // Bury error and replace with hardcoded fallback
        data = Object.keys(fallbackData).map(key => fallbackData[key]);
        this.api.logSiteError(error);
      }

      if (callback) {
        callback(data);
      } else {
        return data;
      }  
    }
  }

  async fetchExperienceData (callback = null) {
    return await this.fetchRemoteData('experience', callback);
  }

  async fetchEducationData (callback = null) {
    return await this.fetchRemoteData('education', callback);
  }

  async fetchSkillsData (callback = null) {
    const data = (await this.fetchRemoteData('skills'))
      .map(s => {
        const icon = this.getSimpleIcon(s.label) || {};
        
        return {
          ...icon,
          ...s,
          logo: this.makeSimpleIconURL(icon.slug),
        }
      });
    
    if (callback) {
      callback(data);
    } else {
      return data;
    }
  }
}