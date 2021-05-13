import React from 'react'
import { getGuildPrefix, getGuildRoles, getUserDetails, getGuildChannels, getGuildBlacklist, getGuilds } from '../../utils/api'
import { DashboardMenu } from '../../components'
import { NavHeader } from '../../components/index'
import { updateGuildPrefix, 
    updateDefaultRole, 
    updateMuteRole, 
    updateWelcomeChannel, 
    updateLogsChannel, 
    updateTicketsChannel,
    updateSuggestionChannel,
    updateApprovedSuggestionChannel,
    updateAntiad,
    updateBlacklist
} from '../../utils/api'
import { Container, Text } from '@chakra-ui/react'
export function Dashboard({
    history,
    match
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [prefix, setPrefix] = React.useState({})
    const [roles, setRoles] = React.useState([])
    const [channels, setChannels] = React.useState([])
    const [blacklist, setBlacklist] = React.useState([])

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            return getGuildPrefix(match.params.id)
        }).then(({ data }) => {
            setPrefix(data.prefix)
            return getGuildRoles(match.params.id)
        }).then(( {data} ) => {
            setRoles(data)
            return getGuildChannels(match.params.id)
        }).then(({ data }) => {
            setChannels(data)
            return getGuildBlacklist(match.params.id)
        }).then(({ data }) => {
            setBlacklist(data.words)
            setLoading(false)
        }).catch((err) => {
            history.push('/api/discord/auth')
            setLoading(false)
        })
    }, [])

    const updateGuildPrefixParent = async (prefix) => {
        try{
            const update = await updateGuildPrefix(match.params.id, prefix)
        }catch(err){
            console.log(err)
        }
    }

    const updateDefaultRoleParent = async (roleID) => {
        updateDefaultRole(match.params.id, roleID)
    }

    const updateMuteRoleParent = async (roleID) => {
        updateMuteRole(match.params.id, roleID)
    }

    const updateWelcomeChannelParent = async (channelID) => {
        updateWelcomeChannel(match.params.id, channelID)
    }

    const updateLogsChannelParent = async (channelID) => {
        updateLogsChannel(match.params.id, channelID)
    }

    const updateTicketsChannelParent = async (channelID) => {
        updateTicketsChannel(match.params.id, channelID)
    }

    const updateSuggestionChannelParent = async (channelID) => {
        updateSuggestionChannel(match.params.id, channelID)
    }

    const updateApprovedSuggestionChannelParent = async (channelID) => {
        updateApprovedSuggestionChannel(match.params.id, channelID)
    }

    const updateAntiadParent = async (desired) => {
        updateAntiad(match.params.id, desired)
    }

    const updateBlacklistParent = async (words) => {
        updateBlacklist(match.params.id, words)
    }

    return !loading && (
        <div>
            <NavHeader user={user}/>
            <Container  maxW="container.xl">
                <Text fontSize="3xl" color="white" align="center" p={3}>{ user.username }'s Dashboard</Text>
                <DashboardMenu 
                    user={user} 
                    prefix={prefix}
                    roles={roles}
                    channels={channels}
                    updatePrefix={updateGuildPrefixParent}
                    updateDefaultRole={updateDefaultRoleParent}
                    updateMuteRole={updateMuteRoleParent}
                    updateWelcomeChannel={updateWelcomeChannelParent}
                    updateLogsChannel={updateLogsChannelParent}
                    updateTicketsChannel={updateTicketsChannelParent}
                    updateSuggestionChannel={updateSuggestionChannelParent}
                    updateApprovedSuggestionChannel={updateApprovedSuggestionChannelParent}
                    updateAntiad={updateAntiadParent}
                    updateBlacklist={updateBlacklistParent}
                    blacklist={blacklist}
                />
            </Container>
        </div>
    )
}