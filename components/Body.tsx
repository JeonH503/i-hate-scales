import styled from "styled-components"
import { ReactNode } from "react"
const Container = styled.div`
    width:768px;
    margin:0 auto;
    padding: 20px;

    @media screen and (max-width: 768px) {
        margin:0;
        padding: 20px 0;
        width:100%;    
    }
`

function Body ({children}:{children:ReactNode}) {
    return <Container>
        {children}
    </Container>   
}

export default Body