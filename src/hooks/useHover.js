import { useEffect, useRef, useState } from 'react'

const useHover = () => {
  const [value, setValue] = useState(false)
  const ref = useRef(null)

  const onMouseEnter = () => setValue(true)
  const onMouseLeave = () => setValue(false)

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mouseover', onMouseEnter)
      node.addEventListener('mouseout', onMouseLeave)

      return () => {
        node.removeEventListener('mouseover', onMouseEnter)
        node.removeEventListener('mouseout', onMouseLeave)
      }
    }
  }, [])

  return [ref, value]
}

export default useHover
