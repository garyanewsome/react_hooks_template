import React, { useState, useEffect } from 'react'

import axios from 'axios'
import styled from 'styled-components'

import './assets/css/index.css'

import Other from './components/Other'

const Template = styled.div`
  width: 1080px;
  height: 1920px;
  background-color: #FC682C;
  color: #000000;
`

const App = () => {
  const [{ data }, setData] = useState({ data: undefined })

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      console.log("ACK! Not ready for production! 😱")
    } else {
      axios.get("./api/sample-data.json").then(
        ({ data }) => {
          setData({ data })
        },
        error => {
          console.log("Failed to fetch sample data! 😢", error)
        }
      )
    }
  }, [])

  if (!data) {
    return <Template>Hello Template!</Template>
  }

  return (
    <Template>
      <h1 style={{ 'color': data.theme.mainTextColor }}>{data.data.name}</h1>
      <Other />
    </Template>
  )
}

export default App
