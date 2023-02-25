import { useState } from 'react';
import { ButtonGroup, Button, Card, Nav, NavItem, NavLink, ToggleButton} from 'react-bootstrap';
import { TutorialType } from '../types';
import { Sidebar } from './Sidebar';


export function HomePage(){

    const [selectedTutorial, setSelectedTutorial] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const tutorials: TutorialType[] = [{baseImage: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg',
                                        resultImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
                                        codePanel: {str_items: '<div id="l1">ac_on=False #Initialize AC settings</div>\n<div id="l2">outside_temp=get_initial_temp() #Gets temperature at 12:00AM</div>\n<div id="l3">for time in range(0,24*60,<input id="q1" placeholder="Integer"></input>):</div>\n<div id="l4">\tif <input id="q2" placeholder="Variable name"></input>>90:</div>\n<div id="l5">\t\tac_on=True</div>\n<div id="l6">\telse:</div>\n<div id="l7">\t\tac_on=False</div>',
                                                    answers: '60\noutside_temp'},
                                        summaryDescription: 'This is a summary',
                                        tutorialDescription: 'This is the tutorial'}]

    const choices = [{name:'1', value:0}, {name:'2', value:1},
                     {name:'3', value:2},{name:'4', value:3},{name:'5', value:4}]

    function toggleSidebar(){
        setIsExpanded(! isExpanded);
        }
                    
    return (
        <>


        <Nav className="nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ '--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)',  marginTop: '2%', marginLeft: '3%', marginRight: '3%' }}>
        {choices.map((choice, index) => (
            <NavItem key={index}>
            <NavLink className="nav-link rounded-5"
                    id={`tutorial_${index}`}
                    active={selectedTutorial === choice.value}
                    onClick={() => setSelectedTutorial(choice.value)}>
                {choice.name}
            </NavLink>
            </NavItem>
        ))}
        </Nav>

        <div style={{marginTop: '5%', marginLeft: '4%', marginRight: '4%'}}>

            <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                {tutorials.at(selectedTutorial)?.summaryDescription}
                </Card.Text>
                <Button variant="primary">Start</Button>
            </Card.Body>
            </Card>

            
        </div>
            <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} tutorial={tutorials.at(selectedTutorial)}/>
        
        </>
    )
}