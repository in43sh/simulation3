import React, { Component } from 'react';
import './Home.css';
import homepic from './homepic.png';
import search from './search.png';
import me from './me.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="nav_parent_container orange-gradient">
          <div className="nav_child_container">
            <div className="nav_child_left">
              <div className="nav_title_helo">Helo</div>
              {/* competency 22C-4 */}
              <img className="nav_home_img" src={ homepic } alt="home" /> {/* competency 54E */} {/* competency 54G */}
              <img className="nav_search_img" src={ search } alt="search" />
            </div>
            <div className="nav_child_mid">
              {/* competency 54C */}
              <span className="nav_title_dashboard">
                Dashboard
              </span>
            </div>

            <div className="nav_child_right">
              <span className="nav_logout">Logout</span>
            </div>
          </div>
        </div>

        <div className="dashboard_parent_container">
          <div className="dashboard_child_container">
            <div className="dashboard_child_top">
              <div className="user_container content-container">
                <div className="user_left">
                  <img className="user_img" src={ me } alt="me" />
                </div>
                <div className="user_right">
                  <span className="user_first_name">
                    Sergey
                  </span>
                  <span className="user_last_name">
                    Sergey
                  </span>
                  <button className="btn_edit grey-btn">
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="dashboard_welcome_container content-container">
                <span>
                  Welcome to Helo! Find recommended friends based on your 
                  similarities, and even search for them by name. The more you 
                  update your profile, the better recommendations we can make!
                </span>
              </div>
            </div>
            <div className="dashboard_recommended_parent">
              <div className="dashboard_recommended_child content-container">
                <div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}