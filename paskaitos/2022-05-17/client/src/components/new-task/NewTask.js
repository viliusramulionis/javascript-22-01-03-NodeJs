import {useState} from 'react'
import Fetcher from '../../utils/Fetcher'

const NewTask = (props) => {
    const refresh = props.refresh
    const [taskValue, setTaskValue] = useState('')

    const updateTaskValue = (e) => {
        setTaskValue(e.target.value)
    }

    const submitTask = () => {
        if(taskValue === '') {
            props.messages('Įveskite užduoties pavadinimą', 'danger')
            return
        }

        Fetcher('/api/add-task', {
            task: taskValue,
            done: false
        }, 'POST')
        .then(resp => {
            if(resp.status === 'success') {
                props.messages('Užduotis sėkmingai išsaugota', 'success')
                setTaskValue('')
                refresh()
            } else {
                props.messages('Nepavyko išssaugoti užduoties', 'danger')
            }
        })
        .catch(err => {
            console.log(err)
            props.messages('Įvyko serverio klaida', 'danger')
        })
    }

    return (
        <div className="input-group input-group-lg mb-3 newTaskForm">
            <input type="text" 
            className="form-control"
            placeholder="Įveskite užduotį" 
            value={taskValue} 
            onChange={ e => updateTaskValue(e) }
            />
            <button className="btn btn-success" onClick={submitTask}>Add</button>
        </div>
    )
}

export default NewTask