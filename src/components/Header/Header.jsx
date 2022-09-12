import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
    padding: 1rem;
`
function Header() {
    return (
        <HeaderTitle>Task Menager</HeaderTitle>
    )
}

export default Header