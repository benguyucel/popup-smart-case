import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, ModalFooter, Input, Alert, AlertIcon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  editTodo } from '../../redux/slice/thunkActions';


function EditTask({ isOpen = false, setIsOpen, todo }) {
    const [taskName, setTaskName] = useState(null);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (taskName.length > 2) {
            const todoObj = { id: todo.id, content: taskName }
            dispatch(editTodo(todoObj))
            setIsOpen(false)
        }

    }
    useEffect(() => {
        setTaskName(todo.content)
    }, [todo])
    return (
        <>
            {todo && (
                <Modal onClose={setIsOpen} isOpen={isOpen} isCentered size={'xl'}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Edit Task</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Input value={taskName ? taskName : ""} onChange={(e) => setTaskName(e.target.value)} placeholder='task' size='md' />
                        </ModalBody>
                        <ModalFooter>
                            {taskName?.length < 3 && (
                                <Alert mr={5} status={'error'} borderRadius={10} color='#000'>
                                    <AlertIcon />
                                    Content length greater than three
                                </Alert>
                            )}
                            <Button colorScheme={'orange'} onClick={() => handleSubmit()}>Save</Button>
                            <Button onClick={() => setIsOpen(false)}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}

export default EditTask