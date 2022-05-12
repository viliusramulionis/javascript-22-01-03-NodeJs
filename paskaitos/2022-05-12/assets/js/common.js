const inputs = document.querySelectorAll('.form-check-input')

inputs.forEach(element => {
    element.addEventListener('click', () => {
        const id = element.value
        const done = element.checked
console.log(element.checked)
        fetch('http://localhost:3000/task/done/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({done})
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
    })
})