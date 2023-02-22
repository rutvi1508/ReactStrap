import React, { useState } from 'react'
import { Button, Fade } from 'reactstrap';

function ToggleFade() {
    const [toggle, setToggle] = useState(true);
    function noRefCheck() {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div>
            <h1>Toggle Fade</h1>
            <Button
                color="primary"
                onClick={() => noRefCheck()}
            >
                Toggle Fade
            </Button>
            {toggle && <Fade
                className="mt-3"
                tag="h5"

            >
                This content will fade in and out as the button is pressed
            </Fade>}

        </div>
    )
}

export default ToggleFade