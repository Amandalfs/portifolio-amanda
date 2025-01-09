import * as React from "react"
import { SVGProps } from "react"

const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path
      d="M19.28 11.03a.747.747 0 0 1-1.06 0l-5.47-5.47v14.69a.75.75 0 1 1-1.5 0V5.56l-5.47 5.47a.75.75 0 1 1-1.06-1.06l6.75-6.75a.749.749 0 0 1 1.06 0l6.75 6.75a.747.747 0 0 1 0 1.06Z"
    />
  </svg>
)
export default ArrowUp
