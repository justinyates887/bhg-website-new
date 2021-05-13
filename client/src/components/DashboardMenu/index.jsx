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
    updateBlacklist
}) {
    return (
        <div>
            <div className="row">
                <div className="col sm12 m4">
                    <PrefixDashboard prefix={prefix} updatePrefix={updatePrefix} />
                </div>
                <div className="col sm12 m4">
                    <DefaultRoleDashboard roles={roles} updateDefaultRole={updateDefaultRole} />
                </div>
                <div className="col sm12 m4">
                    <MuteRoleDashboard roles={roles} updateMuteRole={updateMuteRole} />
                </div>
            </div>
            <div className="row">
                <div className="col sm12 m4">
                    <WelcomeChannelDashboard channels={channels} updateWelcomeChannel={updateWelcomeChannel} />
                </div>
                <div className="col sm12 m4">
                    <LogsChannelDashboard channels={channels} updateLogsChannel={updateLogsChannel} />
                </div>
                <div className="col sm12 m4">
                    <TicketsChannelDashboard channels={channels} updateTicketsChannel={updateTicketsChannel} />
                </div>
            </div>
            <div className="row">
                <div className="col sm12 m4">
                    <SuggestionChannelDashboard channels={channels} updateSuggestionChannel={updateSuggestionChannel} />
                </div>
                <div className="col sm12 m4">
                    <ApprovedSuggestionChannelDashboard channels={channels} updateApprovedSuggestionChannel={updateApprovedSuggestionChannel} />
                </div>
                <div className="col sm12 m4">
                    <AntiadDashboard updateAntiad={updateAntiad} />
                </div>
            </div>
            <div className="row">
                <BlacklistDashboard updateBlacklist={updateBlacklist} blacklist={blacklist} />
            </div>
        </div>
    )
}