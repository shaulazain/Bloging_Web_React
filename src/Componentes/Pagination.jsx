import React from 'react'

const Pagination = ({onPageChange, currentPage, blogs, pagesize}) => {
    const totalPages = Math.ceil(blogs.length / pagesize)
    // console.log(totalPages)


    const renderPaginationLink = () =>{
        return Array.from({length: totalPages}, (_ , i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "activerpagination": ""}>
                <a href="#" onClick={() => onPageChange(pageNumber) }> {pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previuos</button>
        </li>
        <div className='flex'> {renderPaginationLink()}</div>
        <li>
            <button onClick={() => onPageChange(currentPage + 1)} disabled = {currentPage === totalPages} >Next</button>
        </li>
    </ul>
  )
}

export default Pagination
