import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Meals = ({ foods }) => {
    // console.log(foods);
    const { idMeal,strMealThumb,strMeal ,strInstructions} = foods;
    return (
        <div>
        
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {strInstructions.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
                    <NavLink style={{textDecoration:'none'}} to={`/details/${idMeal}`}>
                        <Button sx={{ px: 12, mx: 2 }} variant="contained">Show Details</Button>

                    </NavLink>
      </CardActions>
    </Card>
        </div>
    );
};

export default Meals;