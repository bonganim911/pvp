import Highcharts from 'highcharts';
import HighchartsBoost from 'highcharts/modules/boost';
HighchartsBoost(Highcharts);

export function addDashboardChartData(summaryData){
  if(summaryData !== undefined){
    var engagementsChart, participantsChart;
    var campaignCode = ("011");
    var campaignName = "someName";
    var list = summaryData['widget_daily_summary'];
    if(summaryData['participants'] > 0 && summaryData['engagements'] > 0){
        participantsChart = buildParticipantsChart(list, campaignCode, campaignName);
        engagementsChart = buildEngagementsChart(list, campaignCode, campaignName);
    };
    vistorsChart = buildVisitorsChart(list, campaignCode, campaignName);
    audienceChart = buildAudienceChart(list, campaignCode, campaignName);
    interactionChart = buildInteractionChart(list, campaignCode, campaignName);
    summaryData['engagementsChart'] =  engagementsChart;
    summaryData['participantsChart'] =  participantsChart;
    summaryData['vistorsChart'] =  vistorsChart;
    summaryData['audienceChart'] =  audienceChart;
    summaryData['interactionChart'] =  interactionChart;
    return summaryData;
  }
}

function buildInteractionChart(interactionsList, campaign_code, campaignName){
  var interactionSeries = [];
  var graphCategories = [];
  var graphSeries = [];
  for(var interaction = 0; interaction < interactionsList.length; interaction++){
    graphCategories.push(interactionsList[interaction]['date']);
    interactionSeries.push(interactionsList[interaction]['total_interactions']);
  }

  graphSeries.push({
    'name': 'Interaction',
    'data': interactionSeries
  });

  return new  Highcharts.Chart(buildGraphOptions('Interaction', graphSeries, graphCategories, ('bar-chart-5-' + campaign_code), campaignName));
}

function buildAudienceChart(audienceList, campaign_code, campaignName){
  var audienceSeries = [];
  var graphCategories = [];
  var graphSeries = [];
  for(var interaction = 0; interaction < audienceList.length; interaction++){
    graphCategories.push(audienceList[interaction]['date']);
    audienceSeries.push(audienceList[interaction]['audience']);
  }

  graphSeries.push({
    'name': 'Audience',
    'data': audienceSeries
  });
  return new  Highcharts.Chart(buildGraphOptions('Audience', graphSeries, graphCategories, ('bar-chart-4-' + campaign_code), campaignName));
}

function buildVisitorsChart(visitorList, campaign_code, campaignName){
  var visitorsSeries = [];
  var graphCategories = [];
  var graphSeries = [];
  for(var interaction = 0; interaction < visitorList.length; interaction++){
    graphCategories.push(visitorList[interaction]['date']);
    visitorsSeries.push(visitorList[interaction]['visitors']);
  }

  graphSeries.push({
    'name': 'Visitors',
    'data': visitorsSeries
  });
  return new  Highcharts.Chart(buildGraphOptions('Visitors', graphSeries, graphCategories, ('bar-chart-3-' + campaign_code), campaignName));
}

function buildParticipantsChart(participantsList, campaign_code, campaignName){
  var participantsSeries = [];
  var graphCategories = [];
  var graphSeries = [];
  for(var interaction = 0; interaction < participantsList.length; interaction++){
    graphCategories.push(interaction + 1);
    participantsSeries.push(participantsList[interaction]['participants']);
  }

  graphSeries.push({
    'name': 'Participants',
    'data': participantsSeries
  });
  return new  Highcharts.Chart(buildGraphOptions('Participants', graphSeries, graphCategories, ('bar-chart-2-' + campaign_code), campaignName));
}


function buildEngagementsChart(interactionsList, campaign_code, campaignName){
  var interactionSeries = [];
  var graphCategories = [];
  var graphSeries = [];
  for(var interaction = 0; interaction < interactionsList.length; interaction++){
    graphCategories.push(interaction + 1);
    interactionSeries.push(interactionsList[interaction]['engagements']);
  }

  graphSeries.push({
    'name': 'Engagements',
    'data': interactionSeries
  });

  return new  Highcharts.Chart(buildGraphOptions('Engagements', graphSeries, graphCategories, ('bar-chart-' + campaign_code), campaignName));
}

function buildOptions(chartText,interactionSeries, graphCategories, forRenderTo, campaignName){
  Highcharts.setOptions({
    colors: ['#8bbc21', '#00a99d', '#2f7ed8', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
  });
  return {
    chart: {
          renderTo: forRenderTo,
          type: 'column'
      },
      title: {
          text: chartText ,
          style: {
              fontSize: '16px',
              color: "#676a6c"
          }
      },
      xAxis: {
          categories: graphCategories,
          title: {
              text: ' per day'
              }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total ' + chartText,
              style: {
                  color: "#676a6c"
              }
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
              }
          }
      },
      legend: {
          enabled: false,
          layout: 'vertical',
          align: 'bottom',
          verticalAlign: 'bottom',
          borderWidth: 0,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#8bbc21'),
          shadow: true
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' + this.point.stackTotal;
          }
      },
      plotOptions: {
          column: {
              stacking: 'normal'
          }
      },
      series: interactionSeries,
      exporting: {
        filename: chartText + '-Per-Journey-' + campaignName,
            chartOptions: {
                chart: {
                  backgroundColor: '#FFFFFF',
                  color: '#8bbc21'
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                }
            }
        }
  };

}



function buildGraphOptions(title, series, categories, renderToID, campaignName){
  return buildOptions(title, series, categories, renderToID, campaignName);
}
