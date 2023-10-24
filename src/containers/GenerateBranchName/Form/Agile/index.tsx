import { IAgileForm } from "../index"   

interface IAgileFormContainerProps {
    value: IAgileForm;
    onChange: (param: IAgileForm) => void;
}
const AgileForm = ({ value, onChange }: IAgileFormContainerProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

  return (
    <div>index</div>
  )
}

export default AgileForm;