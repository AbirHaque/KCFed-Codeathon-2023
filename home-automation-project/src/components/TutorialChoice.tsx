import {ButtonGroup, Button, ToggleButton} from 'react-bootstrap';

type TutorialChoiceProps = {
    selectTutorialHandler: (tutorialChoice: number) => {}
}

export function TutorialChoice({selectTutorialHandler}: TutorialChoiceProps){
    const choices = [{name:'1', value:0}, {name:'2', value:1},
                     {name:'3', value:2},{name:'4', value:3},{name:'5', value:4}]

    return(<>
            <ButtonGroup className='d-flex'>
                {choices.map((choice, index) => (
                    <ToggleButton className=''
                                    key={index}
                                    id={`tutorial_${index}`}
                                    type="radio"
                                    variant="outline-success"
                                    name="radio"
                                    value={choice.value}
                                    checked={selectedTutorial === choice.value}
                                    onChange={(e) => selectTutorialHandler(parseInt(e.currentTarget.value))}>
                                    {choice.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>)
}