import './App.css'
import { Message } from './Message'

export const App = () => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <p>My react app</p>
        </header>
      </div>
      <div className='Message'>
        <body>
          <Message text='New message!' />
        </body>
      </div>
    </>
  )
}
