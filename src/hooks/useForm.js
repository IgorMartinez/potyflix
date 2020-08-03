import { useState } from 'react';

function useForm(formDefaultValues) {
  const [formInputs, setFormInputs] = useState(formDefaultValues);

  function handleChange(event) {
    setFormInputs({
      ...formInputs,
      [event.target.getAttribute('name')]: event.target.value,
    });
  }

  function clearForm() {
    setFormInputs(formDefaultValues);
  }

  return {
    formInputs,
    handleChange,
    clearForm,
  };
}

export default useForm;
