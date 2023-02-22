import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

function ListGroupPra() {
    return (
        <div>
        <h1>List Group</h1>
            <ListGroup>
                <ListGroupItem
                    action
                    active
                    href="#"
                    tag="a"
                >
                    Cras justo odio
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Morbi leo risus
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Porta ac consectetur ac
                </ListGroupItem>
                <ListGroupItem
                    action
                    disabled
                    href="#"
                    tag="a"
                >
                    Vestibulum at eros
                </ListGroupItem>
            </ListGroup>
            <p />
            <h3>
                Buttons{' '}
            </h3>
            <ListGroup>
                <ListGroupItem
                    action
                    active
                    tag="button"
                >
                    Cras justo odio
                </ListGroupItem>
                <ListGroupItem
                    action
                    tag="button"
                >
                    Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem
                    action
                    tag="button"
                >
                    Morbi leo risus
                </ListGroupItem>
                <ListGroupItem
                    action
                    tag="button"
                >
                    Porta ac consectetur ac
                </ListGroupItem>
                <ListGroupItem
                    action
                    disabled
                    tag="button"
                >
                    Vestibulum at eros
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default ListGroupPra