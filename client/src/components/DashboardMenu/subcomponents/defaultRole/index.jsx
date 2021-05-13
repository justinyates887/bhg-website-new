import React from 'react'
import { Formik } from 'formik'
import { Button, Select, Stack } from '@chakra-ui/react'

export function DefaultRoleDashboard({
    roles,
    updateDefaultRole
}){
    return(
        
        <React.Fragment>
            <div className="card hoverable white-text grey darken-2">
                <span className="card-title">Base Member Role</span>
                    <div className="card-content">
                        <Formik
                                initialValues={{ defaultRole: '' }}
                                onSubmit={(values) => { 
                                    console.log(values.defaultRole)
                                    updateDefaultRole(values.defaultRole) 
                                }}
                            >
                                {
                                    (props) => (
                                        <div className="input-field">
                                        <form onSubmit={props.handleSubmit}>
                                            <Select name="defaultRole" 
                                                    variant="flushed"
                                                    placeholder="Select Role"
                                                    onChange={props.handleChange}
                                            >
                                                {roles.map((role) => (
                                                    <option value={role.id} key={role.id}>{role.name}</option>
                                                ))}
                                            </Select>
                                            <Button type="submit" children="Update Role" className="btn blue" />
                                        </form>
                                        </div>

                                    )
                                }
                        </Formik>
                </div>
            </div>
        </React.Fragment>
    )
}