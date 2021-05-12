import React from 'react'
import { Formik } from 'formik'
import { Button, Select } from '@chakra-ui/react'

export function DefaultRoleDashboard({
    roles,
    updateDefaultRole
}){
    return(
        
        <React.Fragment>
            <div className="card white-text grey darken-2">
                <span className="card-title">Base Member Role</span>
                <Formik
                        className="card-content input-field"
                        initialValues={{ defaultRole: '@everyone' }}
                        onSubmit={(values) => { 
                            updateDefaultRole(values) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                        <Select name="defaultRole" 
                                                variant="flushed"
                                                onChange={props.handleChange}
                                        >
                                            {roles.map((role) => (
                                                <option value={role.id} key={role.id}>{role.name}</option>
                                            ))}
                                        </Select>
                                        <Button type="submit" children="Update Role" className="btn blue" />
                                </form>

                            )
                        }
                </Formik>
            </div>
        </React.Fragment>
    )
}