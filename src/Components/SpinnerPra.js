import React from 'react'
import { Button, Spinner } from 'reactstrap';

function SpinnerPra() {
    return (
        <div>
            <h1>Spinner</h1>
            <Button
                color="primary"
                disabled
            >
                <Spinner size="sm">
                    Loading...
                </Spinner>
                <span>
                    {' '}Loading
                </span>
            </Button>
        </div>
    )
}

export default SpinnerPra