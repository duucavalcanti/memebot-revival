var mapCaminhosArquivosComandosAudio = {};

var mensagemTextoTodosComandos = '';

module.exports = {
	carregarListaComandosAudio: function() {
		const NOME_PASTA_ARQUIVOS_AUDIO = 'audio';
		var listaComandosAudio = require('./listaComandosAudio.js').listaComandosAudio;
		
		mensagemTextoTodosComandos = '```\n';

		for (var indiceComandoAudio in listaComandosAudio){
			var comandoAudio = listaComandosAudio[indiceComandoAudio];
			var comando = comandoAudio.Comando.toLowerCase();

			mapCaminhosArquivosComandosAudio[comando] = NOME_PASTA_ARQUIVOS_AUDIO + '/' + comandoAudio.NomeArquivo;

			mensagemTextoTodosComandos += '!' + comando + '\n';
		}

		mensagemTextoTodosComandos += '```';
	},

	getCaminhoArquivoComandoAudio: function(comando) {
		return mapCaminhosArquivosComandosAudio[comando];
	},

	getMapCaminhosArquivosComandosAudio: function(){
		return mapCaminhosArquivosComandosAudio;
	},

	getMensagemTextoTodosComandos: function() {
		return mensagemTextoTodosComandos;
	}
};