type GreetProp = {
  name: string
  message?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProp) => {
  const { message = 0 } = props
  return (
    <div>
      <h2>
        {
          props.isLoggedIn
            ? ` Welcome ${props.name} and your ${props.message ?? 0} depression episodes.`
            : 'Welcome Guest'
        }

      </h2>
    </div>
  )
}