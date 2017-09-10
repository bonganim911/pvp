let baseUrl;
let baseV2Url;
let env_url;

function getUrl(){
  console.log(process.env);
  if(process.env.NODE_ENV === 'development'){
    env_url = "https://galdaganystage.urup.com:4430/api/reports/"
  }else{
    // env_url = "https://reporting.urup.com:4430/api/reports/"
    env_url = "https://galdaganystage.urup.com:4430/api/reports/"
  }

  return env_url;
}

export function getVital (token, widgetId) {
  const url = getUrl() + "v2?request=CampaignDailySummary&args=" +
              "{\"widget_id_list\":[" + JSON.stringify(widgetId)  +
               "],\"platform\":" + "\"produk\"" +
               " ,\"token\":" + JSON.stringify(token) + "}";
  console.log(url);
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(results => {
      console.log(results);
      console.log(results.data.results[0]);
      return results.data.results[0];
    })
}


export function getLeaderboard (token, widgetId) {
  const url = getUrl() + "composite?request=GetWidgetLeaderboard&args=" +
              "{\"widget_id_list\":[" + JSON.stringify(widgetId)  +
               "],\"platform\":" + "\"produk\"" +
                " ,\"token\":" + JSON.stringify(token) + "}";
  console.log(url);
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(results => {
      console.log(results.data);
      console.log(results.data.results);  
      return results.data.results[0];
    })
}

function checkStatus (response){
  if(response.status >= 200 && response.status < 300) {
    return response;
  }else {
    const error = new Error(response.statusText);
    console.error(error);
    error.response = response;
    throw error;
  }
}

function parseJSON (response){
  return response.json();
}
