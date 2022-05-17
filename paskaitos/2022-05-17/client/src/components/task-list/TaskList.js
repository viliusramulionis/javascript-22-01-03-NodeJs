import './TaskList.css'
import {NewTask, Task} from '../'

const TaskList = (props) => {
    const response = props.response
    const messages = props.messages
    const refresh  = props.refresh

    if(response.length > 0) {
        return (
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th colSpan="2">
                            <NewTask refresh={refresh} messages={messages} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {response.map((row) => (
                        <Task key={row.id} refresh={refresh} messages={messages} row={row} />
                    ))}
                </tbody>
            </table>
        )
    }

    return messages('Nėra jokių sukurtų užduočių', 'danger')
}

export default TaskList