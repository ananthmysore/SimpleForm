import React from 'react'
import UserContactForm from '../Forms/UserContactForm'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const globalStyles = css`
  body {
    font-family: sans-serif;
  }
`

const App = () => (
  <React.Fragment>
      <Global styles={globalStyles} />
      <UserContactForm />
  </React.Fragment>
)

export default App