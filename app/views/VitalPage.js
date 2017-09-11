import React, { Component } from 'react';
import {getVital} from '../api';
import Vital from './Vital';

class VitalPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        widgetInformation: {}
    }
  }
  componentWillMount(){
    window.sessionStorage.setItem("widgetId","b65af91910b68bd4");
    window.sessionStorage.setItem("token","58ece3686a8b0a00140003ef");
    this.fetchVital();
  }

  fetchVital(){
    getVital(window.sessionStorage.getItem("widgetId"), window.sessionStorage.getItem("token"))
      .then(results => {
        this.setState({widgetInformation: results.widget_summary})
        console.log('recieved the vital data', results.widget_summary);
      })
      .catch(error => {
        console.error(error);
      })
    }
    render(){
      const dataInformation = this.state.widgetInformation[0];
        if(!dataInformation){
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
          <div>
            {
              <Vital data={dataInformation}  />
            }
          </div>

        )
    }
}

export default VitalPage;
