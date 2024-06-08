import React from 'react'

export default function Favourite({ addfav }) {
    return (
        <div>
            {
                addfav.map((book,index) => {
                    return (
                        <div key={index} className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4">
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
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
