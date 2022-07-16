import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'


//Utils
import { exerciseOptions, fetchData, youtubeOptions } from '../../utils/fetchData'

//Components
import Detail from '../../components/ExerciseDetail/Detail'
import ExerciseVideos from '../../components/ExerciseDetail/ExerciseVideos'
import SimilarExercises from '../../components/ExerciseDetail/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }

    fetchExercisesData()
  }, [id])

  if(!exerciseDetail) return <div>No data</div>

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos}name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail