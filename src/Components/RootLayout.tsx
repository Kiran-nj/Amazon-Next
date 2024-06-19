import React, { ReactElement } from 'react'
import Header from './Headers/Header'
import BottomHeader from './Headers/BottomHeader'
import Footer from './Footer/Footer'

interface Props {
    children: ReactElement;
}

const RootLayout = ({children} :Props) => {
  return (
<>
<Header/>
<BottomHeader/>
{children}
<Footer/>
</>
  )
}

export default RootLayout
