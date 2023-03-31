import styled, {keyframes} from "styled-components"
import Image from "next/image"
import Link from "next/link"
import HeadMeta from "@/components/HeaderMeta"

const FadeIn = keyframes`
    from {
      opacity : 0;
    }

    to {
      opacity : 1;
    }
`

const Wrap = styled.div`
  width:100vw;
  height:calc(100vh - 140px);
  background:${({ theme }) => theme.color.primary};
  position:relative;


  & h1 {
    color:white;
    margin:0;
    width:100%;
    font-size:60px;
  }
`

const InnerWrap = styled.div`
  width:100%;
  height:100%;
  background:${({ theme }) => theme.color.primary};
  animation : ${FadeIn} 2s;
`

const Flexbox = styled.div`
  position:absolute;
  top:0px;
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index:0;
`

const Guitar = styled.h1`
  color:${({ theme }) => theme.color.sencondary} !important;
`

const ImageWrap = styled.div`
  width:100%;
  height:100%;
  filter:invert(17%) sepia(34%) saturate(0%) hue-rotate(188deg) brightness(76%) contrast(107%);
  opacity:0.5;
`

const Button = styled.button`
    border: none;
    width:100px;
    height:30px;
    font-size:18px;
    padding: 5px 10px;
    margin-top:20px;
    color: white;
    background-color: ${({ theme }) => theme.color.sencondary};
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    &:hover {
        cursor: pointer;
    }
`

export default function Home() {
  return (
    <Wrap>
      <HeadMeta/>
      <InnerWrap>
        <ImageWrap>
          <Image alt="guitar" fill={true} style={{objectFit:"cover"}}  src="/guitar.jpg"/>
        </ImageWrap>
        <Flexbox>
          <span>
            <h1>Play Your</h1>
            <Guitar>Guitar</Guitar>
          </span>
          <Link href="/metronome">
            <Button>시작하기</Button>
          </Link>
        </Flexbox>
      </InnerWrap>
    </Wrap>
  )
}
