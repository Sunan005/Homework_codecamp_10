import React, { Component } from 'react'

export class Article extends Component {
    static getDerivedStateFromProps(props, state) {
      console.log("[Article.js] getDerivedStateFromProps");
      return state;
    };

    shouldComponentUpdate(nextProps, nextState) {
      console.log("[Article.js] shouldComponentUpdate");
      return true;
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("[Article.js] getSnapShortBeforeUpdate")
        return {x: 0, y: 0}
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("[Article.js] Component DidUpdate", snapshot)
    }

    render() {
      console.log("[Article.js] Render")
      return (
        <div>
            {this.props.article}
        </div>
      );
    };
};

export default Article
