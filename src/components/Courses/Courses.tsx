import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

export default class Courses extends React.Component {
  public render() {
    return (
      <>
        <div>
          <br />
          <span>
            <h1 style={{ paddingLeft: '80px' }}>Courses </h1>
          </span>
          <div className="line">
            <span></span>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/courses/mpsc">
                <div className="nav-link">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/MPSC-02.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3
                    style={{
                      textAlign: 'center',
                      paddingTop: '20px'
                    }}
                  >
                    MPSC
                  </h3>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses/upsc">
                <div className="nav-link">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/UPSC.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3
                    style={{
                      textAlign: 'center',
                      paddingTop: '20px'
                    }}
                  >
                    UPSC
                  </h3>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses/banking">
                <div className="nav-link">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/Banking-Courses.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3
                    style={{
                      textAlign: 'center',
                      paddingTop: '20px'
                    }}
                  >
                    BANKING
                  </h3>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses/ssc">
                <div className="nav-link">
                  <img
                    width="255"
                    height="300"
                    src="https://theuniqueacademy.com/wp-content/uploads/2017/10/SSC-Courses.png"
                    alt=""
                    className="coursesHover"
                  />
                  <h3
                    style={{
                      textAlign: 'center',
                      paddingTop: '20px'
                    }}
                  >
                    SSC
                  </h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
