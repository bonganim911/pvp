import React, {Component} from 'react';
import SubHeaderPage from './SubHeaderPage';

class Vital extends Component {
  constructor(props){
    super(props);
    if(!window.localStorage.getItem('token')) {
      window.localStorage.setItem("token",this.props.tokenData);
      window.localStorage.setItem("widgetId",this.props.widgetData);
    }
    window.localStorage.setItem("globalWigetName", this.props.data.name);
    window.localStorage.setItem("globalWigetId", this.props.data.id);
    window.localStorage.setItem("globalStart", this.props.data.start_date);
    window.localStorage.setItem("globaleand", this.props.data.end_date);
    
  }


  render(){
    return (
      <div>
        {
          this.props.data === undefined || this.props.data === {} ?
            <div className="well well-lg text-center alert alert-danger">
              <h1 className="topmargin-15">
                No data available to display, please try again later.
              </h1>
            </div>
          :
          <div className="wrapper wrapper-content animated fadeInRight ecommerce">
            <div className="row">
              <div id="summary">
                <div className="row">
                  <div className="col-xs-12">
                      <SubHeaderPage />
                      <div className="ibox-content" id="campaign_{this.state.widgetInformation.id}_collapse" role="tabpanel" aria-labelledby="campaign_1_heading">
                        <div className="row">
                          <div className="col-md-14 stats">
                            <br />
                            <div className="row">
                              <div className="col-md-2">
                                <div className="widget  p-sm text-center">
                                  <div className="m-b-xs">
                                    <h2 className="m-xs"> {this.props.data.visits}</h2>
                                    <div className="label label-info">
                                      Visitors
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="widget  p-sm text-center">
                                  <div className="m-b-xs">
                                    <h2 className="m-xs"> {this.props.data.audience}</h2>
                                    <div className="label label-info">
                                      Audience
                                    </div>
                                  </div>
                                </div>
                              </div>
                              { this.props.data.engagements ?
                                <div className="col-md-2">
                                  <div className="widget p-sm text-center">
                                    <div className="m-b-xs">
                                      <h2 className="m-xs">{this.props.data.participants}</h2>
                                      <div className="label label-info">
                                        Participants
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              :
                                null

                              }
                              <div className="col-md-2">
                                <div className="widget  p-sm text-center">
                                  <div className="m-b-xs">
                                    <h2 className="m-xs">{this.props.data.total_interactions}</h2>
                                    <div className="label label-info">
                                      Interactions
                                    </div>
                                  </div>
                                </div>
                              </div>
                              { this.props.data.engagements > 0 ?
                                <div className="col-md-2">
                                  <div className="widget  p-sm text-center">
                                    <div className="m-b-xs">
                                      <h2 className="m-xs">{this.props.data.engagements}</h2>
                                      <div className="label label-info">
                                        Engagements
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              : null
                              }
                              <div className="col-md-2">
                                <div className="widget p-sm text-center">
                                  <div className="m-b-xs">
                                    <h3 className="m-xs">
                                      {this.props.data.avg_face_time}
                                    </h3>
                                    <div className="label label-info topmargin-10"> Avg. Face Time </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="widget p-sm text-center">
                                  <div className="m-b-xs">
                                    <h3 className="m-xs">
                                      {this.props.data.face_time}
                                    </h3>
                                    <div className="label label-info topmargin-10"> Total Face Time </div>
                                  </div>
                                </div>
                              </div>
                              
                              
                              
                            </div>
                          </div> 
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      )
    }

}

export default Vital;
