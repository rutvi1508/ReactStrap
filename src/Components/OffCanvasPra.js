import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';


function OffCanvasPra() {
    const [toggle, setToggle] = useState(true);
    function noRefCheck() {
        toggle ? setToggle(false) : setToggle(true)
    }
    return (
        <div>
            <Button
                color="primary"
                onClick={() => noRefCheck()}
            >
                Open
            </Button>

            <Offcanvas toggle={() => noRefCheck()}>
                <OffcanvasHeader toggle={() => noRefCheck()}>
                    Offcanvas
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        This is the Offcanvas body.
                    </strong>
                </OffcanvasBody>
            </Offcanvas>


        </div>
    )
}

export default OffCanvasPra