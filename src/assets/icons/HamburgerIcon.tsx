import * as React from "react"
const SvgComponent = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} fill="none" viewBox="0 0 24 24" {...props}>
        <path stroke="#eff8f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17h14M5 12h14M5 7h14" />
    </svg>
)
export default SvgComponent