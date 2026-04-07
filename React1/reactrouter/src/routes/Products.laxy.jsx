import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
export const Route = createFileRoute('/Products/laxy')({
  component: RouteComponent,
})

function RouteComponent() {
      return <>
      <div>
                Hello "/Products/laxy"!
                <Link to="/Product/1">Go To Product 1</Link>
                </br>
                <Link to="/Product/2">Go To Product 2</Link>
                <br>
                <Link to="/Product/3">Go To Product 3</Link>
                <br/>
                </div>
      </>
}
