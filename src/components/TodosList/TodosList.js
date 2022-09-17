import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Icon,
} from '@chakra-ui/react'

import { AiTwotoneEdit } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import {
  Content,
  Input,
  InputWrapper,
  Options,
  Slider,
  TodoContainer,
} from "./styled.js";

import { fetchTodos, toggleTodos } from "../../redux/slice/thunkActions";
import Loading from "../../components/Loading/index.js";
import EditTask from "../TaskFormModal/EditTask.js";
import AlertDialogModal from "../AlertDialogModal/index.js";
import Pagination from "../Pagination/index.js";
import { curretPosts, getCurrentPostsLength } from "../../redux/slice/todoSlice.js";


function TodosList() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.todos);
  const currentPostLength = useSelector(getCurrentPostsLength)
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editTodoItem, setEditTodoItem] = useState("");
  const [todoId, setTodoId] = useState(null);
  //Paginate for todo

  const handleChange = (todo) => {
    dispatch(toggleTodos(todo));
  };
  /* Modal Edit */
  const handleModal = (todo) => {
    setEditTodoItem(todo)
    setIsOpen(true)
  }
  /* Modal Edit */
  /* Modal Delete Dialog */

  const handleAlertDialog = (id) => {
    setIsAlertOpen(true)
    setTodoId(id)
  }
  /* Modal Delete Dialog */

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  const getPageOfTodo = useSelector(curretPosts)

  return (
    <TodoContainer>
      {/* Loading Components */}

      {status === "pending" && <Loading />}
      {status === "succeeded" &&
        getPageOfTodo.map((todo) => (
          <li key={todo.id}>
            <Content>{todo.content}</Content>
            <Options>
              <InputWrapper htmlFor={`todoContent${todo.id}`}>
                <Input
                  id={`todoContent${todo.id}`}
                  type={"checkbox"}
                  onChange={() => handleChange(todo)}
                  checked={todo.isCompleted}
                />
                <Slider />
              </InputWrapper>
              <Button colorScheme={"green"} onClick={() => handleModal(todo)} type="button">
                <Icon as={AiTwotoneEdit} w={5} h={5} fill={'#fff'} />
              </Button>
              <Button colorScheme={"red"} onClick={() => handleAlertDialog(todo.id)} type="button">
                <Icon as={FaTrashAlt} w={5} h={5} fill={'#fff'} />
              </Button>
            </Options>
          </li>
        ))}
      {/* Loading Components */}
      {/* If todo is empty */}
      {currentPostLength === 0 && (
        <Alert status='info'>
          <AlertIcon />
          There is no task do you a add new task
        </Alert>
      )}
      {/* If todo is empty */}

      {/* Delete Alert Modal */}
      <AlertDialogModal isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} todoId={todoId} />
      {/* Delete Alert Modal */}

      {/* Edit Task Modal */}
      <EditTask isOpen={isOpen} setIsOpen={setIsOpen} todo={editTodoItem} />
      {/* Edit Task Modal */}


      <Flex mt={5} flexWrap={"wrap"}>
        {/* Pagination */}
        <Pagination />
        {/* Pagination */}

      </Flex>
    </TodoContainer>
  );
}

export default TodosList
