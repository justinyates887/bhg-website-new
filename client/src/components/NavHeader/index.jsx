import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    Box,
    Avatar,
    Wrap,
    SimpleGrid,
    Center,
    Text
  } from "@chakra-ui/react"

export function NavHeader({
    user
}){
    const isUser = (user) => {
        if(user){
            if(user.avatar){
                const string = `https://cdn.discordapp.com/avatars/${user.discordID}/${user.avatar}.png`
                return(
                    <BreadcrumbLink href="/menu">
                        <Wrap align="center">
                            <Avatar src={string} size="md" name={user.username} />
                            <Text fontSize="lg">
                                {user.username}#{user.discriminator}
                            </Text>
                        </Wrap>
                    </BreadcrumbLink>
                )
            } else if (!user.avatar || user.avatar === null){
                return(
                    <BreadcrumbLink href="/menu">
                        <Wrap align="center">
                            <Avatar src="" size="md" name={user.username} bg="grey.100"/>
                            <Text fontSize="lg">
                                {user.username}
                            </Text>
                        </Wrap>
                    </BreadcrumbLink>
                )
            }
        }else if(!user || user === undefined) {
            return (<BreadcrumbLink href="http://localhost:8080/api/auth/discord">Login</BreadcrumbLink>)
        }
    }
    return(
            <Box bg="blue.600" w="100%" color="white">
                <SimpleGrid columns={3}>
                    <Box>
                        <Breadcrumb align="left">
                            <BreadcrumbLink href="/">
                                <Image src="../assets/images/BHG.png" alt="brand-logo" borderRadius="full" boxSize="60px" />
                            </BreadcrumbLink>
                        </Breadcrumb>
                    </Box>
                    <Box>
                        <Center h="60px">
                            <Breadcrumb spacing="16px" align="center" fontSize="lg" separator="   ">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/"><i class="fas fa-home"></i>  Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/commands/admin"><i class="fas fa-terminal"></i>  Commands</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/support"><i class="fas fa-headset"></i>  Support</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/music"> <i class="fas fa-music"></i>  Music</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Center>
                    </Box>
                    <Box align="right" p={2}>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                    {isUser(user)}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                </SimpleGrid>
            </Box>
    )
}