import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import ProfileBox from '../profile-box/ProfileBox'

export default () => {

    const [profiles, setProfiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
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
    }, [])

    const List = () => {
        return profiles.map((value, index) => (
            <ProfileBox key={index} profile={value} />
        ))
    }

    const ListContainer = () => {
        return (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-5"> 
                <List />
            </div>
        )
    }

    return (
        <Container>
            <h1>Freelancerių sąrašas</h1>
            {isLoading ? 
                'Duomenys kraunasi...' :
                <ListContainer />
            }
        </Container>
    )
}