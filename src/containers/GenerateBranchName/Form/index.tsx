import { useState } from 'react';

import { JUSTIFY_CONTENT, ROUNDED } from 'entities/tailwind';

import Button from 'components/Button';
import Flex from 'components/Flex';

import AgileForm from './Agile';
import WaterfallForm from './Waterfall';

interface GenerateBranchNameFormProps {
  onChange: (param: string) => void;
}

enum WorkflowEnum {
  'Agile' = 1,
  'Waterfall' = 2,
}

export interface IAgileForm {
  sprint: number;
  projectCodeName: string;
  projectTicketName: string;
  projectTicketNumber: number;
}

const GenerateBranchNameForm = ({ onChange }: GenerateBranchNameFormProps) => {
  const [currentWorkflow, setCurrentWorkFlow] = useState<WorkflowEnum>(WorkflowEnum.Agile);

  const initialAgileFormVal = {
    sprint: 1,
    projectCodeName: '',
    projectTicketName: '',
    projectTicketNumber: 1,
  };

  const [agileFormVal, setAgileFormVal] = useState<IAgileForm>(initialAgileFormVal);

  const [waterFallFormVal, setWaterFallFormVal] = useState<string>('');

  const handleSubmit = () => {
    onChange('test');
  };

  const handleFormReset = () => {
    setAgileFormVal(initialAgileFormVal);
    setWaterFallFormVal('');
    onChange('');
  };

  const renderForm = () => {
    if (currentWorkflow === WorkflowEnum.Agile) {
      return <AgileForm value={agileFormVal} onChange={setAgileFormVal} />;
    }

    return <WaterfallForm value={waterFallFormVal} onChange={setWaterFallFormVal} />;
  };

  return (
    <div>
      {renderForm()}
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
