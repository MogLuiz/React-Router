import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'


const Content = props => (
    <content className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    </content>
)

export default Content