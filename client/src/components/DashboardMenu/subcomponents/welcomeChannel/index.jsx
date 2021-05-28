import React from 'react'
import { Formik } from 'formik'
import { Button, Select, Text } from '@chakra-ui/react'

export function WelcomeChannelDashboard({
    channels,
    updateWelcomeChannel
}){
    return(
        
        <React.Fragment>
            <Text fontSize="xl" color="white" p={3} ml={3}>Welcome Channel</Text>
            <Formik
                    initialValues={{ welcomeChannel: '' }}
                    onSubmit={(values) => { 
                        updateWelcomeChannel(values.welcomeChannel) 
                    }}
                >
                    {
                        (props) => (
                            <form onSubmit={props.handleSubmit}>
                                    <Select name="welcomeChannel" 
                                            variant="flushed"
                                            onChange={props.handleChange}
                                            maxWidth="350" align="center" color="white" ml={5}
                                    >
                                        {channels.filter(channel => channel.type === 0).map((channel) => (
                                            <option value={channel.id} key={channel.id} style={{backgroundColor: "#36393f"}}>{channel.name}</option>
                                        ))}
                                    </Select>
                                    <Button type="submit" children="Update Channel" colorScheme="blue" p={2} m={4} />
                            </form>
                        )
                    }
            </Formik>
        </React.Fragment>
    )
}