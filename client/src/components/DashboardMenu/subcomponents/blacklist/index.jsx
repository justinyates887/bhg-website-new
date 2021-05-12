import React from 'react'
import { Formik } from 'formik'
import { Button, HStack, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'

export function BlacklistDashboard({
    updateBlacklist,
    blacklist
}){
    return(
        
        <React.Fragment>
            <div className="card white-text grey darken-2">
                <span className="card-title">Blacklist</span>
                <Formik
                        className="card-content input-field"
                        initialValues={ blacklist }
                        onSubmit={(values) => { 
                            updateBlacklist(values) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                    <HStack spacing={4}>
                                            <Tag
                                            size={"md"}
                                            key={"md"}
                                            borderRadius="full"
                                            variant="solid"
                                            colorScheme="blue"
                                            >
                                            <TagLabel>Words Go Here</TagLabel>
                                            <TagCloseButton />
                                            </Tag>
                                        </HStack>
                                    <Button type="submit" children="Add Words" className="btn blue" />
                                </form>
                            )
                        }
                </Formik>
            </div>
        </React.Fragment>
    )
}