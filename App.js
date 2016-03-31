import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'This is content'
    };
  }
  updateTitle(e){
    this.setState({title: e.target.value});
  }
  updateTitleByClass(e){
    var newTitle = ReactDOM.findDOMNode(this.refs.title).value;
    this.setState({title: newTitle});
  }
  render(){
    let title = this.state.title;
    let content = this.props.content;
    let updateTitle = this.updateTitle.bind(this);

    return (
      <div>
        <Widget title={title} content={content} updateTitle={updateTitle}/>
        <Silder ref="title" updateTitleByClass={this.updateTitleByClass}/>
      </div>
    );
  }
}

App.propTypes = {
  content: React.PropTypes.string
};

App.defaultProps = {
  content: 'Content'
};

const Widget = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <input type="text" onChange={props.updateTitle} />
    </div>
  );
};

class Silder extends React.Component {
  render(){
    return (
      <input type="range" min="0" max="100" onChange={this.props.updateTitleByClass} />
    );
  }
}

export default App;
