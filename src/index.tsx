import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from 'app/Root'
import * as serviceWorker from './serviceWorker'

/**
 * ITCSS Structure
 * https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
 */
import 'design/settings' // variables, colors, fonts etc
import 'design/tools' // globally used functions and mixins
import 'design/generic' // normalizing css, box sizing
import 'design/elements' // bare html elements, reset lists, anchors
import 'design/objects' // simple reusable containers, grids, global animations
import 'design/components' // components
import 'design/trumps' // utils, helpers, classes visibility, alt colors

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
