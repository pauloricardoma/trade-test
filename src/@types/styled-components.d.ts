import darkTheme from '../Assets/styles/themes/dark';
import lightTheme from '../Assets/styles/themes/light';

type DarkTheme = typeof darkTheme;
type LightTheme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends DarkTheme, LightTheme {}
}
