var fs = require('fs');

function verificarComandoSom(msg, command, comando, dirSom) {
    if (command == comando) {
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join()
                .then(connection => {
                    const stream = fs.createReadStream(dirSom);
                    connection.playStream(stream);
                });
        }
    }
}

module.exports = {
    tocarAudiosFuncao: function tocarAudios(msg, command) {
        
        verificarComandoSom( msg, command, 'ct', 'audio/ct.mp3' );
        verificarComandoSom( msg, command, 'mimimi', 'audio/mimimi.mp3' );
        verificarComandoSom( msg, command, 'balboa', 'audio/balboa.mp3' );
        verificarComandoSom( msg, command, 'lavender', 'audio/lavender.mp3' );
        verificarComandoSom( msg, command, 'paul', 'audio/paulwalker.mp3' );
        verificarComandoSom( msg, command, 'nham', 'audio/nham.mp3' );
        verificarComandoSom( msg, command, 'ogas', 'audio/ogas.mp3' );
        verificarComandoSom( msg, command, 'transar', 'audio/euquerotransar.mp3' );
        verificarComandoSom( msg, command, 'crambone', 'audio/crambone.mp3' );
        verificarComandoSom( msg, command, 'pepemoreno', 'audio/pepemoreno.mp3' );
        verificarComandoSom( msg, command, 'furao', 'audio/furao.mp3' );
        //awesome
        verificarComandoSom( msg, command, 'teclado', 'audio/queissoporra.mp3' );
        //awesome end
        verificarComandoSom( msg, command, 'eitaporra', 'audio/eitaporra.mp3' );
        verificarComandoSom( msg, command, 'cavalo', 'audio/cavalo.mp3' );
        verificarComandoSom( msg, command, 'pqp', 'audio/putaquepariu.mp3' );
        verificarComandoSom( msg, command, 'naruto', 'audio/naruto.mp3' );
        verificarComandoSom( msg, command, 'faustao', 'audio/faustao.mp3' );
        verificarComandoSom( msg, command, 'gol', 'audio/olhaogol.mp3' );
        verificarComandoSom( msg, command, 'aguia', 'audio/aguia.mp3' );
        verificarComandoSom( msg, command, 'porra', 'audio/porra.mp3' );
        verificarComandoSom( msg, command, 'vento', 'audio/vento.mp3' );
        verificarComandoSom( msg, command, 'comercu', 'audio/comercu.mp3' );
        verificarComandoSom( msg, command, 'otavioneto', 'audio/otavioneto.mp3' );
        verificarComandoSom( msg, command, 'turndown', 'audio/turndown.mp3' );
        verificarComandoSom( msg, command, 'pumped', 'audio/pumped.mp3' );
        verificarComandoSom( msg, command, 'bomb', 'audio/bomb.mp3' );
        verificarComandoSom( msg, command, 'divecorolho', 'audio/divecorolho.mp3' );
        verificarComandoSom( msg, command, 'trollando', 'audio/trollando.mp3' );
        verificarComandoSom( msg, command, 'fuckme', 'audio/fuckme.mp3' );
        verificarComandoSom( msg, command, 'eoq', 'audio/eoq.mp3' );
        verificarComandoSom( msg, command, 'grossa', 'audio/grossa.mp3' );
        verificarComandoSom( msg, command, '1100', 'audio/1100_dano.mp3' );
        verificarComandoSom( msg, command, 'brinks', 'audio/ta_de_brinks.mp3' );
        verificarComandoSom( msg, command, 'sexo', 'audio/OSEXO.mp3' );
        verificarComandoSom( msg, command, 'putitrain', 'audio/Putitrain.mp3' );
        verificarComandoSom( msg, command, 'bronse', 'audio/bronse.mp3' );
        verificarComandoSom( msg, command, 'cabalo', 'audio/cabalo_imundo.mp3' );
        verificarComandoSom( msg, command, 'america', 'audio/America.mp3' );
        verificarComandoSom( msg, command, 'hehehe', 'audio/HEHEHE.mp3' );
        verificarComandoSom( msg, command, 'show', 'audio/show.mp3' );
        verificarComandoSom( msg, command, 'body', 'audio/bodybuilder.mp3' );
        verificarComandoSom( msg, command, 'arquivo', 'audio/arquivox.mp3' );
        verificarComandoSom( msg, command, 'chola', 'audio/chola.mp3' );
        verificarComandoSom( msg, command, 'fdp', 'audio/filhodaputa.mp3' );
        verificarComandoSom( msg, command, 'cheirinho', 'audio/cheirinhodesexo.mp3' );
        verificarComandoSom( msg, command, 'mamando', 'audio/mamandoeu.mp3' );
        verificarComandoSom( msg, command, 'rapaz', 'audio/rapaz.mp3' );
        verificarComandoSom( msg, command, 'BIR', 'audio/bir.mp3' );
        verificarComandoSom( msg, command, 'tarzan', 'audio/tarzan.mp3' );
        verificarComandoSom( msg, command, 'frota', 'audio/Frota.mp3' );
        verificarComandoSom( msg, command, 'viadao', 'audio/viadao.mp3' );
        verificarComandoSom( msg, command, 'gemido', 'audio/gemido.mp3' );
        verificarComandoSom( msg, command, 'uva', 'audio/uva.mp3' );
        verificarComandoSom( msg, command, 'vaisim', 'audio/quenvaidar.mp3' );
        verificarComandoSom( msg, command, 'sono', 'audio/sonobroxa.mp3' );
        verificarComandoSom( msg, command, 'paladino', 'audio/danielpaladino.mp3' );
        verificarComandoSom( msg, command, 'away', 'audio/away.mp3' );
        verificarComandoSom( msg, command, 'johnny', 'audio/johnnysolo.mp3' );
        verificarComandoSom( msg, command, 'triple', 'audio/triple.mp3' );
        verificarComandoSom( msg, command, 'barao', 'audio/barao.mp3' );
        verificarComandoSom( msg, command, 'huehue', 'audio/ChicoSounds.mp3' );
        verificarComandoSom( msg, command, 'chico', 'audio/sexoanal.mp3' );
        verificarComandoSom( msg, command, 'transa', 'audio/transa.mp3' );
        verificarComandoSom( msg, command, 'akbar', 'audio/akbar.mp3' );
        verificarComandoSom( msg, command, 'morto', 'audio/morto.mp3' );
        verificarComandoSom( msg, command, 'whatisaman', 'audio/whatisaman.mp3' );
        verificarComandoSom( msg, command, 'sadness', 'audio/sadness.mp3' );
        verificarComandoSom( msg, command, 'dracul', 'audio/dracul.mp3' );
        verificarComandoSom( msg, command, 'formula1', 'audio/formula1.mp3' );
        verificarComandoSom( msg, command, 'hornet', 'audio/hornet.mp3' );
        verificarComandoSom( msg, command, 'kassino', 'audio/kassino.mp3' );
        verificarComandoSom( msg, command, 'vaidj', 'audio/vaidj.mp3' );
        verificarComandoSom( msg, command, 'aekassinao', 'audio/aekassinao.mp3' );
        verificarComandoSom( msg, command, 'bankai', 'audio/bankai.mp3' );
        verificarComandoSom( msg, command, 'tchau', 'audio/tchau.mp3' );
        verificarComandoSom( msg, command, 'golfinho', 'audio/golfinho.mp3' );
        verificarComandoSom( msg, command, 'titanic', 'audio/titanic.mp3' );
        verificarComandoSom( msg, command, 'elefante', 'audio/elefante.mp3' );
        
    }
};