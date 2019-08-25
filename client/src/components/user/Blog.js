import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, Button, Container, Form } from "react-bootstrap";
import ListPost from "../posts/ListPost";
import "./blog.scss";

const Blog = ({ posts, auth }) => {
   const inputRef = useRef(null);
   const [search, setSearch] = useState("");
   const [display, setDisplay] = useState(false);

   const handleChange = e => {
      setSearch(inputRef.current.value.toLowerCase());
   };

   // setting no post found after waiting for a second
   useEffect(() => {
      setTimeout(() => {
         if (posts.length === 0) setDisplay(true);
      }, 1000);
   }, [posts]);

   return (
      <React.Fragment>
         <div className="mx-3">
            <Nav className="justify-content-between mt-2 mb-2">
               {auth && (
                  <Link to="/blog/post/create">
                     <Button variant="light" className="styleBtn">
                        +
                     </Button>
                  </Link>
               )}
               <Form>
                  <Form.Group controlId="searchBar">
                     <Form.Control
                        type="text"
                        placeholder="Search Post..."
                        style={{ height: 40 }}
                        ref={inputRef}
                        onChange={handleChange}
                     />
                  </Form.Group>
               </Form>
            </Nav>
         </div>
         {posts.length > 0 ? (
            <ListPost
               posts={posts.filter(post =>
                  post.title.toLowerCase().includes(search)
               )}
            />
         ) : (
            display && (
               <Container
                  style={{ height: "50vh" }}
                  className="d-flex flex-column justify-content-center align-items-center"
               >
                  {" "}
                  <p className="text-secondary h3">No Post Found !</p>
               </Container>
            )
         )}
      </React.Fragment>
   );
};

Blog.propTypes = {
   auth: PropTypes.bool.isRequired,
   posts: PropTypes.array.isRequired
};

export default Blog;
