import { Fragment, useState } from 'react'
import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import GlobalStyles from './GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default App
