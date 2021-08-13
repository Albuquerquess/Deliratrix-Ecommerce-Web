import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//types
import { RouteComponentProps } from 'react-router-dom';

const ScrollToTop: React.FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);