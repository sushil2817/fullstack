import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackDevtools } from '@tanstack/react-devtools'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
      <TanStackDevtools/>
    </React.Fragment>
  )
}
