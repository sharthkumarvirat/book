import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home({ apiData, pending, addtoFav, setSearch, setPending }) {

    const handleSearch = (e) => {
        setTimeout(() => {
            setSearch(e.target.value);
            setPending(true);
        }, 2000);
    }

    return (
        <div className='p-6'>
            <div className='flex items-center justify-center w-full gap-4'>
                <Link to='/favourite'><button className='btn btn-primary'>Favorites</button></Link>
                <input type="text" placeholder="Type here" onChange={(e) => { handleSearch(e) }} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 mt-10">
                {
                    !pending && apiData.map((element, index) => {
                        return (
                            <div key={index} className="card w-full p-4 border-4 border-gray-500">
                                <div className="card-body">
                                    <h2 className="card-title text-lg">{element.title}</h2>
                                    <div className="flex flex-wrap">
                                        {element.author_name.map((name, index) => {
                                            return (
                                                <h1 key={index} className="author-name font-normal text-base">{name}</h1>
                                            )
                                        })}
                                    </div>
                                    <p className="font-normal text-sm text-gray-600">Edition Count - {element.edition_count}</p>
                                    <div className="flex justify-end">
                                        <button className="btn btn-outline btn-primary" onClick={() => { addtoFav(element) }}>Add to Favorites</button>
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
