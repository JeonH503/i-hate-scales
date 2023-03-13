import styled from 'styled-components'; 
import Image from 'next/image';
import Link from 'next/link'

const HeaderWrap = styled.div`
    width:100vw;
    height:140px;
    background:${({ theme }) => theme.color.primary};
`

const Logo = styled.div`
    position: relative;
    height:100px;
    border-bottom:1px solid ${({ theme }) => theme.color.background};
    margin:0 30vw;
    & img {
        width:auto !important;
        transform: translateX(-50%);
        left:50% !important;
    }
`

const Nav = styled.div`
    display:flex;
    justify-content:center;

    & a {
        color: ${({ theme }) => theme.color.background};
        position:relative;
    }

    & a:after {
        display:inline-block;
        content:'';
        width:100%;
        height:3px;
        background:${({ theme }) => theme.color.background};
        position:absolute;
        transform:scaleX(0);
        transition: all 0.2s;
        transform-origin: center;
    }

    & a:hover:after {
        transform:scaleX(1);
    }
`

function Header () {
    return <HeaderWrap>
        <Logo>
            <Image alt="logo" fill={true} style={{objectFit:"contain"}} src="/logo.png"/>
        </Logo>
        <Nav>
            <Link href="/metronome">
                <p>메트로놈</p>
            </Link>
            
            <Link href="/scales">
                <p>스케일</p>
            </Link>
        </Nav>
    </HeaderWrap>
}

export default Header