import React, { useState } from 'react';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const BookList = ({ books, deleteBook, markBookAsTaken }) => {

    const [paginationConfig, setPaginationConfig] = useState({
        page: 0,
        size: 5
    });

    const offset = paginationConfig.size * paginationConfig.page;
    const nextPageOffset = offset + paginationConfig.size;
    const pageCount = Math.ceil(books.length / paginationConfig.size);

    const renderBooks = (offset, nextPageOffset) => {
        return books.map(book => {
            return <BookItem key={book.id} book={book} deleteBook={deleteBook} markBookAsTaken={markBookAsTaken} />
        }).filter((book, idx) => {
            return idx >= offset && idx < nextPageOffset;
        });
    }

    const handlePageChange = (data) => {
        let selected = data.selected;
        setPaginationConfig({ ...paginationConfig, page: selected });
    }

    return (
        <div className='container mt-3'>
            <Link
                className='btn btn-primary'
                to='/books/add'
            >
                Add a Book
            </Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Author Country</th>
                        <th>Available Copies</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderBooks(offset, nextPageOffset)}
                </tbody>
            </table>
            <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               previousClassName={"page-link"}
                               nextClassName={"page-link"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={handlePageChange}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}
            />
        </div>
    );
}

export default BookList;