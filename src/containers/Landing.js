import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = ({ userState: { authUser } }) => ({ authUser });

function Landing({ authUser }) {
  if (!authUser) {
    return <Redirect to='/login' />
  }
  return (
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
  )
}

export default connect(mapStateToProps)(Landing)