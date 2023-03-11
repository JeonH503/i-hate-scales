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
    border-bottom:1px solid #F6F6F6;
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
        color: #F6F6F6;
        position:relative;
    }

    & a:after {
        display:inline-block;
        content:'';
        width:100%;
        height:3px;
        background:#F6F6F6;
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
            <Link href="/">
                <p>메트로놈</p>
            </Link>
            
            <Link href="/">
                <p>스케일</p>
            </Link>
        </Nav>
    </HeaderWrap>
}

export default Header