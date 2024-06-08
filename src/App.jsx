
import { useEffect, useState } from 'react';
import './App.css'
import Home from './Components/Home'
import Favourite from './Components/Favourite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [apiData, setApiData] = useState([]);
  const [pending, setPending] = useState(true);
  const [addFav, setAddFav] = useState(JSON.parse(localStorage.getItem('books')) || [])
  useEffect(() => {
    fetchingData()
  }, [])

  const fetchingData = () => {
    fetch(`https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`)
      .then((resp) => {
        if (resp.ok === false) {
          throw Error("Searching data is not found")
        } return resp.json();
      })
      .then((data) => {
        console.log(data.docs);
        setApiData(data.docs);
        setPending(false);
      })

  }
  const addtoFav = (elment) => {
    let updateBook = [...addFav, elment]
    setAddFav(updateBook);
    localStorage.setItem("books", JSON.stringify(updateBook));
  };

  return (
    <>
 <BrowserRouter basename='/'>
 <Routes>
  <Route path='/' element={<Home apiData={apiData} pending={pending}  addtoFav={addtoFav} />} />
  <Route path='/favourite' element={ <Favourite addFav={addFav}/>}/>
 </Routes>
 </BrowserRouter> 
    </>
  )
}

export default App
