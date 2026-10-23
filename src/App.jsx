import React, {lazy, Suspense} from "react";
const LoginPage = lazy(() => import('./pages/LoginPage'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <LoginPage />
      </Suspense>
    </div>
  )
}

export default App