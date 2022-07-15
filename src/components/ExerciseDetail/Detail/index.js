import React from 'react'
import { Stack, Typography, Button } from '@mui/material'

import BodyPartImage from '../../../assets/icons/body-part.png'
import TargetImage from '../../../assets/icons/target.png'
import EquipmentImage from '../../../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
    const {
        bodyPart,
        gifUrl,
        name,
        target,
        equipment
    } = exerciseDetail

    return (
        <Stack
            gap='60px'
            sx={{
                p: '20px',
                alignItems: 'center',
                flexDirection: {
                    lg: 'row',
                }
            }}
        >
            <Stack sx={{
                gap: {
                    lg: '35px',
                    xs: '20px'
                }
            }}>
                <Typography>
                    {name}
                </Typography>
            </Stack>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />

        </Stack>
    )
}

export default Detail