import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    Box,
    Avatar
  } from "@chakra-ui/react"

export function NavHeader({
    user
}){
    const isUser = (user) => {
        if(user){
            if(user.avatar){
                const string = `https://cdn.discordapp.com/avatars/${user.discordID}/${user.avatar}.png`
                console.log(string)
                return(
                    <BreadcrumbLink href="/menu">
                        <Avatar src={string} size="md" name={user.username} />
                        {user.username}#{user.discriminator}
                    </BreadcrumbLink>
                )
            } else if (!user.avatar || user.avatar === null){
                return(
                    <BreadcrumbLink href="/menu">
                        <Avatar src="" size="md" name={user.username} bg="grey.100"/>
                        {user.username}
                    </BreadcrumbLink>
                )
            }
        }else if(!user || user === undefined) {
            return (<BreadcrumbLink href="http://localhost:8080/api/auth/discord">Login</BreadcrumbLink>)
        }
    }
    return(
        <React.Fragment>
            <Box bg="blue" w="100%" color="white">
                <Breadcrumb>
                    <BreadcrumbLink href="/">
                        <Image src="../assets/images/BHG.png" alt="brand-logo" borderRadius="full" boxSize="40px" />
                    </BreadcrumbLink>
                </Breadcrumb>
                <Breadcrumb spacing="8px" className="center" fontSize="lg">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/commands">Commands</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/support">Support</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/faq">FAQ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/music">Music</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        {isUser(user)}
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </React.Fragment>
    )
}