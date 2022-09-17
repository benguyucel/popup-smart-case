import { Button } from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { curretPosts, getCurrentPostsLength, setCurrentPage } from '../../redux/slice/todoSlice'

function Pagination() {
    const dispatch = useDispatch()
    const { postsPerPage, currentPage } = useSelector(state => state.todos)
    const getTotalPostLength = useSelector(getCurrentPostsLength)
    const getCurrentPost = useSelector(curretPosts)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(getTotalPostLength / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    const paginate = useCallback(
        (numb) => {
            dispatch(setCurrentPage(numb))
        }
        , [dispatch])

    useEffect(() => {
        if (getCurrentPost.length < postsPerPage) {
            (getCurrentPost.length === 0 && pageNumbers.length !== 0) && paginate(pageNumbers.length)
        }
    }, [getCurrentPost, pageNumbers.length, postsPerPage, paginate])
    return (
        <>
            {pageNumbers.map((numb, index) => (
                <Button onClick={() => paginate(index + 1)} as={"a"} href='#!'
                    colorScheme={index + 1 === currentPage ? 'red' : 'facebook'}
                    mr='2' padding={2} key={index}>{numb}</Button>
            ))}
        </>
    )
}

export default Pagination