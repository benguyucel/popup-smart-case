import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { fetchTodos } from '../redux/slice/thunkActions';

const TodoContainer = styled.ul`
padding: 1rem;
li{
  padding: 2rem;
  background-color: #f8a5c2;
  border-radius: 0.5rem;
  filter: drop-shadow(-1px 2px .5rem #000);
  font-size: 1.5rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: .24rem;
  margin-bottom: .5rem;
  }
  
`


function Todo() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos)
  console.log(todos)
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
  return (
    <>
      <TodoContainer>
        {todos && (
          todos.map((todo) => (
            <li key={nanoid()}>{todo.content}</li>
          ))
        )}
      </TodoContainer>
    </>
  )
}

export default Todo