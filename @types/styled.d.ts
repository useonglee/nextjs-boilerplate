import 'styled-components';
import theme from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends theme {
    colors: typeof theme.colors;
  }
}
