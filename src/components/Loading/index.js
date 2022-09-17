import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

function Loading() {
    return (
        <Box      
            height={200}
            display={'flex'}
            alignItems={'center'}
            justifyContent={"center"}
            flexDirection={"column"}
        >
            <Spinner size="xl" />
        </Box >
    )
}

export default Loading