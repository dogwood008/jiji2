import React      from "react"
import Router     from "react-router"

import Frame             from "./components/frame"
import Home              from "./components/pages/home-page"
import BackTests         from "./components/pages/backtests-page"
import NewBackTest       from "./components/pages/new-backtest-page"
import RMTChart          from "./components/pages/rmt-chart-page"
import RMTTradingSummary from "./components/pages/rmt-trading-summary-page"
import RMTPositions      from "./components/pages/rmt-positions-page"
import RMTAgentSetting   from "./components/pages/rmt-agent-setting-page"
import RMTLogs           from "./components/pages/rmt-log-page"
import Notifications     from "./components/pages/notifications-page"
import Agents            from "./components/pages/agents-page"
import Settings          from "./components/pages/settings-page"
import InitialSettings   from "./components/pages/initial-settings-page"
import Login             from "./components/pages/login-page"

const Route        = Router.Route;
const DefaultRoute = Router.DefaultRoute;

export default (
  <Route handler={Frame} path="/">
    <DefaultRoute                      handler={Home} />
    <Route path="rmt/trading-summary"  handler={RMTTradingSummary} />
    <Route path="rmt/chart"            handler={RMTChart} />
    <Route path="rmt/positions"        handler={RMTPositions}>
      <Route path=":id" handler={RMTPositions} ignoreScrollBehavior={true}>
      </Route>
    </Route>
    <Route path="rmt/agent-setting"    handler={RMTAgentSetting} />
    <Route path="rmt/logs"             handler={RMTLogs} />

    <Route path="backtests/new"        handler={NewBackTest} />
    <Route path="backtests/list"       handler={BackTests}>
      <Route path=":id" handler={BackTests} ignoreScrollBehavior={true}>
      </Route>
    </Route>

    <Route path="notifications"        handler={Notifications}>
      <Route path=":id" handler={Notifications} ignoreScrollBehavior={true}>
      </Route>
    </Route>
    <Route path="agents"               handler={Agents} />
    <Route path="settings"             handler={Settings} />

    <Route path="initial-settings"     handler={InitialSettings} />
    <Route path="login"                handler={Login} />
  </Route>
);
