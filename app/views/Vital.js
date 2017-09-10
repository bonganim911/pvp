import React, {Component} from 'react';
import BarChart from '../components/chart/BarChart';

class Vital extends Component {
  constructor(props){
    super(props);
  }


  render(){
    console.log('props here',this.props);
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
                    <div className="ibox float-e-margins">
                      <div className="ibox-title">
                        <h5>
                          <span className="text-info">{this.props.data.name}</span>
                          -
                          <span className="text-muted">{this.props.data.id}</span>
                        </h5>
                        <div className="ibox-tools">
                          <span>
                            <small>Period:</small>
                            <strong id="startdate_1">{this.props.data.start_date}</strong>
                            <small>-</small>
                            <strong id="enddate_1">{this.props.data.end_date}</strong>
                          </span>&nbsp; &nbsp;
                        </div>
                      </div>
                      <div className="ibox-content" id="campaign_{this.state.widgetInformation.id}_collapse"
                      role="tabpanel" aria-labelledby="campaign_1_heading">
                        <div className="row">
                          <div className="col-md-5 stats">
                            <br />
                            <div className="row">
                              <div className="col-xs-4">
                                <div className="widget  p-sm text-center">
                                  <div className="m-b-xs">
                                    <h2 className="m-xs"> {this.props.data.visits}</h2>
                                    <div className="label label-info">
                                      Visitors
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xs-4">
                                <div className="widget  p-sm text-center">
                                  <div className="m-b-xs">
                                    <h2 className="m-xs">{this.props.data.total_interactions}</h2>
                                    <div className="label label-info">
                                      Interactions
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xs-4">
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
                            <div className="row">
                              <div className="col-xs-4">
                                <div className="widget  p-sm text-center">
                                  <div className="m-b-xs">
                                    <h2 className="m-xs"> {this.props.data.audience}</h2>
                                    <div className="label label-info">
                                      Audience
                                    </div>
                                  </div>
                                </div>
                              </div>
                              { this.props.data.engagements > 0 ?
                                <div className="col-xs-4">
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
                              <div className="col-xs-4">
                                <div className="widget p-sm text-center">
                                  <div className="m-b-xs">
                                    <h3 className="m-xs">
                                      {this.props.data.avg_face_time}
                                    </h3>
                                    <div className="label label-info topmargin-10"> Avg. Face Time </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              { this.props.data.engagements ?
                                <div className="col-xs-4">
                                  <div className="widget p-sm text-center">
                                    <div className="m-b-xs">
                                      <h1 className="m-xs">{this.props.data.participants}</h1>
                                      <div className="label label-info">
                                        Participants
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
