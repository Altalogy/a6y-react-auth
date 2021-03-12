import React from 'react'
import '../styles/layouts/MainLayout.scss'

interface ILayoutProps {
  children: React.ReactNode
  backNav?: boolean
}

const MainLayout = ({children, backNav = false}: ILayoutProps) => {
  return (
    <div className='main-layout'>
      { backNav && 
        <header>
          <a href='a6y-react-auth/#/'>back to home</a>
        </header>
      }
      <div className='main-layout-body'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
