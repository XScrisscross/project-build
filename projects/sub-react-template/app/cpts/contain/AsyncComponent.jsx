import React, { Suspense, lazy } from 'react'

import '~assets/css/anime/loading.scss'

export default (importFunc) => {
  const Component = lazy(importFunc)

  return (props) => {
    return (
      <Suspense
        fallback={
          <div className="cover-container">
            <div className="animation-loading-target">ฅ^._.^ฅ</div>
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    )
  }
}
