import './App.css';
import {useState, useEffect} from 'react'
import {Loader, TaskList} from './components/'
import Alert from 'react-bootstrap/Alert'

const App = () => {

  const [isFetching, setIsFetching] = useState(true)
  const [response, setResponse] = useState(null)
  const [message, setMessage] = useState(null)
  const [messageStatus, setMessageStatus] = useState('success')

  useEffect(() => {
    fetch('/api/')
    .then(resp => resp.json())
    .then(resp => {
      setIsFetching(false)
      if(resp.status === 'success') {
        setResponse(resp.message)
      } else {
        console.log(resp.message)
      }
    })
    .catch(error => {
      setIsFetching(false)
      console.log(error)
    })
  }, [])

  const handleMessages = (message, status = 'success') => {
    setMessage(message)
    setMessageStatus(status)
  }

  const Messages = () => {
    return message && ( <Alert variant={messageStatus}>{message}</Alert>)
  }

  return (
    <div className="todoListApp">
      <h1>Užduočių tvarkyklė</h1>
      <Messages />
      {isFetching ? (<Loader />) : (<TaskList messages={handleMessages} response={response}/>)}
    </div>
  )
}

export default App;
