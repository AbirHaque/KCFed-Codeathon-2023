import { useState } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { TutorialType } from '../types';
import CodePanel from './CodePanel';
import ReactMarkdown from 'react-markdown';

type SimulatorProps = {
    tutorial: TutorialType
}

export function Simulator({tutorial}: SimulatorProps){

    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
    const image: string = isCorrectAnswer ? tutorial.resultImage : tutorial.baseImage;

    function setCorrectAnswerHandler(isCorrectAnswerParam: boolean){
        setIsCorrectAnswer(isCorrectAnswerParam);
    }


    return <>
        <Container style={{height: '100%', paddingLeft: '30px'}}>
            <Row style={{height:'50%'}}>
                <Image src={image} style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain'}}/>
            </Row>
            <Row style={{height: '50%', paddingTop: '10px'}}>
                <Col style={{height: '100%', overflowY: 'scroll', whiteSpace: 'pre-line', maxWidth: '50%', paddingTop: '30px', border: '3px solid black', borderRadius: '10px'}}>
                    <ReactMarkdown>
                        {tutorial.tutorialDescription}
                    </ReactMarkdown>
                </Col>
                <Col style={{height: '100%', backgroundColor:"black", width: '50%', border: '3px solid black', borderRadius: '10px'}}>
                <CodePanel
                str_items={tutorial.codePanel.str_items}
                answers={tutorial.codePanel.answers} 
                setCorrectAnswerHandler={setCorrectAnswerHandler}>
                </CodePanel>
                </Col>
            </Row>
        </Container>
    </>
}