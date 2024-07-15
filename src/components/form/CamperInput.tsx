import { Controller } from "react-hook-form";
import { Input } from "../ui/input";

type TInput = {
  type: string;
  name: string;
  label: string;
};

const CamperInput = ({ type, label, name }: TInput) => {
  return (
    <div className="CamperInputContainer mb-5 flex flex-col gap-y-1 ">
      {label ? label : null}

      <Controller
        name={name}
        render={({ field }) => (
          <Input
            type={type}
            id={name}
            {...field}
            className="border border-gray-400"
          />
        )}
      />
    </div>
  );
};

export default CamperInput;
