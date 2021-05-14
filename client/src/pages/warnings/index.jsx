import React from 'react'
import { getUserDetails, getGuilds, getWarnings } from '../../utils/api'
import { NavHeader } from '../../components/index'
import { Box, Container, Text } from '@chakra-ui/layout'

export function Warnings({
    guildID,
    history,
    match
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [guilds, setGuilds] = React.useState({})
    const [warnings, setWarnings] = React.useState([])

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            return getGuilds()
        }).then(({ data }) => {
            setGuilds(data)
            return getWarnings(match.params.id)
        }).then(({ data }) => {
            setWarnings(data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            history.push('/api/discord/auth')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <NavHeader user={user} />
            {warnings.map(warning => {
                return (
                    <Box>
                        <Text color="white">Author: {warning.key("author")}</Text>
                        <Text>Reason: {warning.key("warnReason")}</Text>
                    </Box>
                )
            })}
        </div>
    )
}