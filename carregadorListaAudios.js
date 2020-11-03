var listaComandosAudio = require('./listaComandosAudio.js').listaComandosAudio;

const PASTA_ARQUIVOS_AUDIO = 'audio';

var listaComandosAudioMap = {};

for( var comandoAudio in listaComandosAudio )
{
	listaComandosAudioMap[comandoAudio.Comando] = PASTA_ARQUIVOS_AUDIO + comandoAudio.NomeDoArquivo;
}

module.exports =
{
	getlistaComandosAudioMap: function()
	{
		return listaComandosAudioMap;
	}
};