import React from 'react'
import { Button } from 'reactstrap'

function ButtonPra() {
    return (
        <div>
        <h1>Button</h1>
            <Button color="primary">
                primary
            </Button>
            {' '}
            <Button>
                secondary
            </Button>
            {' '}
            <Button color="success">
                success
            </Button>
            {' '}
            <Button color="info">
                info
            </Button>
            {' '}
            <Button color="warning">
                warning
            </Button>
            {' '}
            <Button color="danger">
                danger
            </Button>
            {' '}
            <Button color="link">
                link
            </Button>
        </div>
    )
}

export default ButtonPra