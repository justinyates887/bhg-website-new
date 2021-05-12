import React from 'react'
import { Formik } from 'formik'
import { Button, Select } from '@chakra-ui/react'

export function WelcomeChannelDashboard({
    channels,
    updateWelcomeChannel
}){
    return(
        
        <React.Fragment>
            <div className="card white-text grey darken-2">
                <span className="card-title">Welcome Channel</span>
                <Formik
                        className="card-content input-field"
                        initialValues={{ welcomeChannel: '' }}
                        onSubmit={(values) => { 
                            updateWelcomeChannel(values) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                        <Select name="welcomeChannel" 
                                                variant="flushed"
                                                onChange={props.handleChange}
                                        >
                                            {channels.map((channel) => (
                                                <option value={channel.id} key={channel.id}>{channel.name}</option>
                                            ))}
                                        </Select>
                                        <Button type="submit" children="Update Channel" className="btn blue" />
                                </form>
                            )
                        }
                </Formik>
            </div>
        </React.Fragment>
    )
}