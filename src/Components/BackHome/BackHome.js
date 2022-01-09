import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BackHome = () => {
    return (
        <div className='my-5'>
            <NavLink style={{textDecoration:'none'}} to="/home">
                <Button sx={{ px: 8, mx: 2 }} variant="contained">Back To The Home </Button>
            </NavLink>
        </div>
    );
};

export default BackHome;