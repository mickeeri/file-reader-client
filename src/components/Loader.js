import React, {PropTypes} from 'react'
import FontAwesome from 'react-fontawesome'

const Loader = ({showLoader = true, text}) => {
  if (!showLoader) {
    return null
  }

  return (
    <div className="Loader">
      <FontAwesome name="circle-o-notch" spin />
      {text}
    </div>
  )
}

Loader.propTypes = {
  showLoader: PropTypes.bool,
  text: PropTypes.string,
}

export default Loader
