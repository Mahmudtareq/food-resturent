import React, { useEffect, useState } from 'react';
import "./Restaurant.css";
import {TextField ,Container, Grid, Input} from '@mui/material';
import Meals from '../Meals/Meals';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            .catch((error) => console.log(error));
    },[searchText])
    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
        
    }
    return (
        <Container>
            <div className="search Container ">
                <Input
                    sx={{width:500 , mb:3}}
                    variant="outlined"
                    placeholder='Search Meals'
                    onChange={handleSearchField}
                />
                
                  <div className='food-mapping'>
                 {
                        meals.map(foods=> <Meals
                            foods={foods}
                            key={foods.idMeal}
                        >  
                       </Meals>)
                    }

            </div>
                
            </div>
          

                {/* <Grid spacing={2}>
                   
                </Grid> */}

           
            
        </Container>
    );
};

export default Restaurant;