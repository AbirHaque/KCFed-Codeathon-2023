import {Button} from 'react-bootstrap';

type SidebarProps = {
    isExpanded: boolean,
    toggleSidebar: () => void
}

export function Sidebar({isExpanded, toggleSidebar}: SidebarProps) {

    const width = isExpanded ? '100%' : '3%';

    return (<>
    <div id="sidebar" style={{height: '100%',
                                    top: 0,
                                    right: 0,
                                    width: width,
                                    position: 'fixed',
                                    zIndex: 1,
                                    backgroundColor: 'black',
                                    overflowX: 'hidden',
                                    transition: '0.5s',
                                    paddingTop: '60px'}}>
        <Button style={{position: 'absolute', top:'50%'}} onClick={() => (toggleSidebar())}> {isExpanded ? '>' : '<'} </Button>
    </div>
    </>

    )
}