
//Validación para el nombre
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

//Validación para el Apellido
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

//Validación para el número de identificación
export const validateIdNumber = (idNumber) => {
  if (!idNumber.trim()) {
    return 'Por favor, ingrese un número de identificación.';
  }

  const idNumberRegex = /^\d+$/;
  if (!idNumberRegex.test(idNumber)) {
    return 'Por favor, ingrese un número de identificación válido.';
  }

  if (idNumber.length < 7 || idNumber.length > 10) {
    return 'El número de identificación debe tener entre 7 y 10 dígitos.';
  }

  return '';
};

//Validación para el número de celular
export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber.trim()) {
    return 'Por favor, ingrese un número de celular.';
  }

  const phoneNumberRegex = /^\d{10}$/; // Patrón regex para 10 dígitos
  if (!phoneNumberRegex.test(phoneNumber)) {
    return 'Por favor, ingrese un número de celular válido (10 dígitos).';
  }

  return '';
};

//Validación para el número de teléfono
export const validatePhone = (phone) => {
  if (!phone.trim()) {
    return 'Por favor, ingrese un número de teléfono.';
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone)) {
    return 'Por favor, ingrese un número de teléfono válido.';
  }

  if (phone.length < 7 || phone.length > 10) {
    return 'El número de télefono debe tener entre 7 y 10 dígitos.';
  }

  return '';
};

//Validación para la fecha
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


//Validación para el modelo de vehiculo
export const validateVehicleModel = (vehicleModel) => {
  if (!vehicleModel.trim()) {
    return 'Por favor, ingrese un modelo.';
  }

  const modelCarRegex =/^[a-zA-Z0-9\s]+$/
  if (!modelCarRegex.test(vehicleModel)) {
    return 'Por favor, ingrese un modelo válido.';
  }

  return '';
};

//Validación para el correo Electronico
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

export const validateTime = (text) => {
  const minTime = '08:00'; // Hora mínima permitida (7:00 AM)
  const maxTime = '17:00'; // Hora máxima permitida (5:00 PM)
  const minTime2 = '00:00'; // Hora mínima permitida (12:00 AM)
  const maxTime2 = '01:00'; // Hora máxima permitida (1:00 AM)
  let errorMessage = '';
  
  if (!text.trim()) {
    // Permitir borrar el campo
    return errorMessage;
  }
  
  const regex = /^[0-9:]*$/;
  if (!regex.test(text)) {
    return 'Ingrese un formato de hora válido (HH:MM)';
  } else {
    const [hours, minutes] = text.split(':');
    const horaIngresada = `${hours.padStart(2, '0')}:${(minutes || '0').padStart(2, '0')}`;
    
    if (parseInt(minutes) >= 60) {
      return 'Los minutos no pueden ser 60. Por favor, ingrese una hora válida.';
    } else if (!(
      (horaIngresada >= minTime && horaIngresada <= maxTime) || 
      (horaIngresada >= minTime2 && horaIngresada <= maxTime2)
    )) {
      return 'La hora de la cita debe pedirse entre las 8 am - 5 pm';
    }
  }
  
  return errorMessage;
};


//Validación para el tipo de servicio
export const ValidateSelectedService = (selectedService) => {
  if (!selectedService.trim()) {
    return 'Por favor, seleccione un tipo de servicio.';
  }
  return '';
};
