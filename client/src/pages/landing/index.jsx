import { Button } from '@chakra-ui/button'
import { Link } from 'react-router-dom'
import { Box, Container, Text, Wrap } from '@chakra-ui/layout'
import React from 'react'
import { NavHeader } from '../../components/index'
import { getUserDetails, getMyGuilds } from '../../utils/api'

export function Landing({ history }){
    
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [botGuilds, setBotGuilds] = React.useState([])

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            return getMyGuilds()
        }).then(({ data }) => {
            setBotGuilds(data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            history.push('/')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <React.Fragment>
            <NavHeader user={user}/>           
            <Container maxW="container.xl">
                <Box align="center" mt={10}>
                    <Text color="white" fontSize="6xl"><strong>THE BLUE HAIRED GIRL</strong></Text><br/>
                    <Text color="white" fontSize="4xl">Serving <strong>{botGuilds.length}</strong> servers</Text>
                    <br/>
                    <Text color="white" fontSize="2xl">
                        A Discord bot aimed at reducing bot clutter in servers by offering
                        <Wrap align="center" justify="center">
                            <strong><Text color="blue.500" fontSize="3xl">more</Text></strong> 
                            <Text>for</Text>
                            <strong><Text color="blue.500" fontSize="3xl">free</Text></strong>
                        </Wrap>
                    </Text>
                    <Link 
                    to={"https://discord.com/api/oauth2/authorize?client_id=794674548875460649&permissions=8&scope=bot"}
                    target="_blank" 
                    ><Button colorScheme="blue" p={4} m={4} >Invite Now!</Button>
                    </Link>
                </Box>
            </Container>
        </React.Fragment>
    )
}