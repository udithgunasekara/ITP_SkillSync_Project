import React from 'react'

const UserTest = () => {
    sessionStorage.setItem('user', 'testuser')

    // Get username from session storage
    const username = sessionStorage.getItem('username')
    const user = sessionStorage.getItem('user')

    return (
        // Print username
        <div>
            <h1>Here log username: {username}</h1>
            <h3>Print user {user}</h3>
            </div>
        
    )
}

export default UserTest