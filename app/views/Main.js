import React, { Component } from 'react';
import {getVital} from '../api';
import Vital from './Vital';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
        widgetInformation: {}
    }
  }
  componentWillMount(){
    this.fetchVital();
  }

  fetchVital(){
    getVital('b65af91910b68bd4', '58ece3686a8b0a00140003ef')
    // getVital(this.props.match.params.id,this.props.match.params.token)
      .then(results => {
        this.setState({widgetInformation: results.widget_summary})
        console.log('recieved the vital data', results.widget_summary);
      })
      .catch(error => {
        console.error(error);
      })
    }
    render(){
      console.log('check here', this.state.widgetInformation[0]);
      const dataInformation = this.state.widgetInformation[0];
      console.log(this.state.widgetInformation[0]);
        return (
          <div>
            {
              dataInformation !== 'undefined' ? <Vital data={dataInformation}  />:
              null
            }
          </div>

        )
    }
}

export default Main
