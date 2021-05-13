import React from 'react'
import { Formik } from 'formik'
import { Button, Switch, FormLabel, Text, Wrap } from '@chakra-ui/react'

export function AntiadDashboard({
    updateAntiad
}){
    return(
        
        <React.Fragment>
            <Text fontSize="xl" color="white" p={3} ml={3}>Antiad</Text>
            <Formik
                    initialValues={{ antiad: '' }}
                    onSubmit={(values) => { 
                        updateAntiad(values.antiad) 
                    }}
                >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                    <Wrap align="center" m={0}>
                                        <FormLabel htmlFor="switch" color="white">
                                            <Text color="white" p={1} ml={3} mb={0}> Enable Antiad?</Text>
                                        </FormLabel>
                                        <Switch id="antiad" onChange={props.handleChange} p={0}/>
                                    </Wrap>
                                    <br />
                                    <Button type="submit" children="Sumbit" colorScheme="blue" p={4} mb={3} ml={4} />
                            </form>
                        )
                    }
            </Formik>
        </React.Fragment>
    )
}