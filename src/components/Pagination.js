import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {
  const {page , handlePageChange , totalPage} = useContext(AppContext);
  return (
    <div>
      <div>
        {
          page>1 && 
          <button onClick={()=> handlePageChange(page-1)}>
            Previous
          </button>
        }
        {

          page<totalPage &&
          <button onClick={()=> handlePageChange(page+1)}>
            Next
          </button>
        }
        <button>Page {page} of {totalPage}</button>
      </div>
    </div>
  )
}

export default Pagination




