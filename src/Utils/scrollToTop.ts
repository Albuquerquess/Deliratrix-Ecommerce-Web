import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

const ScrollToTop = ()  => {
  const params = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  return (null);
}

export default withRouter(ScrollToTop);