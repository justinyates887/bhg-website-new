import React from 'react'
import { NavHeader, CommandsNav } from '../../../components'
import {Box, Container, Divider, Text } from '@chakra-ui/react'
import { getUserDetails } from '../../../utils/api'
const commands = require('../../../assets/commands.json')

export function SupportCommands({
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
                <Text align="center" color="white" fontSize="4xl">Support</Text>
                {Object.keys(commands["support"]).map(key => {
                return (
                    <Box align="left" key={commands.support[key].name} w="800px" rounded='20px' overflow="hidden" boxShadow="sm" bg='#2c2f33' m={3} p={5}>
                        <Text color="white" fontSize="2xl">{commands.support[key].name}</Text>
                        <Divider></Divider>
                        <Text color="gray.300" fontSize="lg">{commands.support[key].description}</Text>
                        <Text color="gray.500" fontSize="sm">{commands.support[key].usage}</Text>
                    </Box>
                )
                })}
        </Container>
        </div>
    )
}