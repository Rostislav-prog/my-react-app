import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import reportWebVitals from './reportWebVitals'
import { Routes } from './components/Routes'
import Container from '@material-ui/core/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Routes />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
