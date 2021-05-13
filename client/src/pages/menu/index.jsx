import React from 'react'
import { MenuComponent } from '../../components'
import { getUserDetails, getGuilds } from '../../utils/api'
import { NavHeader } from '../../components/index'
import { Container, Text } from '@chakra-ui/layout'

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
            <NavHeader user={user}/>
            <Container maxW="container.xl">
                <Text fontSize="5xl" color="white" align="center">{user.username}'s Menu</Text>
                <MenuComponent guilds={ guilds } />
            </Container>
        </div>
    )
}