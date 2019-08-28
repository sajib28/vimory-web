import React, { Component } from 'react';
import ModalCom from './modal/ModalCom';
import { Navbar, Nav, NavDropdown, Button, ButtonToolbar } from 'react-bootstrap';
class Templates extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }
    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        // const [modalShow, setModalShow] = React.useState(false);
        return (
            // Start Template Section
            <div>
                <section id="template" className="photo-area">
                    <div className="pic-overlay"></div>
                    <div className="container">
                        <div className="col-md-12">
                            <div className="title">
                                <div className="title-inner">
                                    <h2>Templates</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <ButtonToolbar>
                    <Button  onClick={() => this.setState({ addModalShow: true })}>
                        Launch vertically centered modal
                </Button>

                    <ModalCom
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                </ButtonToolbar>
            </div>
            // End Template Section
        );
    }
}

export default Templates;