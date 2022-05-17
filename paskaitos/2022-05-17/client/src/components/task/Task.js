import Button from 'react-bootstrap/Button'
import Fetcher from '../../utils/Fetcher'
import {useState} from 'react'

const Task = (props) => {
    const messages = props.messages
    const row = props.row
    const refresh = props.refresh

    const [done, setDone] = useState(row.done)

    const completeTask = () => {
        Fetcher('/api/task/done/' + row.id, {done: !done}, 'PUT')
        .then(resp => {
            if(resp.status === 'success') {
                messages('Užduotis sėkmingai užbaigta', 'success')
                setDone(!done)
            } else {
                messages('Nepavyko užbaigti užduoties', 'danger')
            }
        })
        .catch(err => {
            console.log(err)
            messages('Įvyko serverio klaida', 'danger')
        })    }

    const deleteTask = () => {
        Fetcher('/api/task/delete/' + row.id, {}, 'DELETE')
        .then(resp => {
            if(resp.status === 'success') {
                messages('Užduotis sėkmingai ištrinta', 'success')
                refresh()
            } else {
                messages('Nepavyko ištrinti užduoties', 'danger')
            }
        })
        .catch(err => {
            console.log(err)
            messages('Įvyko serverio klaida', 'danger')
        })
    }

    return (
        <tr>
            <td>
                <label className="d-flex gap-3">
                    <input type="checkbox"
                    className="form-check-input flex-shrink-0"
                    value={done}
                    onChange={completeTask}
                    defaultChecked={done}
                    />
                    <span className="pt-1 form-checked-content">
                        <strong>{row.task}</strong>
                    </span>
                </label>
            </td>
            <td className="text-end">
                <Button variant="danger" onClick={deleteTask}>Ištrinti</Button>
            </td>
        </tr>
    )
}

export default Task