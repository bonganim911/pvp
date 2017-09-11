  import React, {Component} from 'react';
  import {getTextGate} from '../api';
  import SubHeaderPage from './SubHeaderPage';

  class TextGatePage extends Component {
    constructor(props){
      super(props);
      this.state = {
          TextGateData: {}
      }
    }
     componentWillMount(){
      this.fetchTextGate();
    }

    fetchTextGate(){
      getTextGate("b65af91910b68bd4", "5967729549ac8700110001c2")
        .then(results => {
          this.setState({TextGateData: results})
        })
        .catch(error => {
          console.error(error);
        })
      }

    render(){
      let text_details;
      let label;
      if(!this.state.TextGateData){
        return (
          <div className="ibox float-e-margins">
                <div className="well well-lg text-center alert alert-danger">
                  <h1 className="topmargin-15">
                    Text Gate is currently not available.
                  </h1>
                </div>
              </div>
        )
      } else if(this.state.TextGateData && this.state.TextGateData.results){
        text_details = this.state.TextGateData.results.map((gate, index) => {
          return (
                <tr key={index}>
                    <td>{gate.display_name}</td>
                    <td>{gate.full_name}</td>
                    <td>{gate.answer} secs</td>
                </tr>

            )
      })
    }

    console.log('this is the map', this.state.TextGateData.results);
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
                this.state.TextGateData ?
                <div className="ibox float-e-margins" id="journey-panel-1">
                  <div className="ibox-title ibox-title-bold">
                      <div className="ibox-tools">
                      <h5 className="panel-title">
                           <span className="badge badge-info">Question: </span>&nbsp;
                            {this.state.TextGateData.label}
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
		              <div className="table-responsive">
		                    <table className="table table-striped table-condensed">
			                    <thead>
			                     <tr>
			                     <th>Display Name</th>
			                     <th>Full Name</th>
			                     <th>Answer</th>
			                     </tr>
			                    </thead>
			                     <tbody>
			                          {text_details}     
			                     </tbody>
		                    </table>
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

  export default TextGatePage;

