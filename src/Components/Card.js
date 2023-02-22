import React from 'react'
import { Card, CardSubtitle, CardText, CardBody, CardTitle } from 'reactstrap'
import { Button } from 'reactstrap'
function Alert() {
    return (
        <div>
        <h1>Card</h1>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Alert