import React from 'react'
import { Formik } from 'formik'
import { Input, Button, Text } from '@chakra-ui/react'

export function PrefixDashboard({
    prefix,
    updatePrefix
}) {
    return(
        <React.Fragment>
                <Text fontSize="xl" color="white" p={3} ml={3}>Prefix</Text>
                <Formik
                    initialValues={{ prefix }}
                    onSubmit={(values) => {
                        updatePrefix(values)
                    }}
                >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                <Input 
                                    type="text" name="prefix" onChange={props.handleChange} 
                                    defaultValue={prefix} p={2} variant="flushed" errorBorderColor="red.500"
                                    maxWidth="350" align="center" color="white" ml={5}
                                />
                                <Button type="submit" children="Update Prefix" colorScheme="blue" p={2} m={4} />
                            </form>
                        )
                    }
                </Formik>
        </React.Fragment>
    )
}