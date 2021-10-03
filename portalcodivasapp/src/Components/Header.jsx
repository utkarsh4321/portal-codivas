import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    
    return (
        <header className="header">
            <div className="search">
                <InputGroup className="mx-3">
                    <FormControl
                    aria-label="Search"
                    aria-describedby="search-input"
                    />
                    <InputGroup.Text id="search-input"><FontAwesomeIcon icon={["fa", "search"]} /></InputGroup.Text>
                </InputGroup>
            </div>
            <div className="user">
                <div className="notifications">
                    <FontAwesomeIcon icon={["fa", "bell"]} />
                    </div>
                <div className="messages">
                    <FontAwesomeIcon icon={["fa", "paper-plane"]} />
                    </div>
                <div className="profile">
                    <span className="name">Name</span>
                    <FontAwesomeIcon icon={["fa", "user-alt"]} />
                </div>
            </div>
        </header>
    )
}

export default Header;