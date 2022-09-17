import styled, { createGlobalStyle } from "styled-components"

export const themeDark = {
    fontColor: "#fff !important",
    main: "#2d3436 !important",
    listBgColor: "#636e72 !important",
    themeButtonBg: "#fff !important",
    themeButtonColor: '#000'
}
export const themeLight = {
    fontColor: "#000 !important",
    main: "#fdcb6e !important",
    listBgColor: "#ffeaa7 !important",
    themeButtonBg: "#000 !important",
    themeButtonColor: '#fff'

}

export const GlobalStyle = createGlobalStyle`
*{
  border:0;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  color: #000;
}
html{
 
  font-family: 'Rubik', sans-serif
}
body{
    background-color: ${props => props.theme.main};
}
`
export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;
padding-bottom: 20px;

`
export const MainContainer = styled.div`
width: 100%;
max-width:80%;
min-height: 50px;
border-radius: 4px;
background-color: ${props => props.theme.main}!important;
box-shadow: -2px 3px 25px -12px rgba(0, 0, 0, 1);
-webkit-box-shadow: -2px 3px 25px -12px rgba(0, 0, 0, 1);
`

export const ChangeThemeButton = styled.button`
position: absolute;
right: 1px;
font-weight: bold;
top: 1px;
font-size: 15px;
padding: 5px 15px;
border-radius: 4px;
background-color: ${props => props.theme.themeButtonBg};
color: ${props => props.theme.themeButtonColor};
`