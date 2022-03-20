import React, { useState, useRef, useEffect } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { v4 as uuid } from "uuid"

import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

import AutoDismissAlert from "./components/AutoDismissAlert/AutoDismissAlert"
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import SignOut from "./components/auth/SignOut"
import ChangePassword from "./components/auth/ChangePassword"

import CreateSuggestion from './components/suggestions/create/CreateSuggestion'
import ShowSuggestion from './components/suggestions/show/ShowSuggestion'
import UpdateSuggestion from "./components/suggestions/update/UpdateSuggestion"
import Index from './components/suggestions/index/Index'

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  // executed by react, and after every component reEvaluation
  // would only run once when the app runs
  // handles side effects, arg 1 is function that should be executed
  // data fetching is ran as a side effect to avoid a loop
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    // if the user loggerd in is = 1 then well set the user to logged IN
    if (storedUserLoggedInInformation === '1') {
      // even without loginHandler being triggered
      // update the state
      setIsLoggedIn(true)
    }
    // arrary of dependencies
  }, []) // since our dependecies didnt change it is only loaded once hence user is still logged in

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // in applications on browser we see the key value pair
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // when logging out we will remove this item and set it to false
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts((msgAlerts) => [
      ...msgAlerts,
      { heading, message, variant, id },
    ])
  }

  const headerRef = useRef(null)
  const aboutRef = useRef(null)


  return (
    <Router>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className="container">
        {/* {!isLoggedIn && <SignIn onLogin={loginHandler}/>} */}
        {/* {isLoggedIn && <SignOut onLogout={logoutHandler}/>} */}
        <Routes>
          <Route
            path="/sign-up"
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path="/sign-in"
            isAuthenticated={isLoggedIn}
            element={!isLoggedIn && <SignIn msgAlert={msgAlert} setUser={setUser} onLogin={loginHandler} />}
          />
          <Route
            path="/sign-out"
            element={
              isLoggedIn &&
              <SignOut
                msgAlert={msgAlert}
                clearUser={clearUser}
                user={user}
                onLogout={logoutHandler}
              />
            }
          />
          <Route
            path="/change-password"
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />
          <Route
            path="/suggestions/"
            element={<CreateSuggestion msgAlert={msgAlert} user={user}/>}
          />
          <Route
            path="/suggestions/:id"
            element={<ShowSuggestion msgAlert={msgAlert} user={user}/>}
          />
          <Route
            path="/suggestions/:id/edit"
            element={<UpdateSuggestion msgAlert={msgAlert} user={user}/>}
          />
          <Route
            path="/suggestions/owner"
            element={<Index msgAlert={msgAlert} user={user}/>}
          />
        </Routes>
        <Header user={user} forwardRef={headerRef} />
        <Navbar headerRef={headerRef}/>
        <About />
        <Experience />
        <Portfolio user={user}/>
        {/* {user ? <About forwardRef={aboutRef} />: ''} */}
        {/* {user ? <Experience />: ''} */}
        {/* {user ? <Portfolio />: ''} */}
        <Contact />
      </main>
      <Footer />
    </Router>
  )
}

export default App