import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  defaultPeaload:"Intent",
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
