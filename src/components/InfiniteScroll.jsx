import React from 'react';
import _ from 'lodash';
import { Spinner } from '../elem';

const InfiniteScroll = (props) => {
  const { children, callNextPage, isNext, isLoading } = props;

  const _handleScroll = _.throttle(() => {
    if (isLoading) {
      return;
    }

    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {
      callNextPage();
    }
  }, 1200);

  const handleScroll = React.useCallback(_handleScroll, [isLoading]);

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isNext) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNext, isLoading]);

  return (
    <React.Fragment>
      {children}
      {isNext && <Spinner />}
    </React.Fragment>
  );
};

InfiniteScroll.defaultProps = {
  children: null,
  callNextPage: () => {},
  isNext: false,
  isLoading: false,
};

export default InfiniteScroll;
