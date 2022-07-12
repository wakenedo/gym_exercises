import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'

import { Box, Stack, Typography } from '@mui/material'

//Utils
import { exerciseOptions, fetchData } from '../../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  return (
    <Box
      id='exercises'
      mt='50px'
      p='20px'
      sx={{ mt: { lg: '100px' } }}
    >
      <Typography
        variant='h3'
        mb='46px'
      >
        Showing Results
      </Typography>
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
      >
        {exercises.map((exercise, index) => (
          <p>
            {exercise.name}
          </p>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises