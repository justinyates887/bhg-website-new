import React from 'react'
import { Formik } from 'formik'
import { Button, Select, Text } from '@chakra-ui/react'

export function TicketsChannelDashboard({
    channels,
    updateTicketsChannel
}){
    return(
        
        <React.Fragment>
            <Text fontSize="xl" color="white" p={3} ml={3}>Tickets Category</Text>
            <Formik
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
                                            placeholder="Select A Category"
                                            onChange={props.handleChange}
                                            maxWidth="350" align="center" color="white" ml={5}
                                    >
                                        {channels.filter(channel => channel.type === 4).map((channel => (
                                            <option value={channel.id} key={channel.id} style={{backgroundColor: "#36393f"}}>{channel.name}</option>
                                        )))}
                                    </Select>
                                    <Button type="submit" children="Update Channel" colorScheme="blue" p={2} m={4} />
                            </form>
                        )
                    }
            </Formik>
        </React.Fragment>
    )
}