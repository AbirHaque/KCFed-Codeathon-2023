import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { TutorialType } from '../types';
import CodePanel from './CodePanel';

type SimulatorProps = {
    tutorial: TutorialType
}

export function Simulator({tutorial}: SimulatorProps){

    //const displayStyle = isExpanded ? 'visible' : 'hidden';
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

    return <>
        <Container style={{height: '100%', paddingLeft: '30px'}}>
            <Row style={{height:'50%'}}>
                <Col sm={4}>
                    first
                </Col>
            </Row>
            <Row style={{height: '50%'}}>
                <Col style={{height: '100%', overflowY: 'scroll'}}>
                    {tutorial.tutorialDescription}

                </Col>
                <Col style={{maxHeight: '100px'}}>
                <CodePanel
                str_items={tutorial.codePanel.str_items}
                answers={tutorial.codePanel.answers}
                setCorrectAnswerHandler={setIsCorrectAnswer}
                 >
                </CodePanel>
                </Col>
            </Row>
        </Container>
    </>
}