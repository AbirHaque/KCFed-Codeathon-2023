import { useState } from 'react';
import { Nav, NavItem, NavLink} from 'react-bootstrap';
import { allTutorials } from '../tutorials';
import { TutorialType } from '../types';
import { Sidebar } from './Sidebar';

export function HomePage(){

    const [selectedTutorial, setSelectedTutorial] = useState<number>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const tutorials: TutorialType[] = allTutorials;

    const choices = [{name:'1', value:0}, {name:'2', value:1},
                     {name:'3', value:2},{name:'4', value:3},{name:'5', value:4}]

    function toggleSidebar(){
        setIsExpanded(! isExpanded);
        }
                    
    return (
        <>
        <Nav className="nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ '--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)' }}>
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

        <div>
            {tutorials.at(selectedTutorial)?.summaryDescription}
        </div>
            <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} tutorial={tutorials.at(selectedTutorial)}/>
        
        </>
    )
}