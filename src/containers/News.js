import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews } from '../actions';
import { bindActionCreators } from 'redux';

class News extends Component {

  componentDidMount() {
    this.props.selectedNews(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSelectedNews();
  }

  renderNews = ({ selected }) => {
    if (selected) {
      return selected.map((item) => {
        return (
          <div key={item.id}>
            <div className="tags">
              <span>
                <i className="fa fa-eye">
                  {item.views}
                </i>
              </span>
              <span>
                <i className="fa fa-thumbs-up">
                  {item.likes[0]}
                </i>
              </span>
              <span>
                <i className="fa fa-thumbs-down">
                  {item.likes[1]}
                </i>
              </span>
            </div>
            <div className="top">
              <h2>{item.title}</h2>
              <span>Article by: <strong>{item.author}</strong></span>
            </div>
            <img src={`/images/articles/${item.img}`} alt="{item.title}" />
            <div className="body_news">
              {item.body}
            </div>
            <div></div>
          </div>
        )
      });
    }
  }

  render() {
    return (
      <div className="news_container">
        {this.renderNews(this.props.articles)}
      </div>
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
