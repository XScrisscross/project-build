import React, { Suspense, lazy } from 'react'

import '../../assets/css/anime/loading.scss'

export default (component) => {
  const Component = lazy(component)

  return (props) => {
    return (
      <Suspense
        fallback={
          <div className="cover-container">
            <div className="animation-loading-target">ฅ^._.^ฅ</div>
          </div>
        }
      >
        <Component />
      </Suspense>
    )
  }
}

// export default (props) => {
//   return  (
//       <Suspense
//         fallback={
//           <div className="cover-container">
//             <div className="animation-loading-target">ฅ^._.^ฅ</div>
//           </div>
//         }
//       >
//         <Component {...props} />
//       </Suspense>
//     )
//   }

