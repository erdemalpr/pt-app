// constants/theme.ts

export const LightTheme = {
    name: 'light',
    colors: {
      background: '#FFFFFF',
      backgroundSecondary: '#F2F2F2',
      text: '#111111',
      muted: '#666666',
      input: '#E5E5E5',
      primary: '#F97316',
      border: '#D4D4D4',
      icon: '#555555',
    },
  };
  
  export const DarkTheme = {
    name: 'dark',
    colors: {
      background: '#121212',
      backgroundSecondary: '#1C1C1C',
      text: '#F5F5F5',
      muted: '#AAAAAA',
      input: '#1E1E1E',
      primary: '#F97316',
      border: '#333333',
      icon: '#888888',
    },
  };
  
  export type ThemeType = typeof LightTheme;
  