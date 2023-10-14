import React, { useState } from 'react'

const Search = ({search}) => {
  const [value,setValue]=useState("")
  const handleForSubmit=(e)=>{
    e.preventDefault();
    // debugger
    search(value)
    setValue("")
  }
  return (
    <>
    <div className="mt-5 border-2 rounded-[5px] m-2 p-4">
    <form className="flex flex-col" onSubmit={handleForSubmit}>
        <label>Search...</label>
        <input type="search" placeholder="Search..." className="w-full h-[25px] border-2 mt-2 p-4"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
      </form>
    </div>
    </>
  )
}

export default Search
