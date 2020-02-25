import React, { Component } from 'react'

interface Props {}
interface State {}

export default class FooterPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div
                style={{
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '100px'
                }}
            >
                Footer page
            </div>
        )
    }
}
