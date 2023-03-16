import Carousel from '@/components/Carousel/Carousel'
import styled from 'styled-components'

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
            background:none;
        }
    `}
` //

export default function scales() {
    return (
        <Wrap>
            <Carousel>
                <Fretboard>
                    <OpenString>
                        <NumberFlet code="0"/>
                        <NumberFlet code="1"/>
                        <NumberFlet code="2"/>
                        <NumberFlet code="3"/>
                        <NumberFlet code="4"/>
                        <NumberFlet code="5"/>
                        <NumberFlet code="6"/>
                        <NumberFlet code="7"/>
                        <NumberFlet code="8"/>
                        <NumberFlet code="9"/>
                        <NumberFlet code="10"/>
                        <NumberFlet code="11"/>
                        <NumberFlet code="12"/>
                        <NumberFlet code="13"/>
                        <NumberFlet code="14"/>
                        <NumberFlet code="15"/>
                        <NumberFlet code="16"/>
                        <NumberFlet code="17"/>
                        <NumberFlet code="18"/>
                        <NumberFlet code="19"/>
                        <NumberFlet code="20"/>
                        <NumberFlet code="21"/>
                    </OpenString>
                    <String>
                        <OpenFlet code="E"/>
                        <Flet code="F"/>
                        <Flet/>
                        <Flet code="G"/>
                        <Flet/>
                        <Flet code="A"/>
                        <Flet/>
                        <Flet code="B"/>
                        <Flet code="C"/>
                        <Flet/>
                        <Flet code="D"/>
                        <Flet/>
                        <Flet code="E"/>
                        <Flet code="F"/>
                        <Flet/>
                        <Flet code="G"/>
                        <Flet/>
                        <Flet code="A"/>
                        <Flet/>
                        <Flet code="B"/>
                        <Flet code="C"/>
                        <Flet/>
                    </String>
                    <String>
                        <OpenFlet code="B"/>
                        <Flet code="C"/>
                        <Flet/>
                        <Flet code="D"/>
                        <Flet/>
                        <Flet code="E"/>
                        <Flet code="F"/>
                        <Flet/>
                        <Flet code="G"/>
                        <Flet/>
                        <Flet code="A"/>
                        <Flet/>
                        <Flet direction="up" code="B"/>
                        <Flet code="C"/>
                        <Flet/>
                        <Flet code="D"/>
                        <Flet/>
                        <Flet code="E"/>
                        <Flet code="F"/>
                        <Flet/>
                        <Flet code="G"/>
                        <Flet/>
                    </String>
                    <String>
                        <OpenFlet/>
                        <Flet/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet direction="down"/>
                        <Flet/>
                        <Flet direction="down"/>
                    </String>
                    <String>
                        <OpenFlet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                    </String>
                    <String>
                        <OpenFlet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet direction="up"/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                    </String>
                    <String>
                        <OpenFlet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                        <Flet/>
                    </String>
                </Fretboard>
                <Fretboard></Fretboard>
            </Carousel>
        </Wrap>
    )
}