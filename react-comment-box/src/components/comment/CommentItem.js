import React from 'react';
import {
  Panel,
  Row,
  Col,
} from 'react-bootstrap';
import Utils from '../../Utils.js';
import './comment.css';

class CommentItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const header = (
      <h4>
        <span> {this.props.comment.author}</span>
        <span className="timeText">
          {Utils.timestampFormatter(this.props.comment.createdTime)}
        </span>
      </h4>
    )

    return (
      <div className="commentItem">
        <Row>
          <Col sm={1}>
            <div>
              <a href="home">
                <img className="headImg" width="48px" height="48px"
                   src="https://facebook.github.io/react/img/logo.svg" />
              </a>
            </div>
          </Col>
          <Col sm={8}>
            <Panel header={header}>
              <div dangerouslySetInnerHTML={{__html: this.props.comment.content}}></div>
            </Panel>
          </Col>
        </Row>
      </div>
    )
  }
}

CommentItem.propTypes = {
  comment: React.PropTypes.object.isRequired
}

export default CommentItem;