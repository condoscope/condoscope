import { MutableRefObject, useEffect } from 'react'
import { KeyboardKeys } from '../types'

export function useKeyHandler<T extends HTMLElement>(ref: MutableRefObject<T>, key: KeyboardKeys, handler: () => void): void {
  useEffect(() => {
    function keyHandler(event: KeyboardEvent) {
      if (event.key === key) {
        handler()
      }
    }

    ref.current.addEventListener('keyup', keyHandler)

    return () => {
      document.removeEventListener('keyup', keyHandler)
    }
  }, [ref, handler, key])
}
