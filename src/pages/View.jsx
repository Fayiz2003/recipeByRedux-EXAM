import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const View = () => {

  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  // Get products from session storage
  useEffect(() => {
    if (sessionStorage.getItem("allRecipes")) {
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipe(allRecipes.find(item => item.id == id))
    }
  }, [id])


  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center mx-5 mt-5" style={{ minHeight: '90vh' }}>
        <div className="row g-5">
          <div className="col-md-6">
            <img width={'570px'} src={recipe?.image} alt={recipe?.title} className="img-fluid mt-5" style={{ height: '', objectFit: 'cover' }} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3>ID : {recipe?.id}</h3>
            <h1 className="display-4 fw-bold my-3">{recipe?.name}</h1>
            <h4 className="fw-bold text-danger mb-3">Rating: {recipe?.rating}</h4>
            <p className="text-justify">
              <span className="fw-bold">Ingredients:</span> {recipe?.ingredients}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
