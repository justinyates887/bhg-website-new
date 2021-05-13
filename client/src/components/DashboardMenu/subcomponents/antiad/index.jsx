import React from 'react'
import { Formik } from 'formik'
import { Button, Switch, FormLabel } from '@chakra-ui/react'

export function AntiadDashboard({
    updateAntiad
}){
    return(
        
        <React.Fragment>
            <div className="card hoverable white-text grey darken-2">
                <span className="card-title">Antiad</span>
                <Formik
                        className="card-content input-field"
                        initialValues={{ antiad: '' }}
                        onSubmit={(values) => { 
                            updateAntiad(values.antiad) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                        <FormLabel htmlFor="switch">
                                            Enable Antiad?
                                        </FormLabel>
                                        <Switch id="antiad" onChange={props.handleChange} />
                                        <br />
                                        <Button type="submit" children="Sumbit" className="btn blue" />
                                </form>
                            )
                        }
                </Formik>
            </div>
        </React.Fragment>
    )
}