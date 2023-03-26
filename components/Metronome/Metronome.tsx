import { useState,useRef,useEffect,memo,ChangeEvent,KeyboardEvent } from "react" 
import BeatCell from "./Component/BeatCell";
import Beats from "./Component/beats"
import styled from "styled-components"; 

const MemoBeatElements = memo(Beats)

const MetronomeWrap = styled.div.attrs(props => ({
    tabindex:0
}))`
    width:65%;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 10px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    & {
        text-align: center;
    }
    & p {
        margin:0px;
    }
`

const BpmDisplay = styled.h3`
    width: 100%;
`

const BeatDisplay = styled.table`
    width: 100%;

    & tbody tr {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

const BpmSliderWrap = styled.div`
    margin: 10px;
    display: flex;

    & input {
        width: 100%;
    }

    & button {
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }
`

const Button = styled.button`
    border: none;
    padding: 5px 10px;
    line-height:22px;
    color: white;
    background-color: ${({ theme }) => theme.color.sencondary};
    border-radius: 4px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    &:hover {
        cursor: pointer;
    }
`

const MetronomeButton = styled(Button)<{state:boolean}>`
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 80px;
    transition: all 0.2s;
    background:${({state,theme})=>state ? 'rgb(219, 68, 55)' : theme.color.sencondary};
`

const BeatWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 10px 0;

    & p {
        margin: 0 10px;
    }
`


function Metronome() {
    const [bpm, setBpm] = useState(90);
    const [beat, setBeat] = useState(4);
    const [beatIndex, setBeatIndex] = useState(-1);
    const [state, setState] = useState(false);
    const [buffers, setBuffers] = useState<AudioBuffer[]>([]);
    const [audioContext, setAudioContext] = useState<BaseAudioContext>();
    const [soundInterval, setSoundInterval] = useState<number>();

    let nextNoteTime = 0;

    const bpmChangeEvent = (value:number) => {
        if(bpm === 300 || bpm === 20)
            return false;

        setBpm(bpm + value)   
    }

    const buttonClickEvent = () => {
        setState(!state)
    }

    const beatControl = (type:number) => {
        if(type && beat !== 7)
            setBeat(beat + 1)
        else if(!type && beat !== 1)
            setBeat(beat - 1)
    }

    const buildMainSound = () => {
        if(audioContext !== undefined){
            const gain = new GainNode(audioContext, {gain: 0.25});

            gain.connect(audioContext.destination);

            return gain
        }
    }

    const buildBeatCells = (outputNode:GainNode) => {
        const beatCells = []

        beatCells[0] = new BeatCell(outputNode, buffers[0]);
        beatCells[1] = new BeatCell(outputNode, buffers[1]);
        
        return beatCells
    }

    const decodeAudioFiles = async () => {
        let audioContext = new AudioContext();
        let response
        let buffers = []

        response = await fetch('/samples/drum-hh-01.mp3')
        let firstBuffer = await response.arrayBuffer()
        response = await fetch('/samples/drum-oh-01.mp3')
        let secondBuffer = await response.arrayBuffer()

        buffers[0] = await audioContext.decodeAudioData(firstBuffer)
        buffers[1] = await audioContext.decodeAudioData(secondBuffer)

        setBuffers(buffers)
    }
    const changeBpm = (e:ChangeEvent<HTMLInputElement>) => {
        setBpm(parseInt(e.target.value))
    }

    const addNewSchedule = (index:number, beatCells:BeatCell[]) => {
        let beatPerSec = 60 / bpm;

        if(index)
            beatCells[0].addSchedule(nextNoteTime);
        else 
            beatCells[1].addSchedule(nextNoteTime);

        nextNoteTime += beatPerSec;
    }

    useEffect(() => {
        decodeAudioFiles()
        setAudioContext(new AudioContext())
    },[])


    const beatInterval = (beatCells:BeatCell[]) => {
        let interval = 100;
        let index = 0;
        console.log("create Interval");
        
        return window.setInterval(() => {
            if(audioContext !== undefined) {
                if(!nextNoteTime) //start할 시 currentTime이 
                                //자동 업데이트 되어 같은값으로 업데이트 필요
                    nextNoteTime = audioContext.currentTime;
                
                while(nextNoteTime < audioContext.currentTime + 0.1) {
                    setBeatIndex(index);
                    addNewSchedule(index, beatCells);
                    index = (index + 1) % beat;
                }
            }
        },interval) 
    }

    const keyDownEvent = (e:KeyboardEvent) => {
        if(e.key === 'ArrowLeft') {
            bpmChangeEvent(-1)
        } else if(e.key === 'ArrowRight') {
            bpmChangeEvent(1)
        }
    }

    useEffect(() => {
        if(state && soundInterval) {
            clearInterval(soundInterval);
        }
        
        let temp = setTimeout(() => {
            if(state) {
                const main = buildMainSound();

                if(main !== undefined) {
                    const beatCells = buildBeatCells(main);
                    setSoundInterval(beatInterval(beatCells));
                }
            } else {
                clearInterval(soundInterval)
            }
        },200)

        return () => {
            clearTimeout(temp)
        }
    },[state,bpm,beat])

    useEffect(() => {
        return () => clearInterval(soundInterval)
    },[soundInterval])

    return(
        <MetronomeWrap tabIndex={0} onKeyDown={keyDownEvent}>
            <BpmDisplay>{bpm} BPM</BpmDisplay>
            <BeatDisplay>
                <tbody>
                    <tr>
                        <MemoBeatElements beat={beat} beatIndex={beatIndex}/>
                    </tr>
                </tbody>
            </BeatDisplay>
            <BpmSliderWrap>
                <Button onClick={()=>{bpmChangeEvent(-1)}}>-</Button>
                <input name="bpm" onChange={changeBpm} type="range" min="20" max="300" value={bpm}/>
                <Button onClick={()=>{bpmChangeEvent(1)}}>+</Button>
            </BpmSliderWrap>

            <MetronomeButton onClick={buttonClickEvent} state={state} >{state ? 'STOP' : 'START'}</MetronomeButton>
            {/* rgb(219, 68, 55); */}

            <p>BEAT</p>
            <BeatWrap>
                <Button onClick={()=>{beatControl(0)}}>&#60;</Button>
                <p>{beat}</p>
                <Button onClick={()=>{beatControl(1)}}>&#62;</Button>
            </BeatWrap>
        </MetronomeWrap>
    )
}

export default Metronome
