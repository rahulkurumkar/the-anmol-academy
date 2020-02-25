import React from 'react'
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

export const App: React.FunctionComponent = () => {
    return (
        <>
            <Header label="Header">
                <div>Rahul</div>
            </Header>
            <MainPage />
        </>
    )
}
