import { useState } from 'react'

const detectHover = Component => {
  return props => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Component hovered={isHovered} {...props} />
      </div>
    )
  }
}

export default detectHover
