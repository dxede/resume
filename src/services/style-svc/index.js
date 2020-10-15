import appThemes from './themes';



export default class StyleSvc {
  /**
   * Theme elements common to all themes
   */
  globals = {
    z: {
      nav: 1000
    },
    fonts: {
      headerFont: `'Bebas Neue', 'Roboto Condensed', sans-serif`
    }
  };

  constructor () {
    this.setActiveTheme(appThemes.light);
    this.setSystemTheme();
  }

  get isDarkMode () {
    return this.activeTheme.name === 'dark';
  }

  setSystemTheme () {
    if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setActiveTheme(appThemes.dark);

      window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.setActiveTheme(e.matches ? appThemes.dark : appThemes.light);
      });
    }
  }

  setActiveTheme(theme) {
    this.activeTheme = {
      ...this.globals,
      ...theme
    };
  }

  toggleActiveTheme () {
    this.setActiveTheme(this.isDarkMode ? appThemes.light : appThemes.dark);
    return this.activeTheme;
  }
}