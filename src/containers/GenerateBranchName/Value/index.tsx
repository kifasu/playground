interface GenerateBranchNameValueProps {
  value: string;
}

const GenerateBranchNameValue = ({ value }: GenerateBranchNameValueProps) => {
  const placeholder = value.length ? value : 'Please enter your branch name';

  return <div>{placeholder}</div>;
};

export default GenerateBranchNameValue;
