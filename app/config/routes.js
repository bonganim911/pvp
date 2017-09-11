import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import VitalPage from '../views/VitalPage';
import LeaderboardPage from '../views/LeaderboardPage';
import PollPage from '../views/PollPage';
import TextGatePage from '../views/TextGatePage';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/vitals" />
        <Route path="/vitals" component={VitalPage}> </Route>
        <Route path="/leaderboard" component={LeaderboardPage}> </Route>
        <Route path="/poll" component={PollPage}> </Route>
        <Route path="/textgate" component={TextGatePage}> </Route>
        </Route>
    </Router>

);
