import React from 'react'
import { Formik } from 'formik'
import { Input, Button, Select } from '@chakra-ui/react'

export function DashboardMenu({
    history,
    guildID,
    user,
    roles,
    prefix,
    updatePrefix,
    updateRole
}) {
    return (
        <div className="row">
            <React.Fragment>
                <div className="col sm-12 m-6">
                    <div className="card white-text grey darken-2">
                        <span className="card-title">Prefix</span>
                        <Formik
                            initialValues={{ prefix }}
                            onSubmit={(values) => {
                                updatePrefix(values)
                            }}
                        >
                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <Input type="text" name="prefix" onChange={props.handleChange} defaultValue={prefix} />
                                        <Button type="submit" children="Update Prefix" className="btn blue"/>
                                    </form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </React.Fragment>
            <React.Fragment>
                <div className="col sm-12 m-6">
                    <div className="card white-text grey darken-2">
                        <span className="card-title">Base Member Role</span>
                        <Formik
                                className="card-content input-field"
                                initialValues={{ defaultRole: '@everyone' }}
                                onSubmit={(values) => { 
                                    updateRole(values) 
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
                </div>
            </React.Fragment>
        </div>
    )
}