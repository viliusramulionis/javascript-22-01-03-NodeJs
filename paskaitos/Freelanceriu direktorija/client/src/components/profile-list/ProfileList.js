import React, { useState } from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

export default () => {

    const [profiles, setProfiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    axios.get('/api/profiles/')
    .then(resp => {  
        setIsLoading(false)
        if(resp.data.status === 'success')
            setProfiles(resp.data.message)
    })
    .catch(() => {
        setIsLoading(false)
        //setMessages({message: 'Įvyko serverio klaida', status: 'danger'})
    })

    return (
        <Container>
            <h1>Freelancerių sąrašas</h1>
            {isLoading ? 
                'Duomenys kraunasi...' : 
                profiles.map(value => (
                    <div>
                        {value.headline} <br />
                        {value.subheadline} <br />
                        {value.hourly_rate} <br />
                    </div>
                ))
            }
        </Container>
    )
}