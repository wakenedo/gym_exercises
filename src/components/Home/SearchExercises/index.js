import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

//Utils
import { fetchData, exerciseOptions } from '../../../utils/fetchData'

//Components
import HorizontalScrollbar from '../../HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      )
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search)
      )

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises)
    }
  }


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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          onClick={handleSearch}
          variant='contained'
          color='error'
          sx={{
            backgroundColor: '#FF2625',
            color: 'white',
            borderRadius: '4px',
            textTransform: 'none',
            height: {
              xl: '56px',
              xs: '35px'
            },
            marginLeft: {
              xl: '0',
              xs: '125px',
            },
            marginTop: {
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
              lg: '20px',
              xs: '14px'
            },
          }}

        >
          Search
        </Button>
      </Box>
      <Box

        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}

        />
      </Box>
    </Stack>
  )
}

export default SearchExercises