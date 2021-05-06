import React from 'react'
import { getUserDetails } from '../../utils/api'

export function Dashboard({
    history,
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            setLoading(false)
        }).catch((err) => {
            history.push('http://loclahost:8080/api/discord/auth')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}