import { Box, Container, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { DefaultRoleDashboard, 
    PrefixDashboard, 
    MuteRoleDashboard, 
    WelcomeChannelDashboard, 
    LogsChannelDashboard, 
    TicketsChannelDashboard,
    SuggestionChannelDashboard,
    ApprovedSuggestionChannelDashboard,
    AntiadDashboard,
    BlacklistDashboard
} from './subcomponents'

export function DashboardMenu({
    history,
    match,
    guildID,
    user,
    roles,
    channels,
    prefix,
    updatePrefix,
    updateDefaultRole,
    updateMuteRole,
    updateWelcomeChannel,
    updateLogsChannel,
    updateTicketsChannel,
    updateSuggestionChannel,
    updateApprovedSuggestionChannel,
    updateAntiad,
    blacklist,
    setBlacklist,
    updateBlacklist,
}) {
    return (
        <React.Fragment>
            <SimpleGrid columns={{sm:1, md:2, lg:3}}>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <PrefixDashboard prefix={prefix} updatePrefix={updatePrefix} />
                </Box>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <DefaultRoleDashboard roles={roles} updateDefaultRole={updateDefaultRole} />
                </Box>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <MuteRoleDashboard roles={roles} updateMuteRole={updateMuteRole} />
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={{sm:1, md:2, lg:3}}>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <WelcomeChannelDashboard channels={channels} updateWelcomeChannel={updateWelcomeChannel} />
                </Box>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <LogsChannelDashboard channels={channels} updateLogsChannel={updateLogsChannel} />
                </Box>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <TicketsChannelDashboard channels={channels} updateTicketsChannel={updateTicketsChannel} />
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={{sm:1, md:2, lg:3}}>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <SuggestionChannelDashboard channels={channels} updateSuggestionChannel={updateSuggestionChannel} />
                </Box>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <ApprovedSuggestionChannelDashboard channels={channels} updateApprovedSuggestionChannel={updateApprovedSuggestionChannel} />
                </Box>
                <Box w="400px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <AntiadDashboard updateAntiad={updateAntiad} />
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={1}>
                <Box w="1240px" rounded='20px' overflow="hidden" boxShadow="sm" bg='gray.500' m={3}>
                    <BlacklistDashboard updateBlacklist={updateBlacklist} blacklist={blacklist} match={match} setBlacklist={setBlacklist}/>
                </Box>
            </SimpleGrid>
        </React.Fragment>
    )
}