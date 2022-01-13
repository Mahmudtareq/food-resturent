import { Typography,Container,Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import BackHome from '../BackHome/BackHome';
import './AddNewMeal.css';

const AddNewMeal = () => {
    const { register, handleSubmit, reset } = useForm();
    const [oderPlaceSuccess, setOrderPlaceSuccess] = useState(false);
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        alert('Added New Food  Successfully');
        reset();
    }
    // console.log(watch("example"));

    return (
        <>
            <Container sx={{my:5}}>
                <BackHome></BackHome>
            </Container>
         <Container sx={{ py:3}}>
        <div className="add-service">
            <Typography variant="h5" sx={{my:3,color:'primary.main'}}>
                ADD A NEW FOOd 
            </Typography>
            
    <form onSubmit={handleSubmit(onSubmit)}>
     <input {...register("name", { required: true, maxLength: 20 })} placeholder="Food Name" />
     <input {...register("area", { required: true, maxLength: 20 })} placeholder="Food Area" />
    <textarea {...register("description")} placeholder="Food Description"/>
    <input type="text" {...register("strCategory")} placeholder="Food Category"/>
    <input {...register("img")} placeholder="Food Image url"/>
      
    <input id="button-submit" type="submit" />
    </form>
    </div> 
    </Container>
    </>
    );
};

export default AddNewMeal;