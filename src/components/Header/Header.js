import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-primary-subtle">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    aria-current="books" 
                    to="/"
                >
                    Book Store
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link 
                                className="nav-link active" 
                                aria-current="books" 
                                to="/books"
                            >
                                Books
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/categories"
                                className="nav-link"
                            >
                                Categories
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;