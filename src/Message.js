import './Message.css'

export const Message = props => {
  return (
    <div className='Message'>
      <div className='Message-header'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
