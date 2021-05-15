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

    console.log(warnings)
    return !loading && (
        <div>
            <NavHeader user={user} />
            <Container >
            {warnings.map((obj, i) => {
                const [warning] = obj.warnings
                return (
                    <Box key={i} w="600px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                        <Text>Offender: {warning.target}</Text>
                        <Text color="white">Author: {warning.author}</Text>
                        <Text>Reason: {warning.warnReason}</Text>
                        <Text>Date: {warning.timestamp}</Text>
                    </Box>
                )
            })}
            </Container>
        </div>
    )
}