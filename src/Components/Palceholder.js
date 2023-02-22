import React from 'react'
import { Card, CardImg, CardBody, Placeholder, PlaceholderButton } from 'reactstrap';

function Palceholder() {
    return (
        <div>
            <h1>Placeholder</h1>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
                    top
                    width="100%"
                />
                <CardBody>
                    <Placeholder
                        animation="wave"
                        tag={function noRefCheck() { }}
                    >
                        <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder
                        animation="wave"
                        tag={function noRefCheck() { }}
                    >
                        <Placeholder xs={12} />
                        <Placeholder xs={7} />
                    </Placeholder>
                    <PlaceholderButton xs={8} />
                </CardBody>
            </Card>
        </div>
    )
}

export default Palceholder