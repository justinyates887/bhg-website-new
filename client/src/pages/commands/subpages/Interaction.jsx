import React from 'react'
import { NavHeader, CommandsNav } from '../../../components'
import {Box, Container, Divider, Text } from '@chakra-ui/react'
import { getUserDetails } from '../../../utils/api'
const commands = require('../../../assets/commands.json')

export function InteractionCommands({
    history
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            return setLoading(false)
        }).catch((err) => {
            console.log(err)
            history.push('/')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <NavHeader user={user}/>
            <CommandsNav />
            <Container maxW="container.xl" align="center">
                <Text align="center" color="white" fontSize="4xl">Interaction</Text>
                {Object.keys(commands["interaction"]).map(key => {
                return (
                    <Box align="left" key={commands.interaction[key].name} w="800px" rounded='20px' overflow="hidden" boxShadow="sm" bg='#2c2f33' m={3} p={5}>
                        <Text color="white" fontSize="2xl">{commands.interaction[key].name}</Text>
                        <Divider></Divider>
                        <Text color="gray.300" fontSize="lg">{commands.interaction[key].description}</Text>
                        <Text color="gray.500" fontSize="sm">{commands.interaction[key].usage}</Text>
                    </Box>
                )
                })}
        </Container>
        </div>
    )
}