import logo from '../img/logo1.png'
import { Component } from "react";
import { Navbar,Container,Offcanvas,Nav} from "react-bootstrap";

class Navigation extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                {['sm'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="">
                    <Container fluid>
                        <Navbar.Brand href="#home"><img src={logo} className='logo image-fluid rounded-circle'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 text-color">
                            <Nav.Link href="#home" className="p-3">Home</Nav.Link>
                            <Nav.Link href="#work" className="p-3">Mywork</Nav.Link>
                            <Nav.Link href="#skills" className="p-3">Skills</Nav.Link>
                            <Nav.Link href="#contact"className="p-3">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                    </Navbar>
                ))}
            </>
        );
    }
}

export default Navigation