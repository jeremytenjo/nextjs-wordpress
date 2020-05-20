import { useRouter } from 'next/router'

import { Wrapper } from './styles'

const Button = ({ children, text = 'button', onClick = () => null, href }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    if (href) return router.push(href)

    onClick()
  }

  return (
    <Wrapper href={href} onClick={handleClick}>
      {children || text}
    </Wrapper>
  )
}

export default Button
