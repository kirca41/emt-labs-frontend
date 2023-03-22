import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book, deleteBook, markBookAsTaken }) => {

    const handleDelete = () => {
        deleteBook(book.id);
    }

    const handleMarkAsTaken = () => {
        markBookAsTaken(book.id);
    }

    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.category}</td>
            <td>{`${book.author.name} ${book.author.surname}`}</td>
            <td>{book.author.country.name}</td>
            <td>{book.availableCopies}</td>
            <td className='d-flex justify-content-around'>
                <Link 
                    to={`/books/edit/${book.id}`}
                    className='btn btn-success'
                >
                    Edit
                </Link>
                <button 
                    className='btn btn-danger'
                    onClick={() => handleDelete()}
                >
                    Delete
                </button>
                <button 
                    className='btn btn-info'
                    onClick={() => handleMarkAsTaken()}
                >
                    Mark As Taken
                </button>
            </td>
        </tr>
    );
}

export default BookItem;