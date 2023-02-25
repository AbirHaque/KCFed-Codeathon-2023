import { useState } from 'react';
import { ButtonGroup, Button, ToggleButton} from 'react-bootstrap';
import { Sidebar } from './Sidebar';

export function HomePage(){

    const [selectedTutorial, setSelectedTutorial] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const choices = [{name:'1', value:0}, {name:'2', value:1},
                     {name:'3', value:2},{name:'4', value:3},{name:'5', value:4}]

    function toggleSidebar(){
        setIsExpanded(! isExpanded);
        }
                    

    

    return (
        <>
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
                                    onChange={(e) => setSelectedTutorial(parseInt(e.currentTarget.value))}>
                                    {choice.name}
                    </ToggleButton>
                ))}
        </ButtonGroup>

        
        
            <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        
        </>
    )
}