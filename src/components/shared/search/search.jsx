'use client';

import { DocSearch } from '@docsearch/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const INDEX_NAME = 'neon';
const API_KEY = 'a975b8d2e7c08607b212bf690f8eb40a';
const APP_ID = 'RAPNCKAFQF';

const Search = ({ className = null }) => {
  const ref = useRef(null);

  return (
    <div className={clsx('relative flex items-center justify-between', className)} ref={ref}>
      <DocSearch
        appId={APP_ID}
        apiKey={API_KEY}
        indexName={INDEX_NAME}
        placeholder="Search..."
        hitComponent={({ hit, children }) => (
          <a
            className={clsx({
              'DocSearch-Hit--Result': hit._snippetResult,
            })}
            href={hit.url}
          >
            {children}
          </a>
        )}
        insights
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
