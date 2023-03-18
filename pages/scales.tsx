import {memo} from "react"
import Carousel from '@/components/Carousel/Carousel'
import styled from 'styled-components'
import sclaes_data from '@/components/Scales/scales.json'


interface Flet {
    code?:string;
    direction?:string;
}

const Wrap = styled.div`
    width:65%;
    margin:0 auto;
    height:35vh;
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
        ${direction === 'down' ? "bottom:-10px;" : "bottom: 8px;" }
        z-index:1;
    }`}

    ${({code}) => code && `
        &:after {
            text-align:center;
            content:'${code}'; 
            position:absolute; 
            width:22px; 
            height:22px; 
            border-radius:22px; 
            background:${code === 'C' ? "#ff8000" : "yellow"};
            bottom: 8px;
            z-index:3;
        }
    `}
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

const Scales = () => {
    return sclaes_data.map((scale,i) => {
        let values_of_object = Object.values(scale)
        return <Fretboard>{values_of_object.map((string, i) => {
            if(i === 0) {
                return <OpenString key={"string"+i}>{string.map((flet,i) => <NumberFlet key={"flet"+i} code={flet} />)}</OpenString>
            } else {
                return <String key={"string"+i}>{string.map((flet,i) => i === 0 ? <OpenFlet key={"flet"+i} code={flet} /> : <Flet key={"flet"+i} code={flet} />)}</String>
            }
        })}</Fretboard>
    })
}
// const MemoScale = memo(Scale)

export default function scales() {
    return (
        <Wrap>
            <Carousel>
                {Scales()}
            </Carousel>
        </Wrap>
    )
}