import React from 'react'
import { Formik } from 'formik'
import { Button, HStack, Tag, TagLabel, TagCloseButton, Input, Text } from '@chakra-ui/react'

export function BlacklistDashboard({
    updateBlacklist,
    blacklist
}){
    return(
        
        <React.Fragment>
            <Text fontSize="xl" color="white" p={3} ml={3}>Blacklisted Words</Text>
            <Formik
                    initialValues={ blacklist }
                    onSubmit={(values) => { 
                        updateBlacklist(values.word)
                    }}
                >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                <HStack spacing={4} ml={4} mr={4}>
                                    {blacklist.map((word) => (
                                        <Tag value={word} key={word} size={"md"} borderRadius="full" variant="solid" colorScheme="blue">
                                            <TagLabel>{word}</TagLabel>
                                            <TagCloseButton />
                                        </Tag>
                                    ))}
                                </HStack>
                                <Input 
                                    type="text" name="word" onChange={props.handleChange} 
                                    maxWidth="1200" align="center" color="white" ml={5}
                                    variant="flushed" errorBorderColor="red.500"
                                />
                                <br/>
                                <Button type="submit" children="Add Words" colorScheme="blue" p={2} m={4} />
                            </form>
                        )
                    }
            </Formik>
        </React.Fragment>
    )
}