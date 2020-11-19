import { createGlobalStyle } from 'styled-components'

const AppStyle = createGlobalStyle`
  body {
      height : 100%;
      width : 100vh;
      background-color : #1b1c21;

      color : white;
      font-family : 'Open Sans', sans-serif;
      .col{
        padding : 0px;
      }
  }


`

export default AppStyle;