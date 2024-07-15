import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const CamperForm = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();

  return (
    <div className="CamperFormContainer">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default CamperForm;
