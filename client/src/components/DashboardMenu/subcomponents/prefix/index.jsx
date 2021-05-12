import React from 'react'
import { Formik } from 'formik'
import { Input, Button } from '@chakra-ui/react'

export function PrefixDashboard({
    prefix,
    updatePrefix
}) {
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}