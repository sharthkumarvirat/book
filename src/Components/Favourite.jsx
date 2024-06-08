import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Favourite({ deleteFromFav }) {

    const [addFav, setAddFav] = useState(JSON.parse(localStorage.getItem('books')) || []);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('books'))
        setAddFav(data);
    }, [])

    return (
        <div>
            <div className='flex items-center justify-center'>
                <Link to="/"> <button className='btn btn-primary'> Home </button></Link>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 mt-10'>
            {
                addFav.map((book, index) => {
                    return (
                        <div key={index} className="card w-full p-4 border-4 border-gray-500">
                            <div className="card-body">
                                <h2 className="card-title text-lg">{book.title}</h2>
                                <div className="flex flex-wrap">
                                    {book.author_name.map((name, index) => {
                                        return (
                                            <h1 key={index} className="author-name font-normal text-base">{name}</h1>
                                        )
                                    })}
                                </div>
                                <p className="font-normal text-sm text-gray-600">Edition Count - {book.edition_count}</p>
                                <div className="flex justify-end">
                                    <button className="btn btn-outline btn-primary" onClick={() => { deleteFromFav(book.key) }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
