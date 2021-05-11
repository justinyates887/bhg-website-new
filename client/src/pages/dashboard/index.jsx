import React from 'react'
import { getGuildPrefix, getUserDetails } from '../../utils/api'
import { DashboardMenu } from '../../components'
import { updateGuildPrefix } from '../../utils/api'
import { NavHeader } from '../../components/index'

export function Dashboard({
    history,
    match
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [prefix, setPrefix] = React.useState({})

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            return getGuildPrefix(match.params.id)
        }).then(({ data }) => {
            setPrefix(data.prefix)
            setLoading(false)
        }).catch((err) => {
            history.push('/api/discord/auth')
            setLoading(false)
        })
    }, [])

    const updateGuildPrefixParent = async (prefix) => {
        try{
            const update = await updateGuildPrefix(match.params.id, prefix)
            console.log(update)
        }catch(err){
            console.log(err)
        }
    }

    return !loading && (
        <div>
            <NavHeader />
            <h1 className="h1 white-text">{ user.username }'s Dashboard</h1>
            <DashboardMenu user={user} prefix={prefix} updatePrefix={updateGuildPrefixParent}/>
        </div>
    )
}