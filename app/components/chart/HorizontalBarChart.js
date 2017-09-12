import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import _ from 'lodash';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{},
      topLabel: ""
    }
    this.getChartData = this.getChartData.bind(this);
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({topLabel: this.props.topic});
    const seriesData = this.props.data.map(function(k) { 
          return  k.nbr_gate_interactions_percentage
        });
    const labelData = this.props.data.map(function(k) { 
          return k.answer;
        }); 
    this.setState({
      chartData:{
        type: 'horizontalBar',
        labels: labelData,
        datasets:[
          {
            label:'Poll Answer',
            data: seriesData,
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
        ],

      }
    });
  }

  render(){
    return (
    <div>
      <div className="col-md-10">
        <HorizontalBar
              data={this.state.chartData}
              options={{
                title:{
                  display:true,
                  text: this.props.topic,
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
    )
  }
}

export default Chart;
