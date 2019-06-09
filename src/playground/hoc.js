//HIgher ORder Componeent (HOC) - A componenet (HOC) that renders another componeent
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponeent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info. Please don't share</p>}
        <WrappedComponeent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponeent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponeent {...props}/> : <p>Sorry you are not logged in. Please sign in to access this info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(AdminInfo)

ReactDOM.render(<AuthInfo isAdmin={false} isAuthenticated = {true} info="Cool Stuff"/>,document.getElementById('app'))