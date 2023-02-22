import React from 'react'
import { Progress } from 'reactstrap';

function ProgressBar() {
    return (
        <div>
            <h1>Progress Bar</h1>
            <Progress
                className="my-2"
                value="25"
            >
                25%
            </Progress>
            <Progress
                className="my-2"
                value={50}
            >
                1/2
            </Progress>
            <Progress
                className="my-2"
                value={75}
            >
                You‘re almost there!
            </Progress>
            <Progress
                className="my-2"
                color="success"
                value="100"
            >
                You did it!
            </Progress>
            <Progress
                className="my-2"
                multi
            >
                <Progress
                    bar
                    value="15"
                >
                    Meh
                </Progress>
                <Progress
                    bar
                    color="success"
                    value="30"
                >
                    Wow!
                </Progress>
                <Progress
                    bar
                    color="info"
                    value="25"
                >
                    Cool
                </Progress>
                <Progress
                    bar
                    color="warning"
                    value="20"
                >
                    20%
                </Progress>
                <Progress
                    bar
                    color="danger"
                    value="5"
                >
                    !!
                </Progress>
            </Progress>
        </div>
    )
}

export default ProgressBar