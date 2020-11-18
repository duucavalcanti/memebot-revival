var mapCaminhosArquivosComandosAudio = {};
module.exports = {
	
	carregarListaComandosAudio: function() {
		const NOME_PASTA_ARQUIVOS_AUDIO = 'audio';
		var listaComandosAudio = require('./listaComandosAudio.js').listaComandosAudio;
		
		for (var indiceComandoAudio in listaComandosAudio){
			var comandoAudio = listaComandosAudio[indiceComandoAudio];
			var comando = comandoAudio.Comando.toLowerCase();

			mapCaminhosArquivosComandosAudio[comando] = NOME_PASTA_ARQUIVOS_AUDIO + '/' + comandoAudio.NomeArquivo;
		}
	},

	getCaminhoArquivoComandoAudio: function(comando) {
		return mapCaminhosArquivosComandosAudio[comando];
	},

	getMapCaminhosArquivosComandosAudio: function(){
		return mapCaminhosArquivosComandosAudio;
	}
};