import React from 'react';

import { CoincidencePageProps } from './interfaces';
import Main from './Coincidence';

const Coincidence: React.FC<CoincidencePageProps> = (props) => {
  return <Main {...props} />;
};

export default Coincidence;
