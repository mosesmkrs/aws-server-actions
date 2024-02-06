import { useState } from "react";
import { uploadFile } from "./actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./Submit-button";

const initialState = { message: null };
export default function Form() {
  const [state, formAction] = useFormState(uploadFile, initialState);
  return (
    <div className="form-wrapper">
      <form action={formAction}>
        <input type="file" id="file" name="file" accept="images/*" />
        <SubmitButton />
      </form>
      {state?.status && (
        <div className={`state-message ${state?.status}`}>{state?.message}</div>
      )}
    </div>
  );
}
