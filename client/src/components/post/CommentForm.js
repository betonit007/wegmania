import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ addComment, postId }) => {

    const [text, setText] = useState('');

    return (
        <div className="post-form">
            <div className="post-form-header bg-primary">
                <h3>Leave a comment...</h3>
            </div>
            <form className="form my-1" onSubmit={e => {
                e.preventDefault();
                addComment({ text }, postId);
                setText('');
            }}>
                <textarea
                    cols="30"
                    rows="5"
                    placeholder="Create a post"
                    value={text}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
                <input type="submit" value="Submit" className="btn btn-dark my-1" />
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm)
