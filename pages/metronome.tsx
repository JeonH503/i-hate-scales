import styled from 'styled-components'
import Metronome from '@/components/Metronome/Metronome'
import Head from 'next/head'

const Wrap = styled.div`
    width:100%;
    margin:0 auto;
`

const MetronomeWrap = styled.div`
    display:flex;
    width:100%;
    height:100%;
    padding:50px 0;
    justify-content:center;
    align-items:center;
    background:white;
    border-radius:30px;
`

export default function metronome() {
    return (
        <Wrap>
            <Head>
                <title>Metronome</title>
            </Head>
            <h1>Metronome</h1>
            <MetronomeWrap>
                <Metronome/>
            </MetronomeWrap>
            
        
            {/* <h1>What is Metronome</h1>
            <MetronomeWrap>
                <p>
                    메트로놈은 일정한 시간 간격으로 소리를 낸다 소리를 내주어 정확한 박자에 연주를 할 수 있도록 도와주는 기능입니다
                    BPM은 1분에 몇 비트가 재생되는지를 나타내며 60BPM은 초당 1비트 를 의미합니다.
                </p>
            </MetronomeWrap>

            <h1>How To Use</h1>
            <MetronomeWrap>
                <p>
                    이 페이지에서는 메트로놈의 BPM을 조절 할 수 있으며
                    박자를 1/4 박자 부터 7/4 박자 까지 변경이 가능합니다.
                </p>
            </MetronomeWrap> */}
        </Wrap>
    )
}