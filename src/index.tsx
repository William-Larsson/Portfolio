import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import Home from './pages/Home'
import Navigation from './containers/Navigation'
import Footnote from './components/Footnote'
import About from './pages/About'
import Contact from './pages/Contact'
import './global/styles.scss'

ReactDOM.render(
    <React.StrictMode>
        <Navigation />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
        <Footnote />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
