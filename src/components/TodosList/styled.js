import styled from "styled-components";

export const TodoContainer = styled.ul`
  padding: 1px;
  padding-bottom: 10px;
  li {
    background-color:${props => props.theme.listBgColor};
    padding: 15px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  }
`;
export const Content = styled.div`
  text-transform: capitalize;
  color:${props => props.theme.fontColor}
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const EditButton = styled.button`
  cursor: pointer;
  background-color: #ff6b81;
  padding: 7px 20px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`;
export const InputWrapper = styled.label`
  position: relative;
`;
export const Input = styled.input`
  position: absolute;
  left: -99999px;
  top: -99999px;
  &:checked + span {
    background-color: #92F22A;
    transition: 0.2s;
    &:before {
      transition: all 0.2s;
      left: calc(100% - 0.2px);
      transform: translateX(-100%);
    }
  }
`;
export const Slider = styled.span`
  display: flex;
  width: 50px;
  height: 25px;
  cursor: pointer;
  box-shadow: -2px 3px 25px -12px rgba(0, 0, 0, 1);
  border-radius: 10px;
  background-color: #E22211;
  transition: background-color 0.4s;
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 21px;
    transition: 0.5s;
    background-color: #fff;
  }
`;