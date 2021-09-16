import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebase'
import { login, logout, selectUser } from 'features/userSlice'
import './App.css'

const HomeScreen = lazy(() => import('screens/HomeScreen/HomeScreen'))
const LoginScreen = lazy(() => import('screens/LoginScreen/LoginScreen'))
const ProfileScreen = lazy(() => import('screens/ProfileScreen/ProfileScreen'))

function App () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          {!user
            ? (
            <LoginScreen />
              )
            : (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
            </Switch>
              )}
        </Router>
      </Suspense>
    </div>
  )
}

export default App
