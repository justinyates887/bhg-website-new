import React from 'react'
import { Formik } from 'formik'
import { Button, Select } from '@chakra-ui/react'

export function TicketsChannelDashboard({
    channels,
    updateTicketsChannel
}){
    return(
        
        <React.Fragment>
            <div className="card white-text grey darken-2">
                <span className="card-title">Tickets Channel</span>
                <Formik
                        className="card-content input-field"
                        initialValues={{ ticketsChannel: '' }}
                        onSubmit={(values) => { 
                            updateTicketsChannel(values.ticketsChannel) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                        <Select name="ticketsChannel" 
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