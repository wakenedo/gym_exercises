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

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        }
    ]

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
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack
                sx={{
                    gap: {
                        lg: '35px',
                        xs: '20px'
                    }
                }}
            >
                <Typography variant='h4'>
                    {name}
                </Typography>
                <Typography>
                    Exercises keep you strong. {name} {` `}
                    is one of the best exercises to target your {target}. 
                    It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item)=> (
                    <Stack
                    key={item.name}
                    direction='row'
                    gap='24px'
                    alignItems='center'
                    >
                        <Button
                        sx={{
                            background: '#fff2db',
                            borderRadius: '15%',
                        }}
                        >
                            <img 
                            src={item.icon} 
                            alt={bodyPart}
                            style={{
                                width: '50px',
                                height: '50px'
                            }}
                            />
                        </Button>
                        <Typography
                        variant='h5'
                        key={item.name}
                        textTransform='capitalize'
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail