import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
         <Card.Body className="postCover">
            <Card.Title className="text-center p-5">{post.title}</Card.Title>
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">Posted on: {postDate}</small>
         </Card.Footer>
      </Card>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;
