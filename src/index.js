import { AppContainer } from 'react-hot-loader';
import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import style from './assets/stylesheets/main.scss'

const rootEl = document.getElementById('main')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
