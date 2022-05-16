const TaskList = (props) => {
    const response = props.response
    const messages = props.messages

    if(response.length > 0) {
        return (
            <div className="list-group">
                {response.map((row) => (
                    <li key={row.id}>{row.task}</li>
                ))}
            </div>
        )
    }

    return messages('Nėra jokių sukurtų užduočių', 'danger')
}

export default TaskList