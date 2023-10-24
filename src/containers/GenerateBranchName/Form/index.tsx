import { ROUNDED } from 'entities/tailwind';

import Button from 'components/Button';

interface GenerateBranchNameFormProps {
  onChange: (param: string) => void;
}

const GenerateBranchNameForm = ({ onChange }: GenerateBranchNameFormProps) => {
  const handleSubmit = () => {
    onChange('test');
  };

  return (
    <div>
      <Button label="Submit" rounded={ROUNDED.MEDIUM} onClick={handleSubmit} />
    </div>
  );
};

export default GenerateBranchNameForm;
