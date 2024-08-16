import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchProducts = (page) => {
        setLoading(true);
        fetch(`http://localhost:5000/products?page=${page}&limit=9`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setProducts(data.products);
                setTotalPages(data.totalPages);
                setCurrentPage(data.currentPage);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full'>
                {products.map(product => (
                    <div key={product._id} className="card card-compact w-auto bg-base-100 shadow-xl text-left">
                        <figure className='w-56 h-56 md:w-60 lg:w-64 mx-auto block'>
                            <img src={product.productImage} alt={product._id} className="object-cover w-full h-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-secondary ">
                                {product.productName}
                                <div className="badge badge-secondary"><FaStar /> {product.ratings} </div>
                            </h2>
                            <p className='text-base md:text-lg lg:text-lg font-bold text-purple-600 text-right'>
                                - by   
                                <span className='border-2 border-purple-600 ml-1 font-bold px-2 rounded-2xl text-black'> {product.brand}</span>
                            </p>
                            <p className='text-base md:text-lg lg:text-lg'>{product.description}</p>
                            <p className='text-base md:text-lg lg:text-lg'><b> Price:</b> {product.price} $</p>
                            <p className='text-base md:text-lg lg:text-lg'><b> Category :</b> {product.category}</p>
                            <p className='text-base md:text-lg lg:text-lg'><b> Posted Date: </b> {product.creationDate}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-6">
                <button 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1} 
                    className="btn btn-primary mr-2"
                >
                    Prev
                </button>
                {[...Array(totalPages).keys()].map(number => (
                    <button 
                        key={number} 
                        onClick={() => setCurrentPage(number + 1)} 
                        className={`btn ${currentPage === number + 1 ? 'btn-active' : ''}`}
                    >
                        {number + 1}
                    </button>
                ))}
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages} 
                    className="btn btn-primary ml-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllProducts;
