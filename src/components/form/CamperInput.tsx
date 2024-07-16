import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInput = {
  type: string;
  name: string;
  label: string;
};

const CamperInput = ({ type, label, name }: TInput) => {
  const { control } = useFormContext();

  return (
    <div className="CamperInputContainer mb-5 flex flex-col gap-y-1">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              type={type}
              id={name}
              className="border border-gray-400"
              value={type === "file" ? undefined : field?.value}
              onChange={(e) => {
                if (type === "file") {
                  field.onChange(e.target.files?.[0] || null);
                } else {
                  field.onChange(e.target.value);
                }
              }}
            />

            {error && (
              <p className="text-xs font-medium text-red-600">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default CamperInput;
