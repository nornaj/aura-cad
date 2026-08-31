import React from 'react'

interface PageLoaderProps {
  active: boolean
}

const PageLoader: React.FC<PageLoaderProps> = ({ active }) => {
  return (
    <div className={`page-loader ${active ? 'is-active' : 'is-fading'}`}>
      <div className="page-loader__content">
        <div className="loader-rhombus"></div>
      </div>
    </div>
  )
}

export default PageLoader
