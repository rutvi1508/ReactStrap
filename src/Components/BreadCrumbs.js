import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

function BreadCrumbs() {
    return (
        <div>
        <h1>Breadcrumb</h1>
            <Breadcrumb>
                <BreadcrumbItem active>
                    Home
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Library
                </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Library
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Data
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumbs