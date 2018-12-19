import React,  { Component } from 'react';
import { setStorage, getStorage } from '../../helpers'
import Comment from '../Comment';
import CommentsContainer from './CommentsContainer';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], comment: '' };
  }

  componentDidMount() {
    const { id } = this.props;
    const comments = getStorage(`comments${id}`);
    if (comments) {
      this.setState({ comments });
    }
  }

  change = ({ target: { value } }) => {
    this.setState({ comment: value });
  }

  saveComment = e => {
    const { comments, comment } = this.state,
      { id } = this.props;
    comments.push(comment);
    setStorage(`comments${id}`, comments);
    this.setState({ comments, comment: '' });
    e.preventDefault();
  }

  render() {
    const { comments, comment } = this.state;
console.log(this.props);
    return (
      <CommentsContainer>
        <h3>Comments</h3>
        {comments.length > 0 &&
          comments.map((com, i) => <Comment key={`${com[0]}-${i}`}>{com}</Comment>)
        }
        <form name="add-review" onSubmit={this.saveComment}>
          <label htmlFor="review">Add your review</label>
          <textarea id="review" name="review" onChange={this.change} value={comment} />
          <button type="submit" disabled={!comment}>Save Comment</button>
        </form>
      </CommentsContainer>
    )
  }
};

export default Comments;
