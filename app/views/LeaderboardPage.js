import React, { Component } from 'react';
import {getLeaderboard} from '../api';
import SubHeaderPage from './SubHeaderPage'

class LeaderboardPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        leaderboardData: {}
    }
  }
  componentWillMount(){
    this.fetchLeaderboard();
  }

  fetchLeaderboard(){
    getLeaderboard(window.localStorage.getItem("token"), window.localStorage.getItem("widgetId"))
      .then(results => {
        this.setState({leaderboardData: results})
      })
      .catch(error => {
        console.error(error);
      })
    }
    render() {
      const leaders = this.state.leaderboardData.leaderboard;
      let displayLeaders;
      if(!this.state.leaderboardData){
        return (
          <div className="ibox float-e-margins">
                <div className="well well-lg text-center alert alert-danger">
                  <h1 className="topmargin-15">
                    Leaderboard data is currently not available.
                  </h1>
                </div>
              </div>
        )
      } else if(this.state.leaderboardData.leaderboard && this.state.leaderboardData.leaderboard.length > 0){
        displayLeaders = leaders.map((l, index) => {
                          return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{l.display_name}</td>
                                  <td>{l.best_score}</td>
                                  <td>{l.best_time} secs</td>
                                </tr>
                               )
                       })
      }
      return (
        <div className="row">
          <div className="col-xs-12">
              { this.state.leaderboardData.leaderboard ?
                <div className="wrapper wrapper-content animated fadeInRight ecommerce">
                    <SubHeaderPage />
                  <div className="ibox-content" id="campaign_campaign_code_collapse" role="tabpanel" aria-labelledby="campaign_1_heading">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="table-responsive">
                            <table className="table table-striped table-condensed" style={{borderMargin:"25px"}}>
                              <thead>
                                <tr>
                                  <th>Rank</th>
                                  <th>Display Name</th>
                                  <th>Score value</th>
                                  <th>Time</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  displayLeaders
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              :
            <div>
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
               <div className="rect4"></div>
               <div className="rect5"></div>
              </div>
             <div className="loading-message center-message"><p>Loading...</p></div>
            </div>
              }
          </div>
        </div>
      )

    }

}

export default LeaderboardPage;
