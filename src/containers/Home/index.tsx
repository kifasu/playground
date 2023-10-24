import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex min-h-screen w-screen">
      <Button
        onClick={() => navigate('/generate-branch-name')}
        label="Generate Branch Name"
      />
    </div>
  );
};

export default Home;
