import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/obras">Obras de Arte</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/obras">Obras</Nav.Link>
                        <Nav.Link href="/obras/tipos">Tipos de Obra</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho