export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    return 'Por favor, ingrese un nombre válido.';
  }
  return '';
};

export const validateLastName = (lastName) => {
  const lastNameRegex = /^[a-zA-Z\s]+$/;
  if (!lastNameRegex.test(lastName)) {
    return 'Por favor, ingrese un apellido válido.';
  }
  return '';
};

export const validateIdNumber = (idNumber) => {
  const idNumberRegex = /^\d+$/;
  if (!idNumberRegex.test(idNumber)) {
    return 'Por favor, ingrese un número de identificación válido.';
  }
  return '';
};

export const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\d+$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    return 'Por favor, ingrese un número de celular válido.';
  }
  return '';
};

export const validateDate = (date) => {
  if (!date) {
    return 'Por favor, seleccione una fecha válida.';
  }

  const currentDate = new Date();
  if (date < currentDate) {
    return 'La fecha no puede ser menor a la fecha actual.';
  }

  return '';
};
