import React from 'react'
import { NavHeader, CommandsNav } from '../../../components'
import {Box, Divider, Text } from '@chakra-ui/react'
const commands = require('../../../assets/commands.json')

export function SetupCommands({props}){

    function getSetupCommands(){
        Object.keys(commands["setup"]).forEach(key => {
            let value = commands.setup[key]
            let name = value.name
            let description = value.description
            let usage = value.usage

            return (
                <Box align="left" key={name} w="600px" rounded='20px' overflow="hidden" boxShadow="sm" bg='#2c2f33' m={3} p={5}>
                    <Text color="white" fontSize="2xl">{name}</Text>
                    <Divider></Divider>
                    <Text color="gray.300" fontSize="lg">{description}</Text>
                    <Text color="gray.300" fontSize="sm">{usage}</Text>
                </Box>
            )
        })
    }

    return (
        <div>
            <NavHeader />
            <CommandsNav />
            <Text align="center" color="white" fontSize="4xl">Setup</Text>
            {getSetupCommands()}

        </div>
    )
}