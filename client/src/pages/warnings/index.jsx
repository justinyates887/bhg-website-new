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
            <Container  maxW="container.xl" align="center">
            {warnings.map((obj, i) => {
                const [warning] = obj.warnings
                return (
                    <Box align="left" key={i} w="600px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3} p={5}>
                        <Text color="red.700" fontSize="2xl">Offender: {warning.target}</Text>
                        <Text color="white" fontSize="xl">Author: {warning.author}</Text>
                        <Text color="blue.700" fontSize="lg">Reason: {warning.warnReason}</Text>
                        <Text color="white">Date: {warning.timestamp}</Text>
                    </Box>
                )
            })}
            </Container>
        </div>
    )
}