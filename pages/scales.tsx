import Carousel from '@/components/Carousel/Carousel'
import styled from 'styled-components'

const Fretboard = styled.div`
    disply:flex;
    flex-direction: row;
    flex-direction: column;
` 

const String = styled.div`
    display:flex;
`

const Flet = styled.div`` //각각의 프렛
const FletNumber = styled.div`` //몇번째 프렛인지 표사
const OpenString = styled.div`` //개방현 표시

export default function scales() {
    return (
        <Carousel>
        </Carousel>
    )
}