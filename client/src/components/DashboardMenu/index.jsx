import React from 'react'
import { DefaultRoleDashboard, PrefixDashboard, MuteRoleDashboard, WelcomeChannelDashboard, LogsChannelDashboard, TicketsChannelDashboard } from './subcomponents'

export function DashboardMenu({
    history,
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
    updateTicketsChannel
}) {
    return (
        <div>
            <div className="row">
                <div className="col sm-12 m-6">
                    <PrefixDashboard prefix={prefix} updatePrefix={updatePrefix} />
                </div>
                <div className="col sm-12 m-6">
                    <DefaultRoleDashboard roles={roles} updateDefaultRole={updateDefaultRole} />
                </div>
                <div className="col sm-12 m-6">
                    <MuteRoleDashboard roles={roles} updateMuteRole={updateMuteRole} />
                </div>
            </div>
            <div className="row">
                <div className="col sm-12 m-6">
                    <WelcomeChannelDashboard channels={channels} updateWelcomeChannel={updateWelcomeChannel} />
                </div>
                <div className="col sm-12 m-6">
                    <LogsChannelDashboard channels={channels} updateLogsChannel={updateLogsChannel} />
                </div>
                <div className="col sm-12 m-6">
                    <TicketsChannelDashboard channels={channels} updateTicketsChannel={updateTicketsChannel} />
                </div>
            </div>
        </div>
    )
}