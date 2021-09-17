/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from 'firebase'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'
import './SignUpScreen.css'

const SignUpScreen = ({ signupEmail, setSignupEmail, toggleRegister }) => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [showRegisterForm, setShowRegisterForm] = useState(toggleRegister)

  const handleRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        setSignupEmail('')
        const user = userCredential.user
        addDoc(collection(db, 'users'), {
          user: user.email,
          billing: 'Techieflix Basic',
          timestamp: serverTimestamp()
        })
      })
      .catch(error => {
        let errorMssg = error.message.toString().slice(22).split(')')[0]
        const splitStr = errorMssg.split('-')
        for (let i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
        }
        errorMssg = splitStr.join(' ')
        alertify.alert('Ohh Oh...', `Looks like a... ${errorMssg} case`, () => {})
      })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {})
      .catch(error => {
        let errorMssg = error.message.toString().slice(22).split(')')[0]
        const splitStr = errorMssg.split('-')
        for (let i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
        }
        errorMssg = splitStr.join(' ')
        alertify.alert('Ohh Oh...', `Looks like a... ${errorMssg} case`, () => {})
      })
  }

  return (
    <div className="signup-screen">
      {!showRegisterForm && (<form>
        <h1>Login</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button
          type="submit"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <div className="signup-screen-divider" />
        <h4>
          <span className="signup-screen-text-gray">New to Techieflix? </span>
          <span
            className="signup-screen-link"
            onClick={() => setShowRegisterForm(true)}
          >
            Sign up Now
          </span>.
        </h4>
      </form>)}
      {showRegisterForm && (<form>
        <h1>Sign Up</h1>
        <input
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          ref={emailRef}
          placeholder="Email"
          type="email"
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button
          type="submit"
          onClick={handleRegister}
        >
          Sign Up
        </button>
        <div className="signup-screen-divider" />
        <h4>
          <span className="signup-screen-text-gray">Have an account? </span>
          <span
            className="signup-screen-link"
            onClick={() => setShowRegisterForm(false)}
          >
            Let's Sign in
          </span>.
        </h4>
      </form>)}
    </div>
  )
}

export default SignUpScreen
