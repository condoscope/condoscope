import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Footer, Header } from '@condoscope/condoscope/common'

export const Root: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}
