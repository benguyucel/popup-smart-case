import { AlertDialog, AlertDialogOverlay, AlertDialogBody, Button, useDisclosure, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../redux/slice/thunkActions'

function AlertDialogModal({ isAlertOpen, setIsAlertOpen, todoId }) {
    const { onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTodo(todoId))
        setIsAlertOpen(false)
    }
    return (
        <>
            <AlertDialog
                isOpen={isAlertOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered="center"
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Todo
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure want to delete this ?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => setIsAlertOpen(false)}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => handleDelete()} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default AlertDialogModal