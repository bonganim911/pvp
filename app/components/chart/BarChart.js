import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {addDashboardChartData} from './Highchart';

class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      graphs: {}
    }

  }

  getCharts(data){
    if(data !== 'undefined'){
      const graphData = addDashboardChartData(data);
      console.log(graphData);
      this.setState({graphs: graphData});
    }
  }

  render() {
    if(this.props.vitalData){
      this.getCharts(this.props.vitalData);
    }
    return (
      <div>
        {
          this.state.graphs !== 'undefined' ?
            <div>
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-4">
                    <div id="bar-chart-3-011" class="chart hide">
                      {this.state.graphs.vistorsChart}
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div id="bar-chart-4-011" class="chart">
                      {this.state.graphs.audienceChart}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <div id="bar-chart-5-011" class="chart">
                      {this.state.graphs.interactionChart}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div id="bar-chart-2-011" class="chart">
                      {this.state.graphs.participantsChart}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div id="bar-chart-011" class="chart">
                      {this.state.graphs.engagementsChart}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
      </div>
        );
        }
}

export default BarChart;
