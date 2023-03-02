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
        name: 'Página de Empresa Dínamica',
        icons: ['laravel-icon.png', 'css-icon.png', 'php-icon.png'],
        tags: ['Full-Stack', 'slick', 'Administrativo', 'Login', 'Dinâmico', 'Responsivo'],
        screen: 'telairrigafacil.png',
        description: 'Página de contúedo dínamico, desenvolvida na Adapti Empresa Junior, em uma esquipe com mais tres pessoas. Este projeto, desenvolvido com Laravel, foi realizado para atender a demanda do cliente que precisava deum site, bem como poder atualizar as informações e banners deste site, o papel do sistema administrativo.',
        adapti: true,
        seeMore: '/irrigafacil',
    },
    {
        id: 5,
        name: 'Cadastro de E-mails',
        icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
        tags: ['Full-Stack', 'API Rest', 'MySQL', 'Sequelize'],
        screen: 'telacrud.png',
        description: 'Um CRUD, que é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuários, coletando seus nomes e emails, alem de gera um ID para cada. O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.',
        link: 'https://github.com/Ruan-Azeredo/crud-usuarios-React-',
        seeMore: '/cadastroemails'
    },
    {
        id: 6,
        name: 'Buscador de Imagens',
        icons: ['react-icon.png', 'tailwind-icon.png', 'js-icon.png'],
        tags: ['Front-end', 'Consumo de API'],
        screen: 'telabuscaimgs.png',
        description: 'Um pesquisador de imagens, onde pode-se adicionar algum tema, serão exibidas imagens relacionadas a este tema, o projeto utiliza um consumo de API de maneira nativa, utilizando o Fetch. A estilização da aplicação utiliza Tailwind.css e CSS.',
        link: 'https://github.com/Ruan-Azeredo/Buscador-de-Imagens',
        seeMore: 'https://buscador-de-imagens-five.vercel.app/'
    }
    // {
    //     id: 6,
    //     name: 'Sistema Imobiliario'
    // }
]

export const sobreMim = 'Ola, meu chamo Ruan, tenho 20 anos e estou trilhando este caminho de Desenvolvedor Web. Gosto muito de desenvolver interfaces Front-end, porem estou sempre aberto a desenvolver o Back-end de algumas aplicações, afinal, gosto de construir aplicações completas que possa ver funcionando no final. Sou um grande fã de JavaScript e gosto de desenvolver alguns designs também. Gosto de estar sempre aberto para novas tecnologias.'

export const trajetorias = [
    {
        name: 'UFES',
        logo: 'logo-ufes.png',
        description: 'Após terminar meu Ensino Médio, que foi atrelado ao Técnico em Mecânica, decidi que queria seguir a profissão de programador. Em função disso, entrei no curso de Engenharia da Computação, que curso na UFES.',
        time: 'ABR/2021',
        link: 'https://www.ufes.br/'
    },
    {
        name: 'Adapti',
        logo: 'logo-adapti.png',
        description: 'Entrei na Empresa Junior da Computação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como programar e ter a contato com o mundo do desenvolvimento web.',
        time: 'SET/2021',
        link: 'https://www.adapti.info/'
    }
]

export const myBooks = {
    frontBack: true,
    title: 'MyBooks',
    icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png', 'PostgreSQL'],
    tags: ['Full-Stack', 'Sistema', 'API Rest', 'Dark Mode', 'Autenticação com Google', 'PostgreSQL'],
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
    tags: ['Full-Stack', 'Sistema', 'API Rest', 'MySQL'],
    description: 'Este projeto foi desenvolvido no bootcamp da TreinaWeb, e consiste em um sistema de CRUD feito com Laravel onde pode-se cadastrar diaristas e gera uma API, e esta aplicação gera uma API Rest. A parte do Next.js, mostra um campo, onde o usuário digita um cep e o sistema mostra os diaristas presentes proximas a este cep.',
    linkFront: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
    linkBack: 'https://github.com/Ruan-Azeredo/Bootcamp-Api-laravel-e-diaristas',
    mainImg: 'telaediaristas.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'telaprincipaldiarista.png',
                txt: 'Em geral o funcionamento da parte feita em Next.js possui um objetivo simples, que é consultar a API quais diaristas estão proximas ao endereço que foi passado, e em sequencia, receber estes diaristas e mostra-los ao usuario, de maneira simples, rápida e facil.'
            },
            {
                img: 'L_diaristasencontrados.png',
                txt: 'com as informações recebidas pela API Rest, o site mostra os diaristas proximos a ele, de acordo com o CEP, juntamente com algumas informaçôes relevantes sobre estes diaristas.'
            },
            {
                img: 'telaediaristascrud.png',
                txt: 'O sistema de cadastro dos diaristas foi desenvolvido em Laravel, php, que permite a construção de um sistema full-stack. O mesmo possui conexão com o banco de dados, que neste projeto utiliza o MySQL. A parte a qual possui interação com o usuario administrador é basicamente um CRUD, com as opções de criar, editar, ver e excluir quaisquer diarista.'
            },
            {
                img: 'editardiaristas.png',
                txt: 'Para adicionar e atualizar informações, existe um formulario, que foi desenvolvido nativamente com o Laravel, com diversos tipos de inputs. Estes campos do formulario também contam com requisições para que o usuario não adicione diaristas sem algumas informações importantes para o funcionamento da API.'
            }
        ],
        back: [
            {
                img: 'viacepediaristas.png',
                txt: 'A principal tarefa que o back-end deste projeto cumpre, é cadastrar os diaristas no banco de dados e utilizar o CEP dos mesmos para acessar a API viaCEP, para pegar a localização deste endereço, bem como, pegar o CEP digitado pelo usuario no site aberto, e consultar, de maneira semelhante a consulta dos diaristas, a localização do ususario do site, e comparar com a dos diaristas, para dessa forma poder retornar apenas os diaristas que tem compatibilidade de localização.'
            },
            {
                img: 'requisicoesediaristas.png',
                txt: 'Dentro do back-end em Laravel,foram feitas diversas regras de negocio, que ajudam no funcionamento do sistema, para que não sejam inseridas no  banco de dados, informações que não condizem com o padrão que foi adotado. Assim diminuindo o indice de problemas que podem vir a ocorrer.'
            }
        ]
    }
}

