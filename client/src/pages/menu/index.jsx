import React from 'react'
import { MenuComponent } from '../../components'
import { getUserDetails, getGuilds } from '../../utils/api'
import { NavHeader } from '../../components/index'

export function Menu({
    history,
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [guilds, setGuilds] = React.useState({})

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            return getGuilds()
        }).then(({ data }) => {
            setGuilds(data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            history.push('/api/discord/auth')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <NavHeader />
            <h1>Menu</h1>
                <MenuComponent guilds={ guilds } />
        </div>
    )
}