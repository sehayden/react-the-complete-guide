import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const LoggedIn = () => {
    //const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
        setUser({
            name: 'Ha',
            email: '@l'
        })
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser({ name: '', email: '' })

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
            <div>Your name is {user.name}</div>
            <div>Your name is {user.email}</div>
        </div>
    )
}