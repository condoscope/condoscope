import { MutableRefObject, useEffect } from 'react'
import { KeyboardKeys } from '../types'

export function useKeyHandler<T extends HTMLElement>(ref: MutableRefObject<T>, key: KeyboardKeys, handler: () => void): void {
  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === key) {
        handler()
      }
    }

    ref.current.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [ref, handler, key])
}
