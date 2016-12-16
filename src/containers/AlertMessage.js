import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {closeAlertMessage} from '../actions/messageActions'

const AlertMessage = ({successMessage, errorMessage, dispatch}) => {

  if (errorMessage && successMessage) {
    return null
  }

  if (!errorMessage && !successMessage) {
    return null
  }

  return (
    <div
      className={`AlertMessage ${errorMessage ? 'error' : 'success'}`}
    >
      {errorMessage ?
        errorMessage :
        successMessage
      }
      <span className="AlertMessage-close" onClick={() => {
        dispatch(closeAlertMessage())
      }}>
        x
      </span>
    </div>
  )
}

AlertMessage.propTypes = {
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
}

const mapStateToProps = ({messages}) => ({
  successMessage: messages.successMessage,
  errorMessage: messages.errorMessage,
})

export default connect(mapStateToProps)(AlertMessage)
