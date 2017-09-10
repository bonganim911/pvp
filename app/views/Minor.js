import React, { Component } from 'react';
import {getLeaderboard} from '../api';

class Minor extends Component {
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
    getLeaderboard('b65af91910b68bd4', '58ece3686a8b0a00140003ef')
      .then(results => {
        this.setState({leaderboardData: results})
        console.log('recieved the leaderboard data', results);
      })
      .catch(error => {
        console.error(error);
      })
    }
    render() {
      console.log('tnhis is ',this.state.leaderboardData);
      const leaders = this.state.leaderboardData.leaderboard;
      if(!this.state.leaderboardData){
        return (
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
        )
      }
      return (
        <div className="row">
          <div className="col-xs-12">
            <div className="ibox float-e-margins">
              <div className="well well-lg text-center alert alert-danger">
                <h1 className="topmargin-15">
                  Leaderboard data is currently not available.
                </h1>
              </div>
              { this.state.leaderboardData !== 'undefined' ?
                <div className="wrapper wrapper-content animated fadeInRight ecommerce">
                  <div>
                    <div className="ibox-title">
                      <h5>
                        <span className="text-info">{this.state.leaderboardData.widget_name}</span> -
                        <span className="text-muted">{this.state.leaderboardData.widget_id}</span>
                      </h5>
                      <div className="ibox-tools">
                        <span>
                          <small>Period:</small>
                          <strong id="startdate_1">{this.state.leaderboardData.start_date}</strong>
                          <small>-</small>
                          <strong id="enddate_1">{this.state.leaderboardData.end_date}</strong>
                        </span>&nbsp; &nbsp;
                        <br/>
                        <br/>
                      </div>
                    </div>

                    <div className="ibox-content" id="campaign_campaign_code_collapse"
                    role="tabpanel" aria-labelledby="campaign_1_heading">
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
                                  leaders !== 'undefined' ?
                                    leaders.map((l, index) => {
                                      <tr key={index}>
                                        <td>
                                          {index + 1}
                                        </td>
                                        <td>
                                          {l.display_name}
                                        </td>
                                        <td>
                                          {l.best_score}
                                        </td>
                                        <td>
                                          {l.best_time} secs
                                        </td>
                                      </tr>
                                    })
                                  :
                                  null
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              :
                null
              }
            </div>
          </div>
        </div>
      )

    }

}

export default Minor;
