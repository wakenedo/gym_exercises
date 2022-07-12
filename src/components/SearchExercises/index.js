import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'
    >
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        fontWeight='700'
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box
        position='relative'
        mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: {
              lg: '1170px',
              xs: '350px'
            },
            backgroundColor: '#fffff',
            borderRadius: '40px'
          }}
          height='76px'
          value=''
          onChange={(e) => { }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          sx={{
            backgroundColor: '#FF2625',
            color: 'white',
            borderRadius: '4px',
            textTransform: 'none',
            height: {
              xl:'56px',
              xs: '35px'
            },
            marginLeft : {
              xl: '0',
              xs: '125px',
            },
            marginTop :{
              xl: '0',
              xs: '15px',

            },
            position: {
              lg: 'absolute'
            }, 
            right: {
              lg: '0',            
            },
            width:
            {
              lg: '175px',
              xs: '100px'
            },
            fontSize: {
              lg:'20px',
              xs: '14px'
            },
          }}
          variant='contained'
          color='error'

        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises