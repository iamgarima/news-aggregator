import { useLocation } from 'react-router';

// Custom hook to get query string parameters
const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default useQueryParams;