import React from 'react'
import { Formik } from 'formik'
import { Button, HStack, Tag, TagLabel, TagCloseButton, Input } from '@chakra-ui/react'

export function BlacklistDashboard({
    updateBlacklist,
    blacklist
}){
    return(
        
        <React.Fragment>
            <div className="card hoverable white-text grey darken-2">
                <span className="card-title">Blacklist</span>
                <Formik
                        className="card-content input-field"
                        initialValues={ blacklist }
                        onSubmit={(values) => { 
                            updateBlacklist(values.word) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                    <HStack spacing={4}>
                                        {blacklist.map((word) => (
                                            <Tag value={word} key={word} size={"md"} borderRadius="full" variant="solid" colorScheme="blue">
                                                <TagLabel>{word}</TagLabel>
                                                <TagCloseButton />
                                            </Tag>
                                        ))}
                                       </HStack>
                                    <Input type="text" name="word" onChange={props.handleChange} />
                                    <Button type="submit" children="Add Words" className="btn blue" />
                                </form>
                            )
                        }
                </Formik>
            </div>
        </React.Fragment>
    )
}