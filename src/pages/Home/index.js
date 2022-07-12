import React, { useState } from 'react'
import { Box } from '@mui/material'

//Components
import HeroBanner from '../../components/HeroBanner'
import SearchExercises from '../../components/SearchExercises'
import Exercises from '../../components/Exercises'

const Home = () => {
    const [_exercises, _setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')


    return (
        <Box>
            <HeroBanner />
            <SearchExercises 
            setExercise={_setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
            <Exercises 
            exercises={_exercises}
            setExercise={_setExercises}
            bodyPart={bodyPart}
            />
        </Box>
    )
}

export default Home
