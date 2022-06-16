function probarValidarCantidadIntegrantes() {
  console.assert(
    validarCantidadIntegrantes(0) === 'El numero de integrantes debe ser mayor a 0',
      'Validar cantidad de inegantes que no sea vacío',
  );
}

probarValidarCantidadIntegrantes();
