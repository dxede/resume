const DARK_THEME = {
  background: 'black',
  color: 'white',
  footer: '#202021',
  nav: '#020202'
}

const LIGHT_THEME = {
  background: '#fefefe',
  color: '#000',
  footer: '#202021',
  nav: '#fbfbfb',
  separator: '#e8e8e8d9'
}

const DARK_COLOR_THEME = {
  background: 'linear-gradient(180deg, rgb(7 9 14), rgb(9 11 27), rgb(9 13 25))',
  color: 'rgb(242 243 255)',
  nav: 'linear-gradient(180deg, #080a13, 95%, #090b19cc)',
  separator: '#131b25'
}

export default class StyleSvc {
  constructor () {
    this.colors = LIGHT_THEME;

    this.z = {
      nav: 1000
    };

    this.fonts = {
      headerFont: `'Bebas Neue', 'Roboto Condensed', sans-serif`
    };

    /** @TODO: Enable theming after creating toggle mechanism */
    // this.setupTheme();
  }

  setupTheme () {
    if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
      this.colors = DARK_COLOR_THEME;

      window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.isDarkMode = e.matches;
        this.colors = this.isDarkMode ? DARK_THEME : LIGHT_THEME;
        this.attachThemeStylesToHTMLElement();
      });
    }
    this.attachThemeStylesToHTMLElement();
  }

  attachThemeStylesToHTMLElement () {
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.style.background = this.colors.background;
    htmlElement.style.color = this.colors.color;
  }

  /** @TODO: Convert to queue */
  toggleThemes () {
    const themes = [DARK_THEME, LIGHT_THEME, DARK_COLOR_THEME];
    const otherThemes = themes.filter(t => t !== this.colors);
    this.colors = otherThemes[Math.floor(Math.random() * Math.floor(themes.length))];
    this.attachThemeStylesToHTMLElement();
  }
}