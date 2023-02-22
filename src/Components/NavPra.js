import React from 'react'
import { Nav, NavItem, NavLink} from 'reactstrap';

function NavPra() {
    return (
        <div>
        <h1>Nav</h1>
            <Nav
            >
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Disabled Link
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default NavPra