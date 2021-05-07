import { MutableRefObject, useEffect } from 'react'

export function useClickOutside<T extends HTMLElement>(ref: MutableRefObject<T>, handler: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, handler])
}
