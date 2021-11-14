export const Message = props => {
  return (
    <div>
      {props.messageList.map(i => {
        return (
          <p key={i.id}>
            {i.autor} : {i.text}
          </p>
        )
      })}
    </div>
  )
}
