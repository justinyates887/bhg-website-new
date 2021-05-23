import React from 'react'
import {Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'

export function CommandsNav(props){

    return (
        <div>
            <Box mt={5}>
                <Center h="60px">
                    <Breadcrumb spacing="25px" align="center" fontSize="lg" separator="           ">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/admin" color="gray.300">Admin</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/fun" color="gray.300">Fun</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/economy" color="gray.300">Economy</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/music" color="gray.300">Music</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/setup" color="gray.300">Setup</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/interaction" color="gray.300">Interaction</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/commands/support" color="gray.300">Support</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Center>
            </Box>
        </div>
    )
}