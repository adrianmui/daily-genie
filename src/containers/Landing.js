import React from 'react'
import { Redirect } from 'react-router-dom';
import SessionContext from 'components/SessionContext';

function Landing() {
  return (
    <SessionContext.Consumer>
      {authUser => authUser ? (
        <div className="App">
          <header className="App-header">
            <p>
              Welcome {authUser.displayName}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        ) : (
        <Redirect to='/login' />
      )}
    </SessionContext.Consumer>
    
  )
}

export default Landing