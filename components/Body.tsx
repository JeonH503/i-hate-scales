import styled from "styled-components"
import { useRouter } from 'next/router'
import { ReactNode } from "react"
const Container = styled.div<{path:string}>`
    width:${({path}) => path === '/' ? "100vw" : "768px"};
    margin:0 auto;
    padding: ${({path}) => path === '/' ? "" : "20px"};

    @media screen and (max-width: 768px) {
        margin:0;
        padding: ${({path}) => path === '/' ? "" : "20px 0"};
        width:100vw;    
    }
`

function Body ({children}:{children:ReactNode}) {
    const router = useRouter();

    return <Container path={router.pathname}>
        {children}
    </Container>   
}

export default Body