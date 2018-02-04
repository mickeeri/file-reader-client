import React, { PropTypes } from 'react';
import Loader from './Loader';
import Highlighter from 'react-highlight-words';

export const FileContent = ({
  result: { processedContent, mostCommonWords },
  loading,
}) => {
  if (!loading && !processedContent) {
    return null;
  }

  const searchWords = mostCommonWords.map(word => `foo${word}bar`);

  return (
    <div className="FileContent">
      {loading ? (
        <Loader text="Reading file" />
      ) : (
        <Highlighter
          textToHighlight={processedContent}
          searchWords={searchWords}
          activeClassName="highlight"
        />
      )}
    </div>
  );
};

FileContent.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default FileContent;
