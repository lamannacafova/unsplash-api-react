import React, { useState } from 'react'
import Search from './components/search/Search'
import searchImages from './components/api/api'
import ImageList from './components/imageList/ImageList'

const App = () => {
  const [images,setImages]=useState([])
  const handleSubmit = async (term) => {
    // debugger
    // console.log(term);
   const result= await searchImages(term)
   setImages(result)
  }
  return (
    <>
      <Search search={handleSubmit}/>
      <ImageList images={images}/>
    </>
  )
}

export default App
