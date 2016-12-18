import React, {PropTypes} from 'react'
import Loader from './Loader'
import Highlighter from 'react-highlight-words'

export const FileContent = ({result: {processedContent, mostCommonWord}, loading}) => {
  if (!loading && !processedContent) {
    return null
  }

  return (
    <div className="FileContent">
      {loading ?
        <Loader text="Reading file" /> :
        <Highlighter
          textToHighlight={processedContent}
          searchWords={[`foo${mostCommonWord}bar`]}
          activeClassName="highlight"
        />
      }
    </div>
  )
}

FileContent.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default FileContent
