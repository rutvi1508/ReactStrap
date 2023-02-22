import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function PopoverPra() {
    const [popover, setPopover] = useState();
    function noRefCheckpop() {
        setPopover(true)
      /*   toggle ? setToggle(true) : setToggle(false) */
        console.log(popover)
    }

    return (
        <div>
        <h1>Popover</h1>
            <Button
                id="Popover1"
                type="button"
            >
                Launch Popover
            </Button>
            {popover &&
                <Popover
                    flip
                    target="Popover1"
                    popover={() => noRefCheckpop()}
                >
                    <PopoverHeader>
                        Popover Title
                    </PopoverHeader>
                    <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    </PopoverBody>
                </Popover>}

        </div>
    )
}

export default PopoverPra