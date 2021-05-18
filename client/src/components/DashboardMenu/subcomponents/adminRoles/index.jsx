import React from 'react'
import { Formik } from 'formik'
import { Button, HStack, Tag, TagLabel, TagCloseButton, Select, Text } from '@chakra-ui/react'
import { removeAdminRole } from '../../../../utils/api'

export function AdminRolesDashboard({
    updateAdminRoles,
    roles,
    adminRoles,
    setAdminRoles,
    match
}){
    function matchRole(roles, adminRole){
        return roles.filter((role) => role.id === adminRole)
    }

    function returnTag(adminRoles){
        if(adminRoles){
            return (
                <HStack spacing={4} ml={4} mr={4}>
                    {adminRoles.map((role) => {
                        const yeet = matchRole(roles, role)
                        return (
                            <Tag value={yeet[0].id} key={yeet[0].id} size={"md"} borderRadius="full" variant="solid" colorScheme="blue">
                                <TagLabel>{yeet[0].name}</TagLabel>
                                <TagCloseButton onClick={() => {
                                    removeAdminRole(match.params.id, yeet[0].id)
                                    setAdminRoles(adminRoles => adminRoles.filter(roleList => yeet[0].id != roleList))
                                    }}/>
                            </Tag>
                        )
                    })}
                </HStack>
            )
        }
    }
    return(
        
        <React.Fragment>
            <Text fontSize="xl" color="white" p={3} ml={3}>Admin Roles</Text>
            <Formik
                    initialValues={ adminRoles }
                    onSubmit={(values) => { 
                        updateAdminRoles(values.adminRoles)
                        setAdminRoles(adminRoles => [...adminRoles, values.adminRoles])
                    }}
                >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                {returnTag(adminRoles)}
                                <Select name="adminRoles" 
                                    variant="flushed"
                                    placeholder="Select Roles"
                                    onChange={props.handleChange}
                                    maxWidth="1200" align="center" color="white" ml={5}                                            
                                    >
                                    {roles.map((role) => (
                                        <option value={role.id} key={role.id}>{role.name}</option>
                                    ))}
                                </Select>
                                <Button type="submit" children="Add Roles" colorScheme="blue" p={2} m={4} />
                            </form>
                        )
                    }
            </Formik>
        </React.Fragment>
    )
}