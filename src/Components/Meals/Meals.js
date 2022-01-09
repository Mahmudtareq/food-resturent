import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const Meals = ({ foods }) => {
    // console.log(foods);
    const { idMeal,strMealThumb,strMeal ,strInstructions} = foods;
    return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="mb-2"
    >
      
        
    <Card sx={{ maxWidth: 345,mb:2 }}>
      <CardMedia
        component="img"
        height="190"
        image={strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {strMeal}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
         {strInstructions.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
                    <NavLink style={{textDecoration:'none'}} to={`/details/${idMeal}`}>
                        <Button sx={{ px: 8, mx: 2 }} variant="contained">Show Details</Button>

                    </NavLink>
      </CardActions>
          </Card>
    </motion.div>
    );
};

export default Meals;