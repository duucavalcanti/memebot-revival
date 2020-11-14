var mapCaminhosArquivosComandosAudio = {};
module.exports = {
	
	carregarListaComandosAudio: function() {
		const NOME_PASTA_ARQUIVOS_AUDIO = 'audio';
		var listaComandosAudio = require('./listaComandosAudio.js').listaComandosAudio;
		
		for (var comandoAudioIndex = 0 ; comandoAudioIndex < listaComandosAudio.length; comandoAudioIndex++){
			var comandoAudio = listaComandosAudio[comandoAudioIndex];
			mapCaminhosArquivosComandosAudio[comandoAudio.Comando] = NOME_PASTA_ARQUIVOS_AUDIO + '/' + comandoAudio.NomeArquivo;
		}
	},

	getCaminhoArquivoComandoAudio: function(comando) {
		return mapCaminhosArquivosComandosAudio[comando];
	},

	getMapCaminhosArquivosComandosAudio: function(){
		return mapCaminhosArquivosComandosAudio;
	}
};