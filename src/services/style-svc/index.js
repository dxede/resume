import AppThemes from './themes';



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
    this.setActiveTheme(AppThemes.light);
    this.setSystemTheme();
  }

  get isDarkMode () {
    return this.activeTheme.name === 'dark';
  }

  setSystemTheme () {
    if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setActiveTheme(AppThemes.dark);

      window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.setActiveTheme(e.matches ? AppThemes.dark : AppThemes.light);
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
    this.setActiveTheme(this.isDarkMode ? AppThemes.light : AppThemes.dark);
    return this.activeTheme;
  }
}