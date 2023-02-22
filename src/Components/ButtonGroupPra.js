import React from 'react'
import { Button } from 'reactstrap'
import { ButtonGroup } from "reactstrap";
function ButtonGroupPra() {
    return (
        <div>
        <h1>ButtonGroup</h1>
            <ButtonGroup>
                <Button color="danger">
                    Left
                </Button>
                <Button color="warning">
                    Middle
                </Button>
                <Button color="success">
                    Right
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default ButtonGroupPra