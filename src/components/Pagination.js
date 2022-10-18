import React from 'react'
import { useGlobalContext } from './ContextApi'

const Pagination = () => {
  const {page, getPreviousPage, getNextPage, nbPages} = useGlobalContext();
  return (
    <div>
      <button onClick={getPreviousPage}>Prev</button>
      <p>{page + 1} of {nbPages} pages</p>
      <button onClick={() => getNextPage()}>Next</button>
    </div>
  )
}

export default Pagination