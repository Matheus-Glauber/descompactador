//npm install machinepack-zip-2
var Zip2 = require('machinepack-zip-2');

// Selecione um arquivo .zip a ser descompactado e depois seu destino/diretório.

Zip2.unzip({

source: 'Users/MatheusGlauber/Desktop/unzip2/cats2.zip',

destination: 'Users/MatheusGlauber/Desktop/unzip2/Meus-Gatos',

}).exec({

// Um erro inesperado ocorreu.

error: function (err) {

},

// Sucesso.

success: function () {

},
});
