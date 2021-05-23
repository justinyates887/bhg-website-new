import React from 'react'
import {Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'

export function CommandsNav(props){

    return (
        <div>
            <Box mt={5}>
                <Center h="60px">
                    <Breadcrumb spacing="25px" align="center" fontSize="lg" separator="  ">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/fun">Fun</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/reddit">Reddit</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/steam">Steam</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/music">Music</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/server">Server</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/support">Support</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Center>
            </Box>
        </div>
    )
}