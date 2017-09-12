import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

let dateData;
let visitorData;
let audienceData;
let participantsData;
let totalInteractionData;
let engagementData;

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      visitorsChartData:{},
      audienceChartData:{},
      participantsChartData:{},
      interactionChartData:{},
      engegementChartData:{}
    }
    this.getVisitorsChartData = this.getVisitorsChartData.bind(this);
    this.getAudienceChartData = this.getAudienceChartData.bind(this);
    this.getParticipantsChartData = this.getParticipantsChartData.bind(this);
    this.getInteractionChartData = this.getInteractionChartData.bind(this);
    this.getEngagementChartData = this.getEngagementChartData.bind(this);
  }

  componentWillMount(){
    console.log('vital data object',this.props.data);
    dateData = this.props.data.widget_daily_summary.map(function(v) { 
          return  v.date
        });
    this.getVisitorsChartData();
    this.getAudienceChartData();
    this.getParticipantsChartData();
    this.getInteractionChartData();
    this.getEngagementChartData();
  }
  getVisitorsChartData(){
    
    visitorData = this.props.data.widget_daily_summary.map(function(k) { 
          return k.visitors;
        }); 
    console.log('visitors', visitorData);
    this.setState({
      visitorsChartData:{
        labels: dateData,
        datasets:[
          {
            label:'Visitors',
            data: visitorData,
            backgroundColor:[
              '#8bbc21',
              '#00a99d',
              '#2f7ed8',
              '#DDDF00',
              '#24CBE5',
              '#64E572',
              '#FF9655',
              '#FFF263',
              '#6AF9C4'
            ]
          }
        ]
      }
    });
  }
  getAudienceChartData(){
    audienceData = this.props.data.widget_daily_summary.map(function(k) { 
          return k.audience;
        }); 
    this.setState({
      audienceChartData:{
        labels: dateData,
        datasets:[
          {
            label:'Audience',
            data:audienceData,
            backgroundColor:[
              '#8bbc21',
              '#00a99d',
              '#2f7ed8',
              '#DDDF00',
              '#24CBE5',
              '#64E572',
              '#FF9655',
              '#FFF263',
              '#6AF9C4'
            ]
          }
        ]
      }
    });
  }
  getParticipantsChartData(){
    participantsData = this.props.data.widget_daily_summary.map(function(k) { 
          return k.participants;
        }); 
    this.setState({
      participantsChartData:{
        labels: dateData,
        datasets:[
          {
            label:'Population',
            data:participantsData,
            backgroundColor:[
              '#8bbc21',
              '#00a99d',
              '#2f7ed8',
              '#DDDF00',
              '#24CBE5',
              '#64E572',
              '#FF9655',
              '#FFF263',
              '#6AF9C4'
            ]
          }
        ]
      }
    });
  }
  getInteractionChartData(){
    totalInteractionData = this.props.data.widget_daily_summary.map(function(k) { 
          return k.total_interactions;
        }); 
    this.setState({
      interactionChartData:{
        labels: dateData,
        datasets:[
          {
            label:'Interaction',
            data: totalInteractionData,
            backgroundColor:[
              '#8bbc21',
              '#00a99d',
              '#2f7ed8',
              '#DDDF00',
              '#24CBE5',
              '#64E572',
              '#FF9655',
              '#FFF263',
              '#6AF9C4'
            ]
          }
        ]
      }
    });
  }
  getEngagementChartData(){
    engagementData = this.props.data.widget_daily_summary.map(function(k) { 
          return k.engagements;
        }); 
    this.setState({
      engegementChartData:{
        labels: dateData,
        datasets:[
          {
            label:'Engagement',
            data:engagementData,
            backgroundColor:[
              '#8bbc21',
              '#00a99d',
              '#2f7ed8',
              '#DDDF00',
              '#24CBE5',
              '#64E572',
              '#FF9655',
              '#FFF263',
              '#6AF9C4'
            ]
          }
        ]
      }
    });
  }

  render(){
    return (
      <div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <Bar
              data={this.state.audienceChartData}
              options={{
                title:{
                  display:true,
                  text: "Audiences",
                  fontSize:20
                },
                legend:{
                  display:true,
                  position: "bottom"
                }
              }}
            />
          </div>
          <div className="col-md-6">
            <Bar
              data={this.state.interactionChartData}
              options={{
                title:{
                  display:true,
                  text:'Interactions',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position: "bottom"
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <Bar
              data={this.state.visitorsChartData}
              options={{
                title:{
                  display:true,
                  text:'Visitors',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position: "bottom"
                }
              }}
            />
          </div>
          <div className="col-md-6">
            <Bar
              data={this.state.participantsChartData}
              options={{
                title:{
                  display:true,
                  text:'Participants',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position: "bottom"
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <Bar
              data={this.state.engegementChartData}
              options={{
                title:{
                  display:true,
                  text:'Engagements',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position: "bottom"
                }
              }}
            />
        </div>
      </div>


      
      </div>
    )
  }
}

export default Chart;
