import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(<App />, document.querySelector('#root'))