export const irrigafacil = {
    frontBack: true,
    title: 'Página de Empresa Dínamica',
    icons: ['laravel-icon.png', 'css-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'slick', 'Administrativo', 'Login', 'Dinâmico'],
    description: 'Página de contúedo dínamico, desenvolvida na Adapti Empresa Junior, em uma esquipe com mais tres pessoas. Este projeto, desenvolvido com Laravel, foi realizado para atender a demanda do cliente que precisava deum site, bem como poder atualizar as informações e banners deste site, o papel do sistema administrativo.',
    mainImg: 'telairrigafacil.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'irrigafaciltop.png',
                txt: 'A parte do site deste projeto conta com um banner, feito com a biblioteca slick, alem de outras sections, como de Sobre Nós, que possui animação na ha exibição do MVV, e a de Serviços, que mostra os tipos de serviçes, que que se ajustam dinamicamente.'
            },
            {
                img: 'irrigafacilbot.png',
                txt: 'A parte de Portifólio e Blog, mostra alguns exemplares, os adicionados mais recentemente, ambos contam com animações para exibição de informações na index, e uma página dedicada para mostrar todos os exemplares, de cada projeto e postagem. O projeto também conta com uma área de contato, onde é mostrada a localização, utilizando a API do Google Maps.'
            }
        ], back: [
            {
                img: 'crudirrigafacil.png',
                txt: 'O back-end desta landing page dinâmica é feita no Laravel também, uma vez que este sistema possui uma arquitetura monolitica, caracteristica do framework. A principal função do back-end desta aplicação, é cadastrar as informações como Posts, Banners, Sobre nós e outras informações e guardar estes dados no banco de dados, que neste projeto utiliza o MySQL, um banco realacional.',
            },
            {
                img: 'requestirrigafacil.png',
                txt: 'Este projeto também conta com features de login, que protege as rotas de edição de conteúdo e regras de negocio, que definem alguns padrões de informações que podem ser adicionadas ao banco de dados, para que dessa forma, informações de tipos diferentes ao esperado não poderão ser adicionadas, evitando assim problemas que podem vir por conta desta incompatibilidade.'
            }
        ]
    }
}

export const crud = {
    frontBack: true,
    title: 'Cadastro de E-mails',
    icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
    tags: ['Full-Stack', 'API Rest', 'MySQL', 'Sequelize'],
    description: 'Um CRUD, que é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuários, coletando seus nomes e emails, alem de gera um ID para cada. O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.',
    mainImg: 'telacrud.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'principalcrud.png',
                txt: 'Este projeto foi desenvolvido com uma estrutura bem definida de front-end e back-end por meio do uso dos frameworks React.js e Node.js, respectivamente. Como ambos frameworks, utilizam a linguagem JavaScript, e a conexão entre o front e o back é feita atravez de uma API Rest, com o auxilio do Axios, tanto em React.js como no Node.js.'
            },
            {
                img: 'modalcrud.png',
                txt: 'O design deste projeto foi desenvolvido por mim também, e em geral mostra uma tabela, com as opções padrões de um CRUD, de ver, editar, deletar e atualizar cada item. Também foi utilizado a biblioteca "react-modal" para a utilização de modais.'
            }
        ],
        back: [
            {
                img: 'controllercrud.png',
                txt: 'O Back-end deste projeto foi desenvolvido atravez do Node.js, que utiliza JavaScript, e foi feito utilizando uma estruruta com /config, que faz a conexão com o banco de dados, /migrations, que monta as tabelas, /models, que modela as tabelas, e /controllers, que gerencia as informações e controla as chamadas API Rest, que são feitas por chamdas HTTP.'
            },
            {
                img: 'migrationcrud.png',
                txt: 'A parte de conexão com o banco de dados fica por responsabilidade do Sequelize, que um ORM que permite a conexão com o MySQL, um banco de dados relacional. Este banco de dados foi desenvolvido utilizando container com Docker.'
            }
        ]
    }
}