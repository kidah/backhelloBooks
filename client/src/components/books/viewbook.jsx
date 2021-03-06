import React from 'react';
import { Row, Col, Button, Modal } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SideBar from '../sidebar/sidebar.jsx';
import Header from '../header/header.jsx';
import BookForm from './bookForm.jsx';

const propTypes = {
  user: PropTypes.object,
  borrowBook: PropTypes.func,
  openEditBookModal: PropTypes.func,
  onDeleteBook: PropTypes.func,
  openUploadWidget: PropTypes.func,
  categories: PropTypes.array,
  onChange: PropTypes.func,
  states: PropTypes.object,
  saveBook: PropTypes.func
};

const Book = (props) => {
  const userRole = props.user.user.role;
  const userId = props.user.user.user;

  const userAction = currentBook => (
    <Button waves="light" className="amber darken-3"
      onClick={() => props.borrowBook(userId, currentBook.id)}>
            Borrow Book
    </Button>
  );

  const adminAction = currentBook => (
    <div className="valign-wrapper">
      <div className="">
        <span>
          <Link
            to="#"
            className="btn amber darken-3"
            onClick={() => props.openEditBookModal(currentBook)} >
            <i className="fa fa-edit fa-actions" />
          </Link>
        </span>
      </div>
      <div className="right-align">
        <span>
          <Link
            to="#"
            className="btn amber darken-3"
            onClick={() => props.onDeleteBook(currentBook.id)}>
            <i className="fa fa-trash fa-actions" />
          </Link>
        </span>
      </div>
    </div>
  );
  return (
    <div>
      <Header />
      <SideBar />
      <Modal
        id= "editBook">
        <BookForm
          saveBook = {props.saveBook}
          onChange={props.onChange}
          states={props.states}
          categories={props.categories}
          openUploadWidget = {props.openUploadWidget}
        />
      </Modal>
      <div className="books-container">
        <span>
          <h2>{props.states.title}</h2>
        </span>

        <Row>
          <Col s={12} m={4} l={4}>
            <img src={props.states.image} role="presentation"/>
            <div>
              { userRole === "user" ? userAction(props.states) : adminAction(props.states) }
            </div>
          </Col>
          <Col s={12} m={8} l={8}>
                         Author: {props.states.author}
            <p>Category: {props.states.category}</p>
            <p>Published By: {props.states.publisher}</p>
            <p>ISBN: {props.states.ISBN}</p>
            <p>Edition: {props.states.bookEdition}</p>
            <p>Size: {props.states.bookSize} pages </p>
            <p>Quantity: {props.states.quantity}</p>
                      *********
            <p>Description: {props.states.description}</p>

          </Col>

        </Row>
      </div>
    </div>
  );
};

Book.propTypes = propTypes;

export default Book;
