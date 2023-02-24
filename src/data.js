export const projetos = [
    {
        id: 1,
        name: 'MyBooks',
        icons: ['next-icon.png', 'node-icon.png', 'firebase-icon.png'],
        tags: ['Full-Stack', 'Sistema', 'API Rest'],
        screen: 'telamybooks.png',
        description: 'Este projeto consiste em uma aplicação onde o usuário pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados, que se comunicam via API.',
        link: 'https://github.com/Ruan-Azeredo/MyBooks',
        adapti: true,
        seeMore: '/mybooks'
    },
    {
        id: 2,
        name: 'e-diaristas',
        icons: ['next-icon.png', 'stayled-icon.png', 'laravel-icon.png'],
        tags: ['tag de teste', 'outro teste'],
        screen: 'telaediaristas.png',
        description: 'Este projeto foi desenvolvido no bootcamp da TreinaWeb, e consiste em um sistema com Back-end em Laravel onde pode-se cadastrar diaristas e gera uma API. A parte do Front-end foi desenvolvida em Next.js, onde o usuário digita um cep e o sistema mostra os diaristas presentes proximas ao cep.',
        link: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas'
    },
    {
        id: 3,
        name: 'Crud',
        icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
        tags: ['lorem inpsum'],
        screen: 'telamybooks.png',
        description: 'Um CRUD, que é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuários, coletando seus nomes e emails, alem de gera um ID para cada. O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.',
        link: 'https://github.com/Ruan-Azeredo/crud-usuarios-React-'
    },
]

export const sobreMim = 'Ola, meu chamo Ruan, tenho 20 anos e estou trilhando este caminho de Desenvolvedor Web. Gosto muito de desenvolver interfaces Front-end, porem estou sempre aberto a desenvolver o Back-end de algumas aplicações, afinal, gosto de construir aplicações completas que possa ver funcionando no final. Sou um grande fã de JavaScript e gosto de desenvolver alguns designs também. Gosto de estar sempre aberto para novas tecnologias.'

export const trajetorias = [
    {
        name: 'UFES',
        logo: 'logo-ufes.png',
        description: 'Após terminar meu Ensino Médio, que foi atrelado ao Técnico em Mecânica, decidi que queria seguir a profissão de programador. Em função disso, entrei no curso de Engenharia da Computação, que curso na UFES.',
        time: 'ABR/2021'
    },
    {
        name: 'Adapti',
        logo: 'logo-adapti.png',
        description: 'Entrei na Empresa Junior da Computação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como programar e ter a contato com o mundo do desenvolvimento web.',
        time: 'SET/2021',
    }
]

export const myBooks = {
    frontBack: true,
    title: 'MyBooks',
    icons: ['next-icon.png', 'node-icon.png', 'firebase-icon.png'],
    tags: ['Full-Stack', 'Sistema', 'API Rest'],
    description: 'Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.',
    linkFront: 'github.com/Ruan-Azeredo/MyBooks',
    linkBack: 'github.com/Ruan-Azeredo/MyBooks-Backend',
    mainImg: 'telamybooks.png',
    type: 'frontAndBack',
    conteudo: {
    front: [
        {
        img: 'L_techmybooks.png',
        txt: 'O Front deste projeto foi desenvolvido com o Next, que é um Framework que funciona utilizando a biblioteca React, e que permite uma renderização Server Side. Para estilização, foi utilizado o Framework Tailwind CSS. Ainda no projeto em Next foram adicionadas outras dependencias para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'
        }, {
        img: 'figmamybooks.png',
        txt: 'A primeira parte do projeto foi o desenvolvimento da identidade visual do mesmo, que foi feita atravez do softwere Figma. Nele já foram feitas as referencia de como deveriam ficar as principais tela, e os Modais, os quais seriam utilizados para adicionar, atualizar e deletar os Escritores, Livros e Resenhas. No Figma tambem foi definido como seria o tema escuro e o claro, ao lado pode-se ver o projeto no tema escuro.'
        }, {
        img: 'L_arquitemybooks.png',
        txt: 'A estruturação do projeto foi feita utilizando o principio nativo de componentização do React. Dividi o projeto em pastas de Pages, que contem minhas páginas principais, Functions, que comporta as funções de requisição em axios e outras funções que são usadas em varios locais do sistema, Context que armazenam os Hooks globais, Conponents, que guarda os componentes JSX e o Content que possui componentes que comportão outros elementos.'
        }, {
        img: 'loginmybooks.png',
        txt: 'O projeto possui a tela de login, com autenticação, através do google, que é desenvolvido através do uso do firebase, o login pode ser feito com o nome, email e senha ou pela login com o google. O login do usuario permanece no sistema através dos cookies e, os quais quando expiram, ou quando o usuário fizer o logout, cada rota do site será redirecionada para a tela de login novamente.'
        }, {
        img: 'modalmybooks.png',
        txt: 'A logica do sistema consiste em no usuário cadastrar seus autores, dentro de autores os livros referentes, e dentro destes livros cadastrar as resenhas, que são o objetivo principal do usuário. O sistema possui a funcionalidade de além de cadastro de todos objetos descritos acima, também permite visualizar, editar e excluir todos os dados.'
        }, {
        img: 'L_darkmodemybooks.png',
        txt: 'O sistema possui como features o modo escuro, que salva a preferencia do usuário no localhost do navegador, e também possui um card de informações do usuário.'
        }
    ], back: [
        {
        img: 'L_techbackmybooks.png',
        txt: 'O Back-end do sistema foi feito utilizando Node.js, com o framework Express, com o Nodemon para auxiliar no desenvolvimento, com o Sequelize para a estrutura do projeto com o banco de dados, que é feito com PostgreSQL, utilizando o Docker, para gerar o container do banco de dados, também foi utilizado o Cors para a validação das rotas de API, e o Multer para o arquivamento e manipulação de imagens.'
        }, {
        img: 'L_arqbackmybooks.png',
        txt: 'A API foi arquitetada da seguinte forma, com um config, que faz a comunicação com o o container que roda o PostgreSQL, as migrations e os models possuem o as estruturas das tabelas dos bancos de dados, que são as tabelas de usuários, autores, livros e resenhas respectivamente. A pasta public comporta as imagens que são arquivadas atravez do Multer.'
        }, {
        img: 'controllerDeleteBook.png',
        txt: 'Os Controllers são onde são definidas efetivamente as rotas de API, aqui temos um exemplo, da rota de delete dos BookController, que alem de apagar o livro, precisa apagar a imagem que está salva em /public.'
        }
    ]}
}