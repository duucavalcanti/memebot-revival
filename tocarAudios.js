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
        
        /*
        if (equalsIgnoreCase(command, 'mimimi')) {
            sendAudio(userID, 'audio/mimimi.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'balboa')) {
            sendAudio(userID, 'audio/balboa.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'lavender')) {
            sendAudio(userID, 'audio/lavender.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'nham')) {
            sendAudio(userID, 'audio/nham.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'paul')) {
            sendAudio(userID, 'audio/paulwalker.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'ogas')) {
            sendAudio(userID, 'audio/ogas.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'transar')) {
            sendAudio(userID, 'audio/euquerotransar.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'crambone')) {
            sendAudio(userID, 'audio/crambone.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'pepemoreno')) {
            sendAudio(userID, 'audio/pepemoreno.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'furao')) {
            sendAudio(userID, 'audio/furao.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'teclado')) {
            sendAudio(userID, 'audio/queissoporra.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'eitaporra')) {
            sendAudio(userID, 'audio/batida.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'cavalo')) {
            sendAudio(userID, 'audio/cavalo.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'pqp')) {
            sendAudio(userID, 'audio/putaquepariu.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'naruto')) {
            sendAudio(userID, 'audio/naruto.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'faustao')) {
            sendAudio(userID, 'audio/faustao.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'gool')) {
            sendAudio(userID, 'audio/olhaogol.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'aguia')) {
            sendAudio(userID, 'audio/aguia.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'porra')) {
            sendAudio(userID, 'audio/porra.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'vento')) {
            sendAudio(userID, 'audio/vento.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'comercu')) {
            sendAudio(userID, 'audio/comercu.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'otavioneto')) {
            sendAudio(userID, 'audio/otavioneto.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'turndown')) {
            sendAudio(userID, 'audio/turndown.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'pumped')) {
            sendAudio(userID, 'audio/pumped.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'bomb')) {
            sendAudio(userID, 'audio/bomb.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'divecorolho')) {
            sendAudio(userID, 'audio/divecorolho.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'trollando')) {
            sendAudio(userID, 'audio/trollando.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'fuckme')) {
            sendAudio(userID, 'audio/fuckme.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'eoq')) {
            sendAudio(userID, 'audio/EOQ.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'grossa')) {
            sendAudio(userID, 'audio/chupa_grossa_rola.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'hastad')) {
            sendAudio(userID, 'audio/1100_dano.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'brinks')) {
            sendAudio(userID, 'audio/ta_de_brinks.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'sexo')) {
            sendAudio(userID, 'audio/OSEXO.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'putitrain')) {
            sendAudio(userID, 'audio/Putitrain.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'bronse')) {
            sendAudio(userID, 'audio/cara_bronse.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'cabalo')) {
            sendAudio(userID, 'audio/cabalo_imundo.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'america')) {
            sendAudio(userID, 'audio/America.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'hehehe')) {
            sendAudio(userID, 'audio/HEHEHE.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'show')) {
            sendAudio(userID, 'audio/show.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'body')) {
            sendAudio(userID, 'audio/bodybuilder.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'arquivo')) {
            sendAudio(userID, 'audio/arquivox.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'chola')) {
            sendAudio(userID, 'audio/chola.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'fdp')) {
            sendAudio(userID, 'audio/filhodaputa.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'cheirinho')) {
            sendAudio(userID, 'audio/cheirinhodesexo.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'mamando')) {
            sendAudio(userID, 'audio/mamandoeu.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'rapaz')) {
            sendAudio(userID, 'audio/rapaz.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'BIR')) {
            sendAudio(userID, 'audio/bir.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'eita')) {
            sendAudio(userID, 'audio/eitaporra.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'tarzan')) {
            sendAudio(userID, 'audio/tarzan.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'frota')) {
            sendAudio(userID, 'audio/Frota.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'viadao')) {
            sendAudio(userID, 'audio/viadao.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'gemido')) {
            sendAudio(userID, 'audio/gemido.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'uva')) {
            sendAudio(userID, 'audio/uva.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'vaisim')) {
            sendAudio(userID, 'audio/quenvaidar.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'sono')) {
            sendAudio(userID, 'audio/sonobroxa.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'paladino')) {
            sendAudio(userID, 'audio/danielpaladino.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'away')) {
            sendAudio(userID, 'audio/away.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'johnny')) {
            sendAudio(userID, 'audio/johnnysolo.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'triple')) {
            sendAudio(userID, 'audio/triple.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'barao')) {
            sendAudio(userID, 'audio/barao.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'huehue')) {
            sendAudio(userID, 'audio/ChicoSounds.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'chico')) {
            sendAudio(userID, 'audio/sexoanal.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'transa')) {
            sendAudio(userID, 'audio/querosaber.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'akbar')) {
            sendAudio(userID, 'audio/alahuakbar.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'morto')) {
            sendAudio(userID, 'audio/morto.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'whatisaman')) {
            sendAudio(userID, 'audio/whatisaman.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'sadness')) {
            sendAudio(userID, 'audio/sadness.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'dracul')) {
            sendAudio(userID, 'audio/dracul.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'formula1')) {
            sendAudio(userID, 'audio/formula1.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'hornet')) {
            sendAudio(userID, 'audio/hornet.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'kassino')) {
            sendAudio(userID, 'audio/kassino.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'vaidj')) {
            sendAudio(userID, 'audio/vaidj.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'aekassinao')) {
            sendAudio(userID, 'audio/aekassinao.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'bankai')) {
            sendAudio(userID, 'audio/ganbate.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'tchau')) {
            sendAudio(userID, 'audio/tchau.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'golfinho')) {
            sendAudio(userID, 'audio/golfinho.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'titanic')) {
            sendAudio(userID, 'audio/titanic.mp3', bot);
        }

        if (equalsIgnoreCase(command, 'elefante')) {
            sendAudio(userID, 'audio/elefante.mp3', bot);
        }

        */
    }
};