import Carousel from '@/components/Carousel/Carousel'
import styled from 'styled-components'
import sclaes_data from '@/components/Scales/scales.json'
import HeadMeta from "@/components/HeaderMeta"

interface Flet {
    code?:string;
    direction?:string;
    rootCode?:string;
}

const Wrap = styled.div`
    width:100%;
    margin:0 auto;

    & h1 {
        margin-left:10px;
    }
`

const CarouselWrap = styled.div`
    display:flex;
    width:100%;
    height:280px;
    justify-content:center;
    align-items:center;
    background:white;
    border-radius:30px;
`

const Fretboard = styled.div`
    disply:flex;
    flex-direction: row;
    flex-direction: column;
    height:220px;
    padding: 0 25px;
` 

const String = styled.div`
    display:flex;
    width:100%;
    height:14%;
    background:#333333;
    position:relative;
    align-items: center;

    &:after {
        content:"";
        position:absolute;
        width:100%;
        height:5px;
        background:#A59481;
        z-index:2;
    }
`

const Flet = styled.div<Flet>`
    width:4.6%;
    height:100%;
    border-right: 4px solid #958269;
    display:flex;
    justify-content:center;

    ${({direction}) => direction && `
    &:before { 
        content:''; 
        position:absolute; 
        width:20px; 
        height:20px; 
        border-radius:20px; 
        background:white;
        ${direction === 'down' ? "bottom:-10px;" : "bottom: 5px;" }
        z-index:1;
    }`}

    ${({code,rootCode}) => code && `
        &:after {
            text-align:center;
            content:'${code}'; 
            position:absolute; 
            width:22px; 
            height:22px; 
            border-radius:22px; 
            background:${code === rootCode ? "#ff8000" : "yellow"};
            bottom: 5px;
            z-index:3;
        }
    `}

    @media screen and (max-width: 625px) {
        font-size:12.5px;

        &:after {
            width:15px; 
            height:15px; 
            border-radius:15px; 
            bottom: 8px;
        }
    }

    
` //각각의 프렛
const OpenFlet = styled(Flet)<Flet>`
    background:white;
` //개방현
const OpenString = styled(String)`
    background:white;
    &:after{
        display:none;
    }
` //개방현 표시

const NumberFlet = styled(OpenFlet)<Flet>`
    border-right: 4px solid white;

    ${({code}) => code && `
        &:after {
            content:'${code}'; 
            background:none;z
        }
    `}
`

const CodeTitle = styled.h2`
    text-align:center;
    margin-top:10px;
`

const Scales = () => {
    return sclaes_data.map((scale,i) => {
        let values_of_object = Object.values(scale)
        let rootCode = ''
        return <Fretboard key={scale.code}>{values_of_object.map((string, i) => {
            if(typeof string === 'string'){
                rootCode = string
                return <CodeTitle key={string}>{string}</CodeTitle>
            }
            
            if(i === 1) {
                return <OpenString key={"string"+i}>{string.map((flet,i) => <NumberFlet key={"flet"+i} code={flet} />)}</OpenString>
            } else {
                return <String key={"string"+i}>{string.map((flet,i) => i === 0 ? <OpenFlet rootCode={rootCode} key={"flet"+i} code={flet} /> : <Flet rootCode={rootCode} key={"flet"+i} code={flet} />)}</String>
            }
        })}</Fretboard>
    })
}

export default function scales() {
    return (
        <Wrap>
            <HeadMeta title="Metronome" description='스케일을 배움으로써 즉흥 연주가 가능합니다 당신의 기타 실력을 올려보세요'/>
            <h1>Scales</h1>
            <CarouselWrap>
                <Carousel>
                    {Scales()}
                </Carousel>
            </CarouselWrap>

            {/* <h1>What Is Scales</h1>
            <CarouselWrap>
                <h3>
                    스케일이란 어떤 음을 기준으로 한 옥타브의 연속되는 음들의 배열입니다.
                </h3>
            </CarouselWrap>

            <h1>How To Use</h1>
            <CarouselWrap>
                <h3>
                    이 페이지에서는 각 스케일의 종류와 그 음들을 한 눈에 편하게 볼 수 있도록 만들어진 페이지입니다.
                </h3>
            </CarouselWrap> */}
        </Wrap>
    )
}