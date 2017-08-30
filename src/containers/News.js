import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews } from '../actions';
import { bindActionCreators } from 'redux';

class News extends Component {

  componentDidMount() {
    this.props.selectedNews(this.props.match.params.id);
  }

  componentWillMount() {
    this.props.clearSelectedNews();
  }

  render() {
    return (
      <div>Articles</div>
    );
  }
}

function mapStateToProps(state){
  return {
    articles: state.articles,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News);