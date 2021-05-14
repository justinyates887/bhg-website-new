import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Divider, SimpleGrid, Text, Wrap } from '@chakra-ui/react'

export function Included({
    guilds
}){
    function isOwner(guild){
        if(guild.owner === true){
            return (
                <Text fontSize="lg" color="red.600">Owner</Text>
            )
        }
    }
    function guildIcon(guild){
        if(guild.icon){
            const string = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
            return(
                <Avatar src={string} size="md" name={guild.name} bg="gray.600"/>
            )
        } else{
            return (
                <Avatar src="" size="md" name={guild.name} bg="gray.600"/>
            )
        }
    }
    return (
            <Box p={3}>
                <SimpleGrid columns={ {sm: 1, md: 1, lg: 2} }>
                {guilds.map((guild) => (
                    <Box key={guild.id} w="500px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                        <Wrap align="center" p={2}>
                            {guildIcon(guild)}
                            <Text fontSize="2xl" p={3}>{ guild.name }</Text>
                            {isOwner(guild)}
                        </Wrap>
                        <Divider orientation="horizontal" />
                        <Wrap align="center">
                            <Box p={5}>
                                <Button bg="blue.500">
                                    <Link to={ `/dashboard/${guild.id}` }>Dashboard</Link>
                                </Button>
                            </Box>
                            <Box p={5}>
                                <Button bg="red.500">
                                    <Link to={ `/warnings/${guild.id}` }>Warnings</Link>
                                </Button>
                            </Box>
                        </Wrap>
                    </Box>
                ))}
                </SimpleGrid>
            </Box>
    )
}