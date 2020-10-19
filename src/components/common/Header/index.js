import React from "react";

import { PageHeader } from 'antd';

const AppHeader = ({
  title = 'Home page'
}) => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title={title}
      />
    </div>
  )
}

export default AppHeader;