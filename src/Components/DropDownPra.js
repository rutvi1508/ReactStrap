import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Styles/CarouselSliderCss.css'
function DropDownPra() {
    return (
        <>
        <h1 className='dropdown'>Drop Down</h1>
        <div className="d-flex p-5 justify-content-center">
            <UncontrolledDropdown
                className="me-2"
                direction="up"
            >
                <DropdownToggle
                    caret
                    color="primary"
                >
                    Dropup
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Header
                    </DropdownItem>
                    <DropdownItem disabled>
                        Action
                    </DropdownItem>
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
                className="me-2"
                direction="down"
            >
                <DropdownToggle
                    caret
                    color="primary"
                >
                    Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Header
                    </DropdownItem>
                    <DropdownItem disabled>
                        Action
                    </DropdownItem>
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
                className="me-2"
                direction="end"
            >
                <DropdownToggle
                    caret
                    color="primary"
                >
                    Dropend
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Header
                    </DropdownItem>
                    <DropdownItem disabled>
                        Action
                    </DropdownItem>
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
                className="me-2"
                direction="start"
            >
                <DropdownToggle
                    caret
                    color="primary"
                >
                    Dropstart
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Header
                    </DropdownItem>
                    <DropdownItem disabled>
                        Action
                    </DropdownItem>
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Another Action
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
        </>
    )
}

export default DropDownPra