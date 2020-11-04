module.exports = {
	mapCaminhosArquivosComandosAudio: {},

	carregarListaComandosAudio: function() {
		const NOME_PASTA_ARQUIVOS_AUDIO = 'audio';

		var listaComandosAudio = require('./listaComandosAudio.js').listaComandosAudio;

		for( var comandoAudio in listaComandosAudio ) {
			mapCaminhosArquivosComandosAudio[comandoAudio.Comando] = NOME_PASTA_ARQUIVOS_AUDIO + '/' + comandoAudio.NomeArquivo;
		}
	},

	getCaminhoArquivoComandoAudio: function(comando) {
		return mapCaminhosArquivosComandosAudio[comando];
	}
};