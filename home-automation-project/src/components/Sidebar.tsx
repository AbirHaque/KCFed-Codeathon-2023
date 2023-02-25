import {Button} from 'react-bootstrap';
import { TutorialType } from '../types';
import { Simulator } from './Simulator';

type SidebarProps = {
    isExpanded: boolean,
    toggleSidebar: () => void,
    tutorial: TutorialType
}

export function Sidebar({isExpanded, toggleSidebar, tutorial}: SidebarProps) {

    const width = isExpanded ? '100%' : '3%';

    return (<>
    <div id="sidebar" style={{height: '100%',
                                    top: 0,
                                    right: 0,
                                    width: width,
                                    position: 'fixed',
                                    zIndex: 1,
                                    backgroundColor: 'white',
                                    overflowX: 'hidden',
                                    transition: '0.5s',
                                    }}>
        {isExpanded ? <Simulator tutorial={tutorial}/> : <></> }
        <Button style={{position: 'absolute', top:'50%'}} onClick={() => (toggleSidebar())}> {isExpanded ? '>' : '<'} </Button>
    </div>
    </>

    )
}