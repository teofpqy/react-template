import React, { Component } from 'react';
import { actions } from 'data/repository';
import styles from './style.css';

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      filter: {
        q: '',
        sort: '',
        order: 'desc',
      },
      repositories: [],
    };
    this._handeChange = this._handeChange.bind(this);
  }

  _handeChange(event) {
    const {filter} = this.state;
    filter.q = event.target.value
    this.setState({ filter });
  }

  _onClickSearchButton() {
    actions.fetchRepositories(this.state.filter).
      then((x) => this.setState({repositories: x.items}));
  }

  render() {
    const { filter, repositories } = this.state;
    return <div className={styles.Hello}>
      <input value={filter.q} onChange={this._handeChange} />
      <button onClick={()=> this._onClickSearchButton()}>search</button>
      {
        repositories.map((x) => <div>{x.full_name}</div>)
      }
    </div>;
  }
}

export default Hello;
