import React from 'react';

import { UniversePageProps } from './interfaces';
import Main from './Universe';

const Universe: React.FC<UniversePageProps> = (props) => {
  return <Main {...props} />;
};

export default Universe;
