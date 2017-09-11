import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Public View Portal</strong>
                             </span> 
                              </span> </a>
                            </div>
                            <div className="logo-element">
                                PVP 
                            </div>
                        </li>
                        <li className={this.activeRoute("/vitals")}>
                            <Link to="/vitals"><i className="fa fa-flask"></i> <span className="nav-label">Vitals</span></Link>
                        </li>
                        <li className={this.activeRoute("/leaderboard")}>
                            <Link to="/leaderboard"><i className="fa fa-flag-checkered"></i> <span className="nav-label">Leaderboad</span></Link>
                        </li>
                        <li className={this.activeRoute("/poll")}>
                            <Link to="/poll"><i className="fa fa-filter"></i> <span className="nav-label">Poll</span></Link>
                        </li>
                        <li className={this.activeRoute("/textgate")}>
                            <Link to="/textgate"><i className="fa fa-tasks"></i> <span className="nav-label">Text Gate</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation