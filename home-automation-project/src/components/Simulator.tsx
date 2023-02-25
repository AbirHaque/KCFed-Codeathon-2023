import { useState } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { TutorialType } from '../types';
import CodePanel from './CodePanel';
import ReactMarkdown from 'react-markdown';

type SimulatorProps = {
    tutorial: TutorialType
}

export function Simulator({tutorial}: SimulatorProps){

    //const displayStyle = isExpanded ? 'visible' : 'hidden';
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
    const image: string = isCorrectAnswer ? tutorial.resultImage : tutorial.baseImage;

    function setCorrectAnswerHandler(isCorrectAnswerParam: boolean){
        setIsCorrectAnswer(isCorrectAnswerParam);
    }


    return <>
        <Container style={{height: '100%', paddingLeft: '30px'}}>
            <Row style={{height:'50%'}}>
                <Image src={image} style={{maxHeight: '100%', maxWidth: '100%'}}/>
            </Row>
            <Row style={{height: '50%'}}>
                <Col style={{height: '100%', overflowY: 'scroll', whiteSpace: 'pre-line', maxWidth: '50%'}}>
                    <ReactMarkdown>
                        {tutorial.tutorialDescription}
                    </ReactMarkdown>
                </Col>
                <Col style={{maxHeight: '100px'}}>
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