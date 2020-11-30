// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    background: string;
    color: {
      primary: string;
      secondary: string;
      grey: string;
      white: string;
    }
  }
}