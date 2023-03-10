import styled from 'styled-components'; 
import Image from 'next/image';

const HeaderWrap = styled.div`
    width:100vw;
    height:100px;
    background:${({ theme }) => theme.color.primary};
`

const Logo = styled.div`
    position: relative;
    height:100%;
    & img {
        width:auto !important;
        transform: translateX(-50%);
        left:50% !important;
    }
`

function Header () {
    return <HeaderWrap>
        <Logo>
            <Image alt="logo" fill={true} style={{objectFit:"contain"}} src="/logo.png"/>
        </Logo>
    </HeaderWrap>
}

export default Header