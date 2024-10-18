import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const recipePerPage = 8
  const totalPages = Math.ceil(allRecipes.length / recipePerPage)
  const currentPageLastRecipeIndex = currentPage * recipePerPage
  const currentPageStartRecipeIndex = currentPageLastRecipeIndex - recipePerPage
  const visibleRecipeCards = allRecipes?.slice(currentPageStartRecipeIndex, currentPageLastRecipeIndex)

  useEffect(() => {
    dispatch(fetchAllRecipes())
  }, [dispatch])

  // Navigate to next page
  const navigateToNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Navigate to previous page
  const navigateToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <Header insideHome={true} />
      <div className='container mt-5'>
        {
          loading ? 
          <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
            <img width={'100px'} height={'100px'} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="Loading..." />
            <span className='ms-2 fw-bold'>Loading...</span>
          </div>
          :
          <>
            <div style={{marginTop:"60px"}} className='row row-cols-1 row-cols-md-4 g-4'>
              {
                allRecipes.length > 0 ? 
                visibleRecipeCards?.map(recipe => (
                  <div key={recipe?.id} className='col'>
                    <div className='card h-100 shadow'>
                      <img src={recipe?.image} className='card-img-top' alt={recipe?.name} style={{ height: '300px', objectFit: 'cover' }} />
                      <div className='card-body text-center'>
                        <h5 className='card-title'>{recipe?.name}</h5>
                        <Link to={`/${recipe?.id}/view`} className='btn btn-primary'>View more</Link>
                      </div>
                    </div>
                  </div>
                )) 
                : 
                <div className='text-center mt-5 mb-5 text-danger fw-bold'>
                  Product Not Found!!!
                </div>
              }
            </div>
            {/* Pagination */}
            <div className='d-flex justify-content-center align-items-center mt-4'>
              <button onClick={navigateToPrevPage} className='btn btn-outline-secondary me-3' disabled={currentPage === 1}>
                <i className='fas fa-backward'></i> Previous
              </button>
              <span className='fw-bold'>{currentPage} of {totalPages}</span>
              <button onClick={navigateToNextPage} className='btn btn-outline-secondary ms-3' disabled={currentPage === totalPages}>
                Next <i className='fas fa-forward'></i>
              </button>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Home
