import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Box, Button, Divider, SimpleGrid, Text, Wrap } from '@chakra-ui/react'

export function FuckingHell({
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
        if(guild.icon && !guild.icon === null){
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
                <Box key={guild.id} w="500px" rounded='20px' overflow="hidden" boxShadow="sm" bg='#2c2f33' m={3}>
                    <Wrap align="center" p={2}>
                        {guildIcon(guild)}
                        <Text fontSize="2xl" p={3} color="white">{ guild.name }</Text>
                        {isOwner(guild)}
                    </Wrap>
                    <Divider orientation="horizontal" />
                    <Box p={5}>
                        <Button bg="#99AAB5" color="white">
                            <Link to={'https://discord.com/api/oauth2/authorize?client_id=794674548875460649&permissions=8&scope=bot'}
                            >Invite
                            </Link>
                        </Button>
                    </Box>
                </Box>
            ))}
            </SimpleGrid>
        </Box>
    )
}