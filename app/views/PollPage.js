  import React, {Component} from 'react';
  import {getPoll} from '../api';
  import SubHeaderPage from './SubHeaderPage';

  class PollPage extends Component {
    constructor(props){
      super(props);
      this.state = {
          PollData: {}
      }
    }
     componentWillMount(){
      this.fetchPoll();
    }

    fetchPoll(){
      getPoll(window.sessionStorage.getItem("widgetId"), window.sessionStorage.getItem("token"))
        .then(results => {
          this.setState({PollData: results})
        })
        .catch(error => {
          console.error(error);
        })
      }

    render(){
      let poll_details;
      if(!this.state.PollData){
        return (
          <div className="ibox float-e-margins">
                <div className="well well-lg text-center alert alert-danger">
                  <h1 className="topmargin-15">
                    Poll data is currently not available.
                  </h1>
                </div>
              </div>
        )
      } else if(this.state.PollData && this.state.PollData.results){
        poll_details = this.state.PollData.results.map((poll, index) => {
          return (
                <li key={index} className="list-group-item">
                     <span className="badge">{poll.nbr_gate_interactions_percentage}%</span>
                     <span className="badge">{poll.nbr_gate_interactions}</span>Option 
                    <strong>{poll.answer}</strong>
                </li>

            )
      })
    }
      return (
          <div>
              <div className="wrapper wrapper-content animated fadeInRight ecommerce">
                <div className="row">
                  <div id="summary">
                    <div className="row">
                      <div className="col-xs-12">
                        <SubHeaderPage /> 
                      </div>
                    </div>
                  </div>
              </div>
              {
                this.state.PollData ?
                <div className="ibox float-e-margins" id="journey-panel-1">
                  <div className="ibox-title ibox-title-bold">
                      <div className="ibox-tools">
                      <h5 className="panel-title">
                           <span className="badge badge-info">Poll Question</span>&nbsp;
                            {this.state.PollData.label}
                      </h5>
                        <a className="collapsed collapse-link" role="button"
                           data-toggle="collapse"
                           data-target="#poll_collapse"
                           data-parent="#poll_accordion"
                           href="#poll_collapse" aria-expanded="true"
                           aria-controls="poll_collapse">
                            <i className="fa fa-chevron-up"></i>
                        </a>
                      </div>
                  </div>
                  <div className="ibox-content panel-collapse collapse in" id="poll_collapse" role="tabpanel" aria-labelledby="poll_1_heading">
                      <div className="row topmargin-25">
                          <div className="col-xs-12">
                              <div className="row">
                                  <div className="col-md-7">
                                      <div id="poll_1_panel" className="panel-group accordion accordion-reports">
                                          <div className="panel panel-default" id="panel1">
                                              <div className="panel-body">
                                                  <ul className="list-group topmargin-15">
                                                    {poll_details}
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  //suppose to be a graph here
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

  export default PollPage;
