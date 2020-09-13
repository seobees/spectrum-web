import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from 'app/Root'
import * as serviceWorker from './serviceWorker'

// eslint-disable-next-line import/no-internal-modules
import 'design/common.scss'

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
