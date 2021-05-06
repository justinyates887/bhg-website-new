import React from 'react'
import { getUserDetails } from '../../utils/api'

export function Menu({
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
            history.push('/api/discord/auth')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <h1>Menu</h1>
        </div>
    )
}