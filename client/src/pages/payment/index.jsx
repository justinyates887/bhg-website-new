import React from 'react'
import { getUserDetails } from '../../utils/api'
import { NavHeader } from '../../components/index'

export function Payment({
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
            <NavHeader />
            <h1>Payment</h1>
        </div>
    )
}