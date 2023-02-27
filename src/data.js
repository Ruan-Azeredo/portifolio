export const projetos = [
    {
        id: 1,
        name: 'MyBooks',
        icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png', 'PostgreSQL'],
        tags: ['Full-Stack', 'Sistema', 'API Rest', 'Dark Mode', 'Autenticação com Google', 'PostgreSQL'],
        screen: 'telamybooks.png',
        description: 'Este projeto consiste em uma aplicação onde o usuário pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados, que se comunicam via API.',
        link: 'https://github.com/Ruan-Azeredo/MyBooks',
        // adapti: true,
        seeMore: '/mybooks'
    },
    {
        id: 2,
        name: 'e-diaristas',
        icons: ['next-icon.png', 'react-icon.png', 'typescript-icon.png', 'stayled-icon.png', 'laravel-icon.png', 'php-icon.png'],
        tags: ['Full-Stack', 'Sistema', 'MySQL', 'API Rest'],
        screen: 'telaediaristas.png',
        description: 'Este projeto foi desenvolvido no bootcamp da TreinaWeb, e consiste em um sistema com Back-end em Laravel, com uma camada de Front-end para o administrador, onde pode-se cadastrar diaristas e gera uma API. A parte Front-end que fica em contato com o usuario foi desenvolvida em Next.js, onde o usuário digita um cep e o sistema mostra os diaristas presentes proximas ao cep.',
        link: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
        seeMore: '/ediaristas'
    },
    {
        id: 3,
        name: 'Landing page de Sistema Financeiro',
        icons: ['react-icon.png', 'js-icon.png', 'tailwind-icon.png'],
        tags: ['react-typed', 'Landing Page', 'Estático', 'Responsivo', 'Front-end'],
        screen: 'telafinancas.png',
        description: 'Uma Landing Page, com conteúdo estatico, feita utilizando React.js e Tailwind.css para estilização. Também foi utilizado neste projeto, a lib react-icons e react-typed, para alguns icones e animação de leitura, respectivamente. O projeto é 100% responsivo, sendo está funcionalidade desenvolvida atravez do Tailwind também.',
        link: 'https://github.com/Ruan-Azeredo/Finance-Landing-Page',
        seeMore: 'https://finance-landing-page-ruby.vercel.app/'
    },
    {
        id: 4,
        name: 'Página de empresa Dínamica'
    },
    {
        id: 5,
        name: 'Cadastro de E-mails',
        icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
        tags: ['lorem inpsum'],
        screen: 'telamybooks.png',
        description: 'Um CRUD, que é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuários, coletando seus nomes e emails, alem de gera um ID para cada. O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.',
        link: 'https://github.com/Ruan-Azeredo/crud-usuarios-React-'
    },
    {
        id: 6,
        name: 'Sistema Imobiliario'
    }
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
    icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png'],
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
        img: 'L_arqfrontmybooks.png',
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

export const ediaristas = {
    frontBack: true,
    title: 'e-diariastas',
    icons: ['next-icon.png', 'react-icon.png', 'typescript-icon.png', 'stayled-icon.png', 'laravel-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'Sistema', 'API Rest'],
    description: 'Este projeto foi desenvolvido no bootcamp da TreinaWeb, e consiste em um sistema de CRUD feito com Laravel onde pode-se cadastrar diaristas e gera uma API, e esta aplicação gera uma API Rest. A parte do Next.js, mostra um campo, onde o usuário digita um cep e o sistema mostra os diaristas presentes proximas a este cep.',
    linkFront: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
    linkBack: 'https://github.com/Ruan-Azeredo/Bootcamp-Api-laravel-e-diaristas',
    mainImg: 'telaediaristas.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'telaprincipaldiarista.png',
                txt: 'Em geral o funcionamento da parte feita em Next.js possui um objetivo simples, que é consultar a API quais diaristas estão proximas ao endereço que foi passado, e em sequencia, receber estes diaristas e mostralos ao usuario, de maneira simples, rápida e facil.'
            },
            {
                img: 'L_diaristasencontrados.png',
                txt: 'com as informações recebidas pela API Rest, '
            },
            {
                img: 'telaediaristascrud.png',
                txt: 'com as informações recebidas pela API Rest, '
            },
            {
                img: 'editardiaristas.png',
                txt: 'com as informações recebidas pela API Rest, '
            }
        ],
        back: [
            {
                img: '...',
                txt: '...'
            }
        ]
    }
}