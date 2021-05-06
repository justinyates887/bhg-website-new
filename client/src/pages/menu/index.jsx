import React from 'react'
import { MenuComponent } from '../../components'
import { getUserDetails, getGuilds } from '../../utils/api'

export function Menu({
    history,
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [guilds, setGuilds] = React.useState([])

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            setLoading(false)
            return getGuilds()
        }).then(({ data }) => {
            setGuilds(data)
        }).catch((err) => {
            history.push('/api/discord/auth')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <h1>Menu</h1>
            <MenuComponent guilds={ guilds }/>
        </div>
    )
}