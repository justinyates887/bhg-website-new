import React from 'react'
import { Formik } from 'formik'
import { Button, Select, Text } from '@chakra-ui/react'

export function MuteRoleDashboard({
    roles,
    updateMuteRole
}){
    return(
        
        <React.Fragment>
            <Text fontSize="xl" color="white" p={3} ml={3}>Muted Member Role</Text>
            <Formik
                    initialValues={{ muteRole: '' }}
                    onSubmit={(values) => {
                        updateMuteRole(values.muteRole) 
                    }}
                >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                    <Select name="muteRole" 
                                            variant="flushed"
                                            placeholder="Select Role"
                                            onChange={props.handleChange}
                                            maxWidth="350" align="center" color="white" ml={5}
                                    >
                                        {roles.map((role) => (
                                            <option value={role.id} key={role.id}>{role.name}</option>
                                        ))}
                                    </Select>
                                    <Button type="submit" children="Update Role" colorScheme="blue" p={2} m={4} />
                            </form>

                        )
                    }
            </Formik>
        </React.Fragment>
    )
}