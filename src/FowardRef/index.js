import React from 'react'

const FowardRef = React.forwardRef((props, ref) => (
  <button ref={ref} className="fancy-button" {...props}>
    {props.children}
  </button>
))

// const FowardRef = props => (
//   <button className="fancy-button" {...props}>
//     {props.children}
//   </button>
// )

export default FowardRef
