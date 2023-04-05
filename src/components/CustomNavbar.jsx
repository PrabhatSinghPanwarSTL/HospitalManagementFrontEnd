import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth/indexD';

function CustomNavbar() {

    let navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);


    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    }, [login])


    const toggle = () => setIsOpen(!isOpen);


    const logout = () => {
        doLogout(() => {
            //logged out
            setLogin(false)
            navigate("/")
        })
    }

     const booking = () => {
        navigate("/patient/apointments")
     }

    return (
        <div>
            <Navbar color="dark"
                dark
                expand="md"
                fixed="">
                <NavbarBrand href="/">Apointment System</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/doctorslist">Doctors List</NavLink>
                        </NavItem>
                    </Nav>
                    
                    <Nav navbar>

                        {
                            login && (
                                <>
                                    <NavItem>
                                        <NavLink onClick={logout}>
                                            Logout
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink onClick={booking}>
                                            {user.email+" | "}
                                            {(user.id) 
                                             ? " id : "+user.id
                                             : " id : "+user.did}
                                        </NavLink>
                                    </NavItem>
                                </>
                            )
                        }

                        {
                            !login && (

                                <>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            SignUp
                                        </DropdownToggle>
                                        <DropdownMenu end>
                                            <DropdownItem href="/SignupAsD">Doctor</DropdownItem>
                                            <DropdownItem href="/SignupAsP">Patient</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            LogIn
                                        </DropdownToggle>
                                        <DropdownMenu end>
                                            <DropdownItem href="/LoginAsD">Doctor</DropdownItem>
                                            <DropdownItem href="/LoginAsP">Patient</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                </>

                            )
                        }
                    
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;