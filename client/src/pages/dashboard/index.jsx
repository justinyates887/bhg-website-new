import React from 'react'
import { getGuildPrefix, getGuildRoles, getUserDetails } from '../../utils/api'
import { DashboardMenu } from '../../components'
import { updateGuildPrefix, updateDefaultRole } from '../../utils/api'

export function Dashboard({
    history,
    match
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [prefix, setPrefix] = React.useState({})
    const [roles, setRoles] = React.useState([])

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
        updateDefaultRole(null, null)
    }

    return !loading && (
        <div>
            <h1 className="h1 white-text">{ user.username }'s Dashboard</h1>
            <DashboardMenu 
                user={user} 
                prefix={prefix}
                roles={roles}
                updatePrefix={updateGuildPrefixParent}
                updateRole={updateDefaultRoleParent}
            />
        </div>
    )
}