import { useState } from 'react';

import { JUSTIFY_CONTENT, ROUNDED } from 'entities/tailwind';

import Button from 'components/Button';
import Flex from 'components/Flex';

interface GenerateBranchNameFormProps {
  onChange: (param: string) => void;
}

enum WorkflowEnum {
  'Agile' = 1,
  'Waterfall' = 2,
}

interface IForm {
  workflow: WorkflowEnum;
  branchName: string;
}

export interface IAgileForm {
    sprint: number;
    projectCodeName: string;
    projectTicketName: string;
    projectTicketNumber: number;
}

const GenerateBranchNameForm = ({ onChange }: GenerateBranchNameFormProps) => {
  const [formVal, setFormVal] = useState<IForm>({
    workflow: WorkflowEnum.Agile,
    branchName: '',
  });


  const initialAgileFormVal = {
    sprint: 1,
    projectCodeName: '',
    projectTicketName: '',
    projectTicketNumber: 1,
  }

  const [agileFormVal, setAgileFormVal] = useState<IAgileForm>(initialAgileFormVal)

  const [waterFallFormVal, setWaterFallFormVal] = useState<string>('');

  const handleSubmit = () => {
    onChange('test');
  };

  const handleFormReset = () => {
    setAgileFormVal(initialAgileFormVal);
    setWaterFallFormVal('')
    onChange('');
  };

  return (
    <div>
      <Flex justify={JUSTIFY_CONTENT.center}>
        <Button
          label="Reset"
          rounded={ROUNDED.MEDIUM}
          onClick={handleFormReset}
          salt="bg-secondary"
        />
        <Button label="Submit" rounded={ROUNDED.MEDIUM} onClick={handleSubmit} />
      </Flex>
    </div>
  );
};

export default GenerateBranchNameForm;
