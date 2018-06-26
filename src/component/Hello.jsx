import React, { Component } from 'react';
import { actions } from 'data/session';
import styles from './style.css';

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      filter: {
        page: 1,
        category: 1,
        type: 0,
        session_status: 1,
        name: '',
      },
      repositories: [],
    };
    this._handeChange = this._handeChange.bind(this);
  }

  _handeChange(event) {
    const { filter } = this.state;
    filter.q = event.target.value;
    this.setState({ filter });
  }

  _onClickSearchButton() {
    actions.fetchSession(this.state.filter).then(x => this.setState({ repositories: x.items }));
  }

  render() {
    const { filter, repositories } = this.state;
    return (
      <div className={styles.Hello}>
        <input value={filter.name} onChange={this._handeChange} />
        <button onClick={() => this._onClickSearchButton()}>search</button>
        {repositories.map(x => <div>{x.full_name}</div>)}
      </div>
    );
  }
}

export default Hello;
