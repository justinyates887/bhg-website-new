import React from 'react'
import { getGuildPrefix, getGuildRoles, getUserDetails, getGuildChannels } from '../../utils/api'
import { DashboardMenu } from '../../components'
import { NavHeader } from '../../components/index'
import { updateGuildPrefix, updateDefaultRole, updateMuteRole, updateWelcomeChannel, updateLogsChannel, updateTicketsChannel } from '../../utils/api'


export function Dashboard({
    history,
    match
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [prefix, setPrefix] = React.useState({})
    const [roles, setRoles] = React.useState([])
    const [channels, setChannels] = React.useState([])

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

    return !loading && (
        <div>
            <NavHeader />
            <h1 className="h1 white-text">{ user.username }'s Dashboard</h1>
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
            />
        </div>
    )
}