import React, { useState } from 'react'
import { Box } from '@mui/material'

//Components
import HeroBanner from '../../components/Home/HeroBanner'
import SearchExercises from '../../components/Home/SearchExercises'
import Exercises from '../../components/Home/Exercises'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')


    return (
        <Box>
            <HeroBanner />
            <SearchExercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
            <Exercises 
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
            />
        </Box>
    )
}

export default Home
