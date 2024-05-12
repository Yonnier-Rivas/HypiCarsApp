export const validateName = (name) => {
  if (!name.trim()) {
    return 'Por favor, ingrese un nombre.';
  }

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    return 'Por favor, ingrese un nombre válido.';
  }

  return '';
};

export const validateLastName = (lastName) => {
  if (!lastName.trim()) {
    return 'Por favor, ingrese un apellido.';
  }

  const lastNameRegex = /^[a-zA-Z\s]+$/;
  if (!lastNameRegex.test(lastName)) {
    return 'Por favor, ingrese un apellido válido.';
  }

  return '';
};

export const validateIdNumber = (idNumber) => {
  if (!idNumber.trim()) {
    return 'Por favor, ingrese un número de identificación.';
  }

  const idNumberRegex = /^\d+$/;
  if (!idNumberRegex.test(idNumber)) {
    return 'Por favor, ingrese un número de identificación válido.';
  }

  return '';
};

export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber.trim()) {
    return 'Por favor, ingrese un número de celular.';
  }

  const phoneNumberRegex = /^\d+$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    return 'Por favor, ingrese un número de celular válido.';
  }

  return '';
};

export const validatePhone = (phone) => {
  if (!phone.trim()) {
    return 'Por favor, ingrese un número de teléfono.';
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone)) {
    return 'Por favor, ingrese un número de teléfono válido.';
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

export const validatVehicleModel = (vehicleModel) => {
  if (!vehicleModel.trim()) {
    return 'Por favor, ingrese un modelo.';
  }

  const modelRegex = /^[a-zA-Z\s]+$/;
  if (!modelRegex.test(vehicleModel)) {
    return 'Por favor, ingrese un modelo válido.';
  }

  return '';
};

export const validateEmail = (email) => {
  if (!email.trim()) {
    return 'Por favor, ingrese un correo electrónico.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Por favor, ingrese un correo electrónico válido.';
  }

  return '';
};

export const ValidateSelectedService = (selectedService) => {
  if (!selectedService.trim()) {
    return 'Por favor, seleccione un tipo de servicio.';
  }
  return '';
};
