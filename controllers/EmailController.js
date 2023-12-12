const enviarEmail = (req, res) => {
    const nodeMailer = require("nodemailer");
    const msgHtml = `
            Olá!<br/><br/>
            Uma nova mensagem foi enviada pelo formulário de suporte do sistema <b>Arkad</b>.
            <br/><br/>
            Data: ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours() - 3}:${new Date().getMinutes()} <br/>
            <b>Nome completo: </b> ${req.body.nome}<br/>
            <b>E-mail:</b> ${req.body.email}<br/>
            <b>Telefone:</b> ${req.body.telefone}<br/>
            <b>Assunto:</b> ${req.body.assunto}<br/>
            <b>Mensagem:</b><br/>
            ${req.body.mensagem}
          `;
    try {
        nodeMailer
            .createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secure: true,
                service: "Outlook365",
                auth: {
                    user: "jeosafaferreira@hotmail.com",
                    pass: "34848998J",
                },
                tls: {
                    ciphers: "SSLv3",
                },
            })
            .sendMail({
                from: "Arkad - Suporte <jeosafaferreira@hotmail.com>",
                to: "jeosafaferreira@edu.unifor.br, jeosafaferreira@hotmail.com",
                subject: "Arkad - Suporte",
                html: msgHtml,
            });
        res.status(200).json("E-mail enviado com sucesso!");
    } catch {
        res.status(500).json("Erro. Contate o suporte");
    }
};

module.exports = {
    enviarEmail,
};
