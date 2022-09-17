import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilterStatus } from "../../redux/slice/todoSlice";
import AddTask from "../TaskFormModal/AddTask";

const HeaderTitle = styled.div`
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.fontColor};
`;

function Header({ }) {
  const [isOpen, setIsOpen] = useState(false);
  const { username, isLoggin } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  return (
    <HeaderTitle>
      <Item>{isLoggin ? `Welcome ${username}` : "You must login"}</Item>
      <Flex gap={2}>
        <Button onClick={() => dispatch(setFilterStatus(""))} colorScheme={"facebook"}>
          All
        </Button>
        <Button onClick={() => dispatch(setFilterStatus(true))} colorScheme={"whatsapp"}>
          Completed
        </Button>
        <Button onClick={() => dispatch(setFilterStatus(false))} colorScheme={"red"}>
          Un Completed
        </Button>
      </Flex>
      <Item>
        {isLoggin && (
          <Button onClick={() => setIsOpen(true)} colorScheme={"whatsapp"}>
            New Task?
          </Button>
        )}
        <AddTask isOpen={isOpen} setIsOpen={setIsOpen} />
      </Item>
    </HeaderTitle>
  );
}

export default Header;
