import styled from 'styled-components'
import Metronome from '@/components/Metronome/Metronome'

const Wrap = styled.div`
    width:65%;
    margin:0 auto;
    height:35vh;
`

const MetronomeWrap = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    background:white;
    border-radius:30px;
`

export default function metronome() {
    return (
        <Wrap>
            <h1>Metronome</h1>
            <MetronomeWrap>
                <Metronome/>
            </MetronomeWrap>
        </Wrap>
    )
}