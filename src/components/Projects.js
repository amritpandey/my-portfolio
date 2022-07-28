import React from 'react';
import weatherImg from '../images/weather.png';
import mealSharingImg from '../images/mealSharing.png';
import simplySpices from '../images/simplySpices.png';
import searchProduct from '../images/searchProduct.png';

export const Projects = () => {
    return (
        <div>

            <article className='weather'>
                
                <div>
                <h2>World Weather App</h2>
                <p>A web app for checking the current weather and tomorrow’s forecast. Created using Next.js, React and TypeScript and an API.</p>
                </div>
                <div>
                    <img className='weather-img' src={weatherImg} alt='weather-img'></img>
                </div>
            </article>

            <article className='meal-sharing'>
                
                <div>
                <h2>Meal sharing APP</h2>
                <p>This dynamic project was build with React.js, node.js, Sql, Javascript, css and Html.</p>
                </div>
                <div>
                    <img className='meal-sharing-img' src={mealSharingImg} alt="meal-sharing-img"></img>
                </div>
            </article>

            <article className='simply-spices'>
                
                <div>
                <h2>Simply Spices Web Shop App</h2>
                <p>This webshop is developed using React.js, css, node.js, knex.js, mySql and can be used as a real web based application.</p>
                </div>
                <div>
                    <img className='simply-spices-img' src={simplySpices} alt="simply-spices-img"></img>
                </div>
            </article>
            <article className='search-product'>
            
                <div>
                <h2>Search Product App</h2>
                <p>This is beautiful website for selection of spices</p>
                </div>
                <div>
                    <img className='search-product-img' src={searchProduct} alt="search-product-img"></img>
                </div>
                
            </article>
        </div>
    )
}
