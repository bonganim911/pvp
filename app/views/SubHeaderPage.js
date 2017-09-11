import React, {Component} from 'react';

class SubHeaderPage extends Component {
  render(){
    const widgetName = window.sessionStorage.getItem("globalWigetName");
    const widgetId = window.sessionStorage.getItem("globalWigetId");
    const startDate = window.sessionStorage.getItem("globalStart");
    const endDate = window.sessionStorage.getItem("globaleand");
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>
            <span className="text-info">{widgetName}</span> - <span className="text-muted">{widgetId}</span>
          </h5>
          <div className="ibox-tools">
            <span>
               <small>Period: </small> <strong id="startdate_1">{startDate}</strong>
               <small> - </small> <strong id="enddate_1">{endDate}</strong>
             </span>&nbsp; &nbsp;
          </div>
        </div>
      </div>
      )
    }

}

export default SubHeaderPage;
