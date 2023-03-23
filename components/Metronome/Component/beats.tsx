import styled from "styled-components"; 

const Beat = styled.td<{index:number, beatIndex:number}>`
    display: block;
    margin: 0 10px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: ${(props)=>props.index === props.beatIndex ? "rgb(143, 143, 143)" : "gainsboro"};
`

function BeatElements (props:{beat:number, beatIndex:number}) {
    let temp = Array(props.beat).fill(0)
    return <>
        {temp.map((e,i) => <Beat key={i} index={i} beatIndex={props.beatIndex}></Beat>)}
    </>
}

export default BeatElements