import React from 'react'
import { getUserDetails, getGuilds, getWarnings, deleteWarning } from '../../utils/api'
import { Loader, NavHeader } from '../../components/index'
import { Box, Container, Text, Divider, Wrap, Button } from '@chakra-ui/react'

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

    return (
        <>
        { loading ? (
            <Loader />
        ) : (
            <div>
                <NavHeader user={user} />
                <Container  maxW="container.xl" align="center">
                {warnings.map((obj) => {
                    return obj["warnings"].map((warning) => {
                        return (
                            <Box align="left" key={warning.wID} w="600px" rounded='20px' overflow="hidden" boxShadow="sm" bg='#2c2f33' m={3} p={5}>
                                <Wrap align="center">
                                    <Text color="white" fontSize="2xl">Offender:</Text> 
                                    <Text color="red.700" fontSize="2xl">{warning.target}</Text>
                                </Wrap>
                                <Divider orientation="horizontal" p={1}/>
                                <Text color="white" fontSize="xl">Reason: {warning.warnReason}</Text>
                                <Text color="gray.300" fontSize="lg">Author: {warning.author}</Text>
                                <Text color="gray.300" fontSize="sm">Date: {warning.timestamp}</Text>
                                <Button bg="red.500" color="white" onClick={() => { 
                                    deleteWarning(warning.wID, obj["_id"], match.params.id)
                                }} m={2}>Delete</Button>
                            </Box>
                        )
                    })
                })}
                </Container>
            </div>
            )
        }
        </>
    )
}