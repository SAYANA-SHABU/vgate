import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RegisterForm from './component/RegisterForm'
import About from './component/About'
import Header from './component/Header'
import Layout from './component/Layout'
import Footer from './component/Footer'
import Login from './component/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Header />
              <Layout />
              <About />
              <Footer />
            </>
          }
        />

       <Route path="/l" element={<Login />} /> 
        <Route path="/r" element={<RegisterForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
