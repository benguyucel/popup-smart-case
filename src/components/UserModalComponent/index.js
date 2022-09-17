import {
    Button, Modal, ModalHeader, ModalContent, ModalFooter, ModalOverlay, FormControl,
    ModalBody, FormLabel, Input
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slice/userSlice';
import { checkUser, setUserToStorage } from '../../utilities/userCheck'

function UserModal() {

    const initialRef = React.useRef(null)
    const [username, setUsername] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggin } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        setUserToStorage(username)
        dispatch(setUser(username))
        setIsOpen(false)
    }
    useEffect(() => {
        !isLoggin ? setIsOpen(true) : setIsOpen(false)
    }, [isOpen])
    return (
        <>
            <Modal
                isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Welcome user</ModalHeader>

                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input onChange={(e) => setUsername(e.target.value)} value={username} ref={initialRef} placeholder='Please enter username' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UserModal