import Header from "./components/Header/Header";
import UserModal from "./components/UserModalComponent";
import TodosList from "./components/TodosList/TodosList";
import { ChangeThemeButton, GlobalStyle, MainContainer, themeDark, themeLight, Wrapper } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { getThemeFromStorage, setThemeToStorage } from "./utilities/themeStorage";


const App = () => {
  const [theme, setTheme] = useState(getThemeFromStorage() || setThemeToStorage('light'))
  const handleTheme = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }
  useEffect(() => {
    setThemeToStorage(theme)
  }, [theme])
  return (
    <>
      <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
        <GlobalStyle />
        <ChangeThemeButton onClick={() => handleTheme()}>
          {theme === "light" ? "OFF" : "ON"}
        </ChangeThemeButton>
        <Wrapper>
          <MainContainer>
            <Header />
            <TodosList />
            <UserModal />
          </MainContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
