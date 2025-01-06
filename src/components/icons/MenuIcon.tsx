import * as React from "react"
import { SVGProps } from "react"

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    {...props}
  >
    <path
      d="M33 24a.75.75 0 0 1-.75.75h-16.5a.75.75 0 1 1 0-1.5h16.5A.75.75 0 0 1 33 24Zm-17.25-5.25h16.5a.75.75 0 1 0 0-1.5h-16.5a.75.75 0 1 0 0 1.5Zm16.5 10.5h-16.5a.75.75 0 1 0 0 1.5h16.5a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
)
export default MenuIcon
