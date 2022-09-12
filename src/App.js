import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import TodosList from "./TodosList/TodosList";

const GlobalStyle = createGlobalStyle`
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
  font-size: 62.5%;
  font-family: 'Rubik', sans-serif
}
body{
  background-color: #596275;
}
`
const MainContainer = styled.div`
width: 600px;
height: auto;
margin:  25% auto;
border: .2rem solid #c44569;
border-radius: .4rem;
background-color: #cf6a87;
`
const App = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <TodosList />
      </MainContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
