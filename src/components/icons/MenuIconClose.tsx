import * as React from "react"
import { SVGProps } from "react"

const MenuIconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    {...props}
  >
    <path
      d="M31.28 30.22a.75.75 0 1 1-1.06 1.06L24 25.06l-6.22 6.22a.75.75 0 0 1-1.06-1.06L22.94 24l-6.22-6.22a.75.75 0 1 1 1.06-1.06L24 22.94l6.22-6.22a.75.75 0 1 1 1.06 1.06L25.06 24l6.22 6.22Z"
    />
  </svg>
)
export default MenuIconClose
