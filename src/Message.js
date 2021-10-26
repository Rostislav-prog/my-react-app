import './Message.css'

export const Message = props => {
  return (
    <div className='Message'>
      <div className='Message-header'>
        {props.list.map(i => {
          return (
            <p>
              {i.autor} : {i.text}
            </p>
          )
        })}
      </div>
    </div>
  )
}
