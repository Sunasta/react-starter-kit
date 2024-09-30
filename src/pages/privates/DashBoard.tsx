import type { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

const DashBoard = (): ReactElement => {
  return (
    <div className="flex flex-col h-full flex-grow">
      <h1 className="text-center">
        <FormattedMessage id="pages.dashboard" />
      </h1>
    </div>
  );
};

export default DashBoard;
