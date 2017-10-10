import React from 'react'

const Thumbs = (props) => {
  const { disapprove, approve } = props

  return (
    <div className="thumbs">
      <i onClick={disapprove} className="fa fa-3x fa-thumbs-down"></i>
      <i onClick={approve} className="fa fa-3x fa-thumbs-up"></i>
    </div>
  )
}

export default Thumbs