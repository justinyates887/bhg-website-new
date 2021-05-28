import React from 'react'
import { Loader, NavHeader } from '../../components/index'
import { Link } from 'react-router-dom'
import { Box, Container, Text, Wrap } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { getUserDetails } from '../../utils/api'

export function Support(history){

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
                        <Text color="white" fontSize="5xl"><strong>Need Help?</strong></Text><br/>
                        <Text color="white" fontSize="2xl">
                            Join our
                            <Wrap align="center" justify="center">
                                <strong><Text color="blue.500" fontSize="3xl">support server</Text></strong> 
                                <Text>to talk to the devs, make suggestions, and be</Text>
                                <strong><Text color="blue.500" fontSize="3xl">informed</Text></strong>
                            </Wrap>
                            about all of the updates.
                        </Text>
                        <Link 
                        to={"https://discord.gg/FqbRWkgfcT"}
                        target="_blank" 
                        ><Button colorScheme="blue" p={4} m={4} >Join The Server</Button>
                        </Link>
                    </Box>
                </Container>
            </React.Fragment>
            )
        }
        </>
    )
}