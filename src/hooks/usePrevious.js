import { useEffect, useRef } from "react"

const usePrevious = (value) => {
  const previous = useRef()
  useEffect(() => {
    previous.current = value
  })
  return previous.current
}

export default usePrevious