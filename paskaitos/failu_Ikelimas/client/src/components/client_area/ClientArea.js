import React, {useState} from 'react'
import axios from 'axios'

export default () => {
    const [photo, setPhoto] = useState('')

    const handleFileChange = (event) => {
        setPhoto(event.target.files[0])
    } 

    const handleFileUpload = () => {
        const form = new FormData()
        form.append('photo', photo)
        
        axios.post('/api/photos/upload', form)
        .then(resp => {
            console.log(resp)
        })
    }

    return (
        <>
            <h1>Kliento erdvė</h1>
            <form onSubmit={handleFileUpload}>
                <input type="file" name="photo" onChange={(e) => handleFileChange(e)} />
                <button>Submit</button>
            </form>
        </>
    )
}