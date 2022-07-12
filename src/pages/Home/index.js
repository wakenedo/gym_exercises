import React, { useState } from 'react'
import { Box } from '@mui/material'

//Components
import HeroBanner from '../../components/HeroBanner'
import SearchExercises from '../../components/SearchExercises'
import Exercises from '../../components/Exercises'

const Home = () => {
    const [exercise, setExercise] = useState([])
    const [bodyPart, setBodyPart] = useState('all')


    return (
        <Box>
            <HeroBanner />
            <SearchExercises 
            setExercise={setExercise}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
            <Exercises 
            setExercise={setExercise}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
        </Box>
    )
}

export default Home
