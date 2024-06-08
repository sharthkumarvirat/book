import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home({ apiData, pending, addtoFav }) {
    // const [apiData, setApiData] = useState([]);
    // const [pending, setPending] = useState(true);
    // const [addFav,setAddFav]=useState(JSON.parse(localStorage.getItem('books')) || [])
    // useEffect(() => {
    //     fetchingData()
    // }, [])
    // const fetchingData = () => {
    //     fetch(`https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`)
    //         .then((resp) => {
    //             if (resp.ok === false) {
    //                 throw Error("Searching data is not found")
    //             } return resp.json();
    //         })
    //         .then((data) => {
    //             console.log(data.docs);
    //             setApiData(data.docs);
    //             setPending(false);
    //         })

    // }
    // const addtoFav=(elment)=>{
    //      let updateBook =[...addFav,elment]
    //      setAddFav(updateBook);
    //      localStorage.setItem("books",JSON.stringify(updateBook));
    // };

    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Link to='/favourite'><h1>Fav</h1></Link>
            {
                !pending && apiData.map((element, index) => {
                    return (
                        <div key={index} className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border-4">
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
                                    <button className="btn" onClick={() => { addtoFav(element) }}>Add to Favorites</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}
