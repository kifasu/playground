import { FunctionComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from 'containers/Home';
import BranchNameGeneratorPage from 'containers/GenerateBranchName';

const NavRoutes: FunctionComponent = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/generate-branch-name' element={<BranchNameGeneratorPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default NavRoutes;
