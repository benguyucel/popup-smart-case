import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, ModalFooter, Input, Alert, AlertIcon } from '@chakra-ui/react'
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../redux/slice/thunkActions';


function AddTask({ isOpen = false, setIsOpen }) {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (taskName.length > 2) {
      const todoObj = { content: taskName }
      dispatch(addNewTodo(todoObj))
      setTaskName("")
      setIsOpen(false)
    }

  }
  return (
    <Modal onClose={setIsOpen} isOpen={isOpen} isCentered size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='task' size='md' />
        </ModalBody>
        <ModalFooter>
          {taskName.length < 3 && (
            <Alert mr={5} status={'error'} borderRadius={10} color='#000'>
              <AlertIcon />
              Content length greater than three
            </Alert>
          )}
          <Button colorScheme={'orange'} onClick={() => handleSubmit()} marginRight={2}>Add</Button>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddTask