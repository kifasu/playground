interface IWaterfallFormProps {
    value: string;
    onChange: (param: string) => void;
}

const WaterfallForm = ({
    value, onChange
}: IWaterfallFormProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

  return (
    <div>{value}</div>
  )
}

export default WaterfallForm