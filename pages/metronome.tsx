import styled from 'styled-components'
import Metronome from '@/components/Metronome/Metronome'

const Text = styled.div`
    display:flex;
    width:100%;
    height:50vh;
    justify-content:center;
    align-items:center;
    background:white;
    border-radius:30px;
`

export default function metronome() {
    return (
        <Text>
          <Metronome/>
        </Text>
    )
}