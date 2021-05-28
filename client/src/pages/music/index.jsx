import React from 'react'
import { Loader, NavHeader } from '../../components/index'
import { Link } from 'react-router-dom'
import { Box, Container, Text, Wrap } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { getUserDetails } from '../../utils/api'

export function Music(history){

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

    return (
        <>
        { loading ? (
            <Loader />
        ) : (
            <React.Fragment>
            <NavHeader user={user}/>           
                <Container maxW="container.xl">
                    <Box align="center" mt={10}>
                        <Text color="white" fontSize="5xl"><strong>More Music</strong></Text><br/>
                        <Text color="white" fontSize="2xl">
                            Sometimes big servers need more
                            <Wrap align="center" justify="center">
                                <strong><Text color="blue.500" fontSize="3xl">music</Text></strong> 
                                <Text>in their lives. Our secondary</Text>
                                <strong><Text color="blue.500" fontSize="3xl">music only</Text></strong>
                            </Wrap>
                            bot can satisfy all of your music needs.
                        </Text>
                        <Link 
                        to={"https://discord.com/oauth2/authorize?client_id=799358906479411281&scope=bot"}
                        target="_blank" 
                        ><Button colorScheme="blue" p={4} m={4} >Invite Now!</Button>
                        </Link>
                    </Box>
                </Container>
            </React.Fragment>
            )
        }
        </>
    )
}