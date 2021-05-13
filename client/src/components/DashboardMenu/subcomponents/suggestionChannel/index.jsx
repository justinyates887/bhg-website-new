import React from 'react'
import { Formik } from 'formik'
import { Button, Select } from '@chakra-ui/react'

export function SuggestionChannelDashboard({
    channels,
    updateSuggestionChannel
}){
    return(
        
        <React.Fragment>
            <div className="card white-text grey darken-2">
                <span className="card-title">Suggestion Channel</span>
                <Formik
                        className="card-content input-field"
                        initialValues={{ suggestionChannel: '' }}
                        onSubmit={(values) => { 
                            updateSuggestionChannel(values.suggestionChannel) 
                        }}
                    >
                        {
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                        <Select name="suggestionChannel" 
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