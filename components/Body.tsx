import styled from "styled-components"
import { ReactNode } from "react"
const Container = styled.div`
    width:1200px;
    margin:0 auto;
    padding: 20px;
`

function Body ({children}:{children:ReactNode}) {
    return <Container>
        {children}
    </Container>   
}

export default Body