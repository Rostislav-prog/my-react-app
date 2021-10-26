import './style/Message.css'

export const Message = props => {
  return (
    <div className='Message'>
      <div className='Message-header'>
        {props.list.map(i => {
          return (
            <p key={i.id}>
              {i.autor} : {i.text}
            </p>
          )
        })}
      </div>
    </div>
  )
}
