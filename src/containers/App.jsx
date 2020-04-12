import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import MainContent from './MainContent'
import Footnote from './Footnote'

function App() {
    return (
        <div>
            <Navigation />
            <MainContent />
            <Footnote />
        </div>
    )
}

export default App
