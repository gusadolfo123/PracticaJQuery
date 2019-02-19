$(document).ready(function() {
  loadDocumentTypes();
});

function loadDocumentTypes() {
  var select = $('#DocType');
  select.append(new Option('Seleccione un Documento', 0));
  select.append(new Option('Cedula', 1));
  select.append(new Option('Nit', 2));
  select.append(new Option('Tarjeta de Identidad', 3));
}

function sendRequest() {}
