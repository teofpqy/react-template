import React, { Component } from 'react';
import { actions } from 'data/repository';
import { Pastore, makeOnlyContainer} from 'pastate';

const initState = {
  repositories: [],
}
const store = new Pastore(initState);

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      filter: {
        q: '',
        sort: '',
        order: 'desc',
      }
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
      then((x) => store.state.repositories = x.items);
  }

  render() {
    const { filter } = this.state;
    const { state } = store;
    return <div>
      <input value={filter.q} onChange={this._handeChange} />
      <button onClick={()=> this._onClickSearchButton()}>search</button>
      {
        state.repositories.map((x) => <div>{x.id}</div>)
      }
    </div>;

  }
}


export default makeOnlyContainer(Hello, store);
