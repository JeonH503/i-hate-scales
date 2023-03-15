import Carousel from '@/components/Carousel/Carousel'
import styled from 'styled-components'

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
    height:16.66%;
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

const Flet = styled.div<{direction?:string}>`
    width:4.6%;
    height:100%;
    border-right: 4px solid #958269;
    display:flex;
    justify-content:center;

    ${({direction}) => direction ? `
    &:before { 
        content:''; 
        position:absolute; 
        width:20px; 
        height:20px; 
        border-radius:20px; 
        background:white;
        ${direction === 'down' ? "bottom:-10px;" : "bottom: 8px;" }
        z-index:1;
    }` : ""}

    &:after {
        text-align:center;
        content:'E'; 
        position:absolute; 
        width:20px; 
        height:20px; 
        border-radius:20px; 
        background:yellow;
        bottom: 8px;
        z-index:3;
    }
` //각각의 프렛
const FletNumber = styled.div`` //몇번째 프렛인지 표사
const OpenString = styled.div`` //개방현 표시

export default function scales() {
    return (
        <Wrap>
            <Carousel>
                <Fretboard>
                    <String>
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