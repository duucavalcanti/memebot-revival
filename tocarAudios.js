var fs = require('fs');

var carregadorListaComandosAudio = require('./carregadorListaComandosAudio.js');

carregadorListaComandosAudio.carregarListaComandosAudio();

function reproduzirAudio(msg, caminhoArquivoComandoAudio) {
    if (msg.member.voice.channel) {
        msg.member.voice.channel.join()
            .then(connection => {
                connection.play(fs.createReadStream(caminhoArquivoComandoAudio));
                msg.delete({ timeout: 2000});
            });
    }
}

module.exports = {
    tocarAudiosFuncao: function tocarAudios(msg, command) {
        var caminhoArquivoComandoAudio = carregadorListaComandosAudio.getCaminhoArquivoComandoAudio(command);
        if(caminhoArquivoComandoAudio != null && caminhoArquivoComandoAudio != undefined) {
            reproduzirAudio( msg, caminhoArquivoComandoAudio );
        }
    }
};