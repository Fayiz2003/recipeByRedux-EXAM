import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/slices/recipeSlice'

const Header = ({ insideHome }) => {
  const dispatch = useDispatch()

  return (
    <nav style={{backgroundColor:'orangered'}} className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand text-white fw-semibold fs-3' to={'/'}> <span id='nav'>
         RECIPE HUT 
        </span>
          <i class="fa-solid fa-bowl-food text-light"></i>
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            {
              insideHome && 
              <li className='nav-item'>
                <input 
                  onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))} 
                  className='form-control me-2 rounded' 
                  style={{ width: '300px' }} 
                  type='search' 
                  placeholder='Search Recipes here!' 
                />
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
