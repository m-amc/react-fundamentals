// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const inputRef = React.useRef()

  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // getting input value using event.target.elements
    // onSubmitUsername(event.target.elements.usernameInput.value)

    // getting input value using ref
    // onSubmitUsername(inputRef.current.value)

    // using the username state
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  const handleUsername = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* <input type="text" id="usernameInput" /> */}
        <input type="text" ref={inputRef} onChange={handleChange} />
      </div>
      {error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )}
      <div style={{marginTop: 40, marginBottom: 40}}>
        <div>This is a "controlled" input using value prop</div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={handleUsername}
          value={username}
        />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
