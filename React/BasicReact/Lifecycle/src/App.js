import './App.css';
import React from 'react';
import Article from './Component/Article';

class App extends React.Component {
  constructor(props){
    console.log("[App.js] Constructor")
    super(props);
    this.state = {
      isShow: true,
      article: "Hello My Javascript World!"
    };
  };

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js].js] getSnapShortBeforeUpdate");
      return {x: 0, y: 0}
  };

  componentDidMount(){
    console.log("[App.js] Component DidMount");
  };

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[App.js] Component DidUpdate", snapshot)
 }

  onChangVisible = () => {
    this.setState(prevState => ({

      isShow: !prevState.isShow

    }));
  };
  
  render() {
    console.log("[App.js] Render");
    return (
      <div className="App">
        <button onClick={ ()  => {this.onChangVisible()}}>Show/Hide</button>
        <input value={this.state.article} onChange={(e) => this.setState({article:e.target.value})}/>
        {(this.state.isShow) ? <Article article={this.state.article}/> : null}
      </div>
    );
  };
};

export default App

