import React, { useState } from 'react'
import InputBox from './InputBox';

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    <InputBox searchTerm ={searchTerm} setSearchTerm={setSearchTerm}/>


    </>
  )
}

export default SearchBox