const forms = document.querySelectorAll('form');

function setFieldProperties(field, hint, style) {
  field.setCustomValidity(hint);
  field.style.backgroundColor = style;
}

function clearFieldProperties(field) {
  field.setCustomValidity('');
  field.removeAttribute('style');
}

function setTextFields(form) {
  const textFields = form.querySelectorAll('input[type="text"][name*="name"][required]');

  textFields.forEach(function (field) {
    field.addEventListener('invalid', function () {
      setFieldProperties(field, 'Введите текст', 'rgba(255, 0, 0, 0.45)');
    });

    field.addEventListener('input', function () {
      if (field.validity.patternMismatch || field.validity.valueMissing ||
          field.validity.tooLong || field.validity.tooShort) {
        setFieldProperties(field, 'Введите текст', 'rgba(255, 0, 0, 0.45)');
      } else {
        clearFieldProperties(field);
      }

      field.reportValidity();
    });
  });
}

function setTelFields(form) {
  const textFields = form.querySelectorAll('input[type="tel"][required]');

  textFields.forEach(function (field) {
    field.addEventListener('invalid', function () {
      setFieldProperties(field, 'Введите 10 последних цифр номера телефона', 'rgba(255, 0, 0, 0.45)');
    });

    field.addEventListener('input', function () {
      if (field.validity.valueMissing || field.validity.patternMismatch) {
        setFieldProperties(field, 'Введите 10 последних цифр номера телефона', 'rgba(255, 0, 0, 0.45)');
      } else {
        clearFieldProperties(field);
      }

      field.reportValidity();
    });
  });
}

function initForms() {
  forms.forEach(function (form) {
    setTextFields(form);
    setTelFields(form);
  });
}

export {initForms};
