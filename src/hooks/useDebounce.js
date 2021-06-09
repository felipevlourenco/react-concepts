import { useCallback, useState } from 'react'
import debounce from 'lodash.debounce'

export const useDebounce = (obj = null, timer = 1000) => {
  const [state, setState] = useState(obj)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceCallback = useCallback(
    debounce(_prop => {
      console.log('updating value')
      setState(_prop)
    }, timer),
    []
  )

  const setDebounce = (value: any) => {
    debounceCallback(value)
  }

  return [state, setDebounce]
}
