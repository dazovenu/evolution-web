import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutAndRedirect} from '../actions';

//import '../styles/core.scss';

export class App extends React.Component {

  render() {

    const {dispatch} = this.props;

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-typography--headline">Cards3</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to="/lobbies">Lobbies</Link>
              {!this.props.isAuthenticated ? ''
                : <a className="mdl-navigation__link" href='#' onClick={() => this.props.dispatch(logoutAndRedirect())}>Logout</a>}
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <li><Link to="/lobbies">lobbies</Link></li>
            {!this.props.isAuthenticated ? ''
              : <li><a href='#' onClick={() => this.props.dispatch(logoutAndRedirect())}>Logout</a></li>}
          </nav>
        </div>
        <main className="mdl-layout__content util--padding">
          <div className="page-content">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export const AppView = connect((state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
})(App);