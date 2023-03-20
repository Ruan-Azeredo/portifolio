export const projetos = [
    {
        id: 1,
        name: 'MyBooks',
        icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png'],
        tags: ['Full-Stack', 'Sistema', 'API Rest', 'Dark Mode', 'Autenticação com Google', 'PostgreSQL'],
        screen: 'telamybooks.png',
        description: 'Este projeto consiste em uma aplicação onde o usuário pode cadastrar seus livros e resenhas, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados, que se comunicam via API.',
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
        description: 'Este projeto foi desenvolvido no bootcamp da TreinaWeb, consiste em um sistema com Back-end em Laravel com uma camada de Front-end para o administrador, onde pode-se cadastrar diaristas e gerar uma API. A parte Front-end que fica em contato com o usuário foi desenvolvida em Next.js, onde o usuário digita um cep e o sistema mostra os diaristas presentes próximos a ele.',
        link: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
        seeMore: '/ediaristas'
    },
    {
        id: 3,
        name: 'Landing page de Sistema Financeiro',
        icons: ['react-icon.png', 'js-icon.png', 'tailwind-icon.png'],
        tags: ['react-typed', 'Landing Page', 'Estático', 'Responsivo', 'Front-end'],
        screen: 'telafinancas.png',
        description: 'Uma Landing Page, com conteúdo estatístico, feita utilizando React.js e Tailwind.css para estilização. Também foi utilizado neste projeto a lib react-icons e react-typed para alguns ícones e animação de leitura, respectivamente. O projeto é 100% responsivo, sendo esta funcionalidade desenvolvida através do Tailwind também.',
        link: 'https://github.com/Ruan-Azeredo/Finance-Landing-Page',
        seeMore: 'https://finance-landing-page-ruby.vercel.app/'
    },
    {
        id: 4,
        name: 'Página de Empresa Dinâmica',
        icons: ['laravel-icon.png', 'css-icon.png', 'php-icon.png'],
        tags: ['Full-Stack', 'slick', 'Administrativo', 'Login', 'Dinâmico', 'Responsivo'],
        screen: 'telairrigafacil.png',
        description: 'Página de conteúdo dinâmico, desenvolvida na Adapti Empresa Júnior, em uma equipe com mais três pessoas. Este projeto, desenvolvido com Laravel, foi realizado para atender a demanda do cliente que precisava de um site, bem como poder atualizar as informações e banners deste site, o papel do sistema administrativo.',
        adapti: true,
        seeMore: '/irrigafacil',
    },
    {
        id: 5,
        name: 'Cadastro de E-mails',
        icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
        tags: ['Full-Stack', 'API Rest', 'MySQL', 'Sequelize'],
        screen: 'telacrud.png',
        description: 'Um CRUD é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuários, coletando seus nomes e emails, além de gerar um ID para cada. O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.',
        link: 'https://github.com/Ruan-Azeredo/crud-usuarios-React-',
        seeMore: '/cadastroemails'
    },
    {
        id: 6,
        name: 'Buscador de Imagens',
        icons: ['react-icon.png', 'tailwind-icon.png', 'js-icon.png'],
        tags: ['Front-end', 'Consumo de API'],
        screen: 'telabuscaimgs.png',
        description: 'Um pesquisador de imagens, onde pode-se adicionar algum tema e serão exibidas imagens relacionadas ao mesmo, o projeto utiliza um consumo de API de maneira nativa, utilizando o Fetch. A estilização da aplicação utiliza Tailwind.css e CSS.',
        link: 'https://github.com/Ruan-Azeredo/Buscador-de-Imagens',
        seeMore: 'https://buscador-de-imagens-five.vercel.app/'
    }
    // {
    //     id: 6,
    //     name: 'Sistema Imobiliario'
    // }
]

export const sobreMim = 'Olá, me chamo Ruan, tenho 21 anos e estou trilhando este caminho de Desenvolvedor Web. Gosto muito de desenvolver interfaces Front-end, porém estou sempre aberto a desenvolver o Back-end de algumas aplicações, afinal, gosto de construir aplicações completas que possa ver funcionando no final. Sou um grande fã de JavaScript e gosto de desenvolver alguns designs também. Gosto de estar sempre aberto para novas tecnologias.'

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
        description: 'Entrei na Empresa Júnior da Computação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como programar e ter contato com o mundo do desenvolvimento web.',
        time: 'SET/2021',
        link: 'https://www.adapti.info/'
    }
]

export const xp = [
    ['Responsividade', 'Página Dinâmica Empresa, e-diaristas, Landing Page e outros'], 
    ['Java', 'Utilizei na aula de Programação Orientada ao Objeto na UFES'],
    ['Estrutura de Dados', 'Diciplina que cursei e apliquei na UFES'],
    ['C', 'Desenvolvi nas aulas de Estrutura de dados na UFES'],
    ['Next.js', 'Fiz curso especializado e utilizei em Projetos como MyBooks e e-diaristas'],
    ['SEO', 'Apliquei em projetos desenvolvidos na Adapti'],
    ['React-hooks', 'Aplicada em todos os projetos com React.js'],
    ['Laravel', 'Aprendi na Adapti e utilizei em todos os projetos lá'],
    ['Git', 'Utilizo em todos os Projeto, como gerenciamento de Branchs'],
    ['Design Pattern'],
    ['JavaScript', 'Linguagem principal do Front-end, React.js, Next.js, utilizada em todos os Projetos'],
    ['Tailwind.css', 'Landing Page, MyBooks, Portifólio, Cadastro de E-mails, Buscador de Imagens'],
    ['Next UI', 'Biblioteca React.js User Interface'],
    ['CMS', 'Utilizado em alguns projetos da Adapti'],
    ['TypeScript'],
    ['GitHub', 'Utilizado em todos os projetos desenvolvidos https://github.com/Ruan-Azeredo'],
    ['Figma', 'Utilizado para desenvolver o UX UI de sistemas mais complexos'],
    ['Banco de Dados', 'MongoDB, PostgreSQL, MySQL'],
    ['Firebase', 'Utilizado principalmente para validação com o Google'],
    ['Styled Components','Utilizado no projeto e-diaristas'],
    ['Docker',  'Sistema de gerenciamento de banco de dados, utilizado nos back-ends em Node.js'],
    ['Bootstrap', 'Utilizado em alguns prjetos da Adapti'],
    ['PHP', 'Linguagem da Laravel, utlizado em todos os meus projetos'],
    ['Lógica de Programação', 'Tive contato na UFES e aplico nos projetos do dia-a-dia'],
    ['Slick', 'Biblioteca de carousel, muito importante em landing pages dinâmicas'],
    ['API Rest', 'Utilizada nos projetos Back-end e nos Front-end que consomem estas APIs'],
    ['Xampp', 'Sistema de gerenciamento de banco de dados que utilizei na Adapti'],
    ['Node.js', 'Framework para back-end, utliza JS, Cadastro de E-mails, MyBooks'],
    ['Python', 'Tive contato na UFES, desenvolvi alguns pequenos projetos e atividades com ele'],
    ['Acessibilidade', 'Padrão de regras e práticas que busco me atentar no Front-end'],
    ['PostgreSQL', 'Utilizado no MyBooks'],
    ['HTML', 'Linguagem de Marcação, utilizada em todos os projetos Front-end'],
    ['Arquitetura MVC', 'Arquitetura presente no Laravel, tenho familiaridade'],
    ['Dashboard', 'Desenvolvido em alguns prjetos pessoais e dentro da Adapti'],
    ['Sequelize', 'Biblioteca utilizada no back-end do Cadatro de e-mails e de MyBooks'],
    ['CSS', 'Utilizado em todos os projetos Front-end'],
    ['Scrum', 'Metodologia utilizada na Adapti nas equipes'],
    ['CRUD', 'conceito utilizado na maioria dos projetos Full-Stack e da Adapti'],
    ['Banco de dados Relacional', 'Engloba os projetos em PostgreSQL e MySQL'],
    ['React.js', 'Tecnologia favorita e de maior conforto'],
    ['MongoDB', 'Projeto na Faculdade'],
    ['Banco de dados NoSQL', 'Projeto em disciplina de POO'],
    ['Deploy Vercel', 'Onde estão hospedados alguns projetos deste portifólio em React.js e Next.js'],
    ['MySQL Workbench', 'Utilizado para contruir a modelagem dos bancos de dados dos Back-ends'],
    ['Grid e Flex', 'Conceito aplicado em todos os projetos Front-end'],
    ['jQuery', 'Utilizado em alguns projetos da Adpati para manipulação de JS'],
    ['Programação Orientada ao Objeto', 'Conceito aprendido na UFES e que aplico em todos os frameworks que utilizo'],
    ['CORS', 'Dependência que gerencia permissões de acesso utilizada no Back-end'],
    ['Níveis de Acesso', 'Utilizado principalmente em projetos da Adapti'],
    ['Express', 'Dependência utilizada em todos os projetos Node.js']
]
export const myBooks = {
    frontBack: true,
    title: 'MyBooks',
    icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png', 'PostgreSQL'],
    tags: ['Full-Stack', 'Sistema', 'API Rest', 'Dark Mode', 'Autenticação com Google', 'PostgreSQL'],
    description: 'Este projeto consiste em uma aplicação onde o usuário pode cadastrar seus livros e resenhas, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.',
    linkFront: 'github.com/Ruan-Azeredo/MyBooks',
    linkBack: 'github.com/Ruan-Azeredo/MyBooks-Backend',
    mainImg: 'telamybooks.png',
    type: 'frontAndBack',
    conteudo: {
    front: [
        {
        img: 'L_techmybooks.png',
        txt: 'O Front deste projeto foi desenvolvido com o Next, que é um Framework que funciona utilizando a biblioteca React, e que permite uma renderização Server Side. Para estilização, foi utilizado o Framework Tailwind CSS. Ainda no projeto em Next, foram adicionadas outras dependências para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'
        }, {
        img: 'figmamybooks.png',
        txt: 'A primeira parte do projeto foi o desenvolvimento da identidade visual, que foi feita através do softwere Figma. Nele já foram feitas as referência de como deveriam ficar as principais telas e os Modais, os quais seriam utilizados para adicionar, atualizar e deletar os Escritores, Livros e Resenhas. No Figma também foi definido como seria o tema escuro e claro, ao lado pode-se ver o projeto no tema escuro.'
        }, {
        img: 'L_arqfrontmybooks.png',
        txt: 'A estruturação do projeto foi feita utilizando o princípio nativo de componentização do React. O projeto foi dividido em pastas de Pages, que contém minhas páginas principais, Functions, que comportam as funções de requisição em axios e outras funções que são usadas em vários locais do sistema, Context que armazenam os Hooks globais, Conponents, que guardam os componentes JSX e o Content, que possui componentes que comportam outros elementos.'
        }, {
        img: 'loginmybooks.png',
        txt: 'O projeto possui a tela de login, com autenticação através do google, que é desenvolvido pelo uso do firebase. O login pode ser feito com o nome, email e senha ou pelo login com o google. O login do usuário permanece no sistema através dos cookies e, quando expiram ou quando o usuário fizer o logout, cada rota do site será redirecionada para a tela de login novamente.'
        }, {
        img: 'modalmybooks.png',
        txt: 'A lógica do sistema consiste no usuário cadastrar seus autores, dentro de autores, os livros referentes aos mesmos, e dentro destes livros cadastrar as resenhas, que são o objetivo principal do usuário. O sistema possui a funcionalidade de além do cadastro de todos os objetos descritos acima, também permitir visualizar, editar e excluir todos os dados.'
        }, {
        img: 'L_darkmodemybooks.png',
        txt: 'O sistema possui como features o modo escuro, que salva a preferência do usuário no localhost do navegador, e também possui um card de informações do usuário.'
        }
    ], back: [
        {
        img: 'L_techbackmybooks.png',
        txt: 'O Back-end do sistema foi feito utilizando Node.js, com o framework Express, o Nodemon para auxiliar no desenvolvimento, e com o Sequelize para a estrutura do projeto com o banco de dados, que é feito com PostgreSQL, utilizando o Docker, para gerar o container do banco de dados, também foi utilizado o Cors para a validação das rotas de API, e o Multer para o arquivamento e manipulação de imagens.'
        }, {
        img: 'L_arqbackmybooks.png',
        txt: 'A API foi arquitetada da seguinte forma, com um config, que faz a comunicação com o container que roda o PostgreSQL, as migrations e os models que possue as estruturas das tabelas dos bancos de dados, que são as tabelas de usuários, autores, livros e resenhas respectivamente. A pasta public comporta as imagens que são arquivadas através do Multer.'
        }, {
        img: 'controllerDeleteBook.png',
        txt: 'Os Controllers são onde são definidas efetivamente as rotas de API, aqui temos um exemplo da rota de delete dos BookController, que além de apagar o livro, precisa apagar a imagem que está salva em /public.'
        }
    ]}
}

export const ediaristas = {
    frontBack: true,
    title: 'e-diariastas',
    icons: ['next-icon.png', 'react-icon.png', 'typescript-icon.png', 'stayled-icon.png', 'laravel-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'Sistema', 'API Rest', 'MySQL'],
    description: 'Este projeto foi desenvolvido no bootcamp da TreinaWeb, e consiste em um sistema de CRUD feito com Laravel onde pode-se cadastrar diaristas e gerar uma API, e esta aplicação gera uma API Rest. A parte do Next.js, mostra um campo, onde o usuário digita um cep e o sistema mostra os diaristas presentes próximos a este cep.',
    linkFront: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
    linkBack: 'https://github.com/Ruan-Azeredo/Bootcamp-Api-laravel-e-diaristas',
    mainImg: 'telaediaristas.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'telaprincipaldiarista.png',
                txt: 'Em geral o funcionamento da parte feita em Next.js possui um objetivo simples, que é consultar a API quais diaristas estão próximos ao endereço que foi passado, e em sequência, receber estes diaristas e mostra-los ao usuário, de maneira simples, rápida e fácil.'
            },
            {
                img: 'L_diaristasencontrados.png',
                txt: 'com as informações recebidas pela API Rest, o site mostra os diaristas próximos a ele, de acordo com o CEP, juntamente com algumas informaçôes relevantes sobre estes diaristas.'
            },
            {
                img: 'telaediaristascrud.png',
                txt: 'O sistema de cadastro dos diaristas foi desenvolvido em Laravel e php, que permite a construção de um sistema full-stack. O mesmo possui conexão com o banco de dados, que neste projeto utiliza o MySQL. A parte a qual possui interação com o usuário administrador é basicamente um CRUD, com as opções de criar, editar, ver e excluir quaisquer diaristas.'
            },
            {
                img: 'editardiaristas.png',
                txt: 'Para adicionar e atualizar informações, existe um formulário, que foi desenvolvido nativamente com o Laravel, com diversos tipos de inputs. Estes campos do formulário também contam com requisições para que o usuário não adicione diaristas sem algumas informações importantes para o funcionamento da API.'
            }
        ],
        back: [
            {
                img: 'viacepediaristas.png',
                txt: 'A principal tarefa que o back-end deste projeto cumpre, é cadastrar os diaristas no banco de dados e utilizar o CEP dos mesmos para acessar a API viaCEP, pegar a localização deste endereço, bem como, pegar o CEP digitado pelo usuário no site aberto, e consultar, de maneira semelhante a consulta dos diaristas, a localização do ususário do site, e comparar com a dos diaristas, para dessa forma poder retornar apenas os diaristas que tem compatibilidade de localização.'
            },
            {
                img: 'requisicoesediaristas.png',
                txt: 'Dentro do back-end em Laravel foram feitas diversas regras de negócio que ajudam no funcionamento do sistema para que não sejam inseridas no banco de dados, informações que não condizem com o padrão que foi adotado. Assim diminuindo o índice de problemas que podem vir a ocorrer.'
            }
        ]
    }
}

export const irrigafacil = {
    frontBack: true,
    title: 'Página de Empresa Dinâmica',
    icons: ['laravel-icon.png', 'css-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'slick', 'Administrativo', 'Login', 'Dinâmico'],
    description: 'Página de conteúdo dinâmico, desenvolvida na Adapti Empresa Júnior, em uma esquipe com mais três pessoas. Este projeto, desenvolvido com Laravel, foi realizado para atender a demanda do cliente que precisava de um site, bem como poder atualizar as informações e banners deste site, o papel do sistema administrativo.',
    mainImg: 'telairrigafacil.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'irrigafaciltop.png',
                txt: 'A parte do site deste projeto conta com um banner, feito com a biblioteca slick, além de outras sections, como de Sobre Nós, que possui animação na exibição do MVV, e a de Serviços, que mostra os tipos de serviços que se ajustam dinamicamente.'
            },
            {
                img: 'irrigafacilbot.png',
                txt: 'A parte de Portifólio e Blog, que mostra alguns exemplares, os adicionados mais recentemente, ambos contam com animações para exibição de informações na index, e uma página dedicada para mostrar todos os exemplares, de cada projeto e postagem. O projeto também conta com uma área de contato, onde é mostrada a localização, utilizando a API do Google Maps.'
            }
        ], back: [
            {
                img: 'crudirrigafacil.png',
                txt: 'O back-end desta landing page dinâmica é feita no Laravel também, uma vez que este sistema possui uma arquitetura monolítica, característica do framework. A principal função do back-end desta aplicação, é cadastrar as informações como Posts, Banners, Sobre nós e outras informações e guardar estes dados no banco de dados, que neste projeto utiliza o MySQL, um banco relacional.',
            },
            {
                img: 'requestirrigafacil.png',
                txt: 'Este projeto também conta com features de login, que protege as rotas de edição de conteúdo e regras de negócio, que definem alguns padrões de informações que podem ser adicionadas ao banco de dados para que, dessa forma, informações de tipos diferentes do esperado não poderão ser adicionadas, evitando assim problemas que podem vir por conta desta incompatibilidade.'
            }
        ]
    }
}

export const crud = {
    frontBack: true,
    title: 'Cadastro de E-mails',
    icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
    tags: ['Full-Stack', 'API Rest', 'MySQL', 'Sequelize'],
    description: 'Um CRUD é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuários, coletando seus nomes e emails, além de gerar um ID para cada. O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.',
    mainImg: 'telacrud.png',
    type: 'frontAndBack',
    conteudo: {
        front: [
            {
                img: 'principalcrud.png',
                txt: 'Este projeto foi desenvolvido com uma estrutura bem definida de front-end e back-end por meio do uso dos frameworks React.js e Node.js, respectivamente. Como ambos frameworks, utilizam a linguagem JavaScript, e a conexão entre o front e o back é feita através de uma API Rest, com o auxílio do Axios, tanto em React.js como no Node.js.'
            },
            {
                img: 'modalcrud.png',
                txt: 'O design deste projeto foi desenvolvido por mim também, e em geral mostra uma tabela, com as opções padrões de um CRUD, de ver, editar, deletar e atualizar cada item. Também foi utilizado a biblioteca "react-modal" para a utilização de modais.'
            }
        ],
        back: [
            {
                img: 'controllercrud.png',
                txt: 'O Back-end deste projeto foi desenvolvido através do Node.js, que utiliza JavaScript, e foi feito utilizando uma estrutura com /config, que faz a conexão com o banco de dados, /migrations, que monta as tabelas, /models, que modela as tabelas, e /controllers, que gerencia as informações e controla as chamadas API Rest, que são feitas por chamdas HTTP.'
            },
            {
                img: 'migrationcrud.png',
                txt: 'A parte de conexão com o banco de dados fica por responsabilidade do Sequelize, que é um ORM que permite a conexão com o MySQL, um banco de dados relacional. Este banco de dados foi desenvolvido utilizando container com Docker.'
            }
        ]
    }
}

/* EN */

export const projects = [
    {
    id: 1,
    name: 'MyBooks',
    icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png', 'PostgreSQL'],
    tags: ['Full-Stack', 'System', 'Rest API', 'Dark Mode', 'Google Authentication', 'PostgreSQL'],
    screen: 'telamybooks.png',
    description: 'This project is an application where the user can register their books and reviews, so they have an organized and intuitive place to leave their thoughts on the books they read. MyBooks was developed with separated Front-end and Back-end that communicate via API.',
    link: 'https://github.com/Ruan-Azeredo/MyBooks',
    // adapti: true,
    seeMore: '/mybooks'
    },
    {
    id: 2,
    name: 'e-diaristas',
    icons: ['next-icon.png', 'react-icon.png', 'typescript-icon.png', 'stayled-icon.png', 'laravel-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'System', 'MySQL', 'Rest API'],
    screen: 'telaediaristas.png',
    description: 'This project was developed during TreinaWeb bootcamp. It is a system with Laravel Back-end and a Front-end layer for the administrator, where it is possible to register cleaners and generate an API. The Front-end part that is in contact with the user was developed in Next.js, where the user enters a zip code and the system shows the nearby cleaners.',
    link: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
    seeMore: '/ediaristas'
    },
    {
    id: 3,
    name: 'Financial System Landing Page',
    icons: ['react-icon.png', 'js-icon.png', 'tailwind-icon.png'],
    tags: ['react-typed', 'Landing Page', 'Static', 'Responsive', 'Front-end'],
    screen: 'telafinancas.png',
    description: 'A Landing Page with statistical content, made using React.js and Tailwind.css for styling. The lib react-icons and react-typed were also used in this project for some icons and reading animation, respectively. The project is 100% responsive, and this functionality was developed using Tailwind as well.',
    link: 'https://github.com/Ruan-Azeredo/Finance-Landing-Page',
    seeMore: 'https://finance-landing-page-ruby.vercel.app/'
    },
    {
    id: 4,
    name: 'Dynamic Company Page',
    icons: ['laravel-icon.png', 'css-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'Slick', 'Administrative', 'Login', 'Dynamic', 'Responsive'],
    screen: 'telairrigafacil.png',
    description: "A page with dynamic content, developed at Adapti Junior Company, in a team with three other people. This project, developed with Laravel, was carried out to meet the client's demand, who needed a website as well as being able to update the information and banners on this website, the role of the administrative system.",
    adapti: true,
    seeMore: '/irrigafacil',
    },
    {
        id: 5,
        name: 'Email Registration',
        icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
        tags: ['Full-Stack', 'Rest API', 'MySQL', 'Sequelize'],
        screen: 'telacrud.png',
        description: 'A CRUD is a simple application that allows you to add, view, edit and delete information. In this project, the CRUD works with users, collecting their names and emails, as well as generating an ID for each one. The front-end of this project was developed in React.js, and the back-end in Node.js.',
        link: 'https://github.com/Ruan-Azeredo/crud-usuarios-React-',
        seeMore: '/cadastroemails'
        },
        {
        id: 6,
        name: 'Image Search',
        icons: ['react-icon.png', 'tailwind-icon.png', 'js-icon.png'],
        tags: ['Front-end', 'API Consumption'],
        screen: 'telabuscaimgs.png',
        description: 'An image searcher, where you can add a theme and related images will be displayed, the project uses native API consumption, using Fetch. The application styling uses Tailwind.css and CSS.',
        link: 'https://github.com/Ruan-Azeredo/Buscador-de-Imagens',
        seeMore: 'https://buscador-de-imagens-five.vercel.app/'
        }
        // {
        // id: 6,
        // name: 'Real Estate System'
        // }
]

export const aboutMe = "Hello, my name is Ruan, I'm 21 years old and I'm on this path of Web Developer. I really enjoy developing Front-end interfaces, but I'm always open to developing the Back-end of some applications as well, after all, I like to build complete applications that I can see working in the end. I'm a big fan of JavaScript and I also enjoy developing some designs. I like to always be open to new technologies."

export const trajetoriasEN = [
    {
        name: 'UFES',
        logo: 'logo-ufes.png',
        description: 'After finishing my high school, which was combined with a technical course in Mechanics, I decided that I wanted to pursue a career as a programmer. As a result, I enrolled in the Computer Engineering program at UFES.',
        time: 'APR/2021',
        link: 'https://www.ufes.br/'
    },
    {
        name: 'Adapti',
        logo: 'logo-adapti.png',
        description: 'I joined the Computer Junior Company at the college, which is a non-profit organization for its members, and I am still a part of it today. Through this company, I learned how to program and got in touch with the world of web development.',
        time: 'SEP/2021',
        link: 'https://www.adapti.info/'
    }
]

export const xpEN = [
    ['Responsiveness', 'Dynamic Company Page, e-diaristas, Landing Page and others'],
['Java', 'I used it in the Object-Oriented Programming class at UFES'],
['Data Structures', 'Course I took and applied at UFES'],
['C', 'Developed in Data Structures classes at UFES'],
['Next.js', 'I took a specialized course and used it in projects like MyBooks and e-diaristas'],
['SEO', 'Applied in projects developed at Adapti'],
['React-hooks', 'Applied in all projects with React.js'],
['Laravel', 'I learned it at Adapti and used it in all projects there'],
['Git', 'I use it in all projects, as a branch management system'],
['Design Pattern'],
['JavaScript', 'Main language for Front-end, React.js, Next.js, used in all projects'],
['Tailwind.css', 'Landing Page, MyBooks, Portfolio, Email Registration, Image Search'],
['Next UI', 'React.js User Interface Library'],
['CMS', 'Used in some projects at Adapti'],
['TypeScript'],
['GitHub', 'Used in all developed projects https://github.com/Ruan-Azeredo'],
['Figma', 'Used to develop UX UI of more complex systems'],
['Database', 'MongoDB, PostgreSQL, MySQL'],
['Firebase', 'Mainly used for validation with Google'],
['Styled Components', 'Used in the e-diaristas project'],
['Docker', 'Database management system, used in Node.js back-ends'],
['Bootstrap', 'Used in some Adapti projects'],
['PHP', 'Laravel language, used in all my projects'],
['Programming Logic', 'Had contact at UFES and apply it in day-to-day projects'],
['Slick', 'Carousel library, very important in dynamic landing pages'],
['REST API', 'Used in Back-end projects and Front-end that consumes these APIs'],
['Xampp', 'Database management system I used at Adapti'],
['Node.js', 'Back-end framework, uses JS, Email Registration, MyBooks'],
['Python', 'Had contact at UFES, developed some small projects and activities with it'],
['Accessibility', 'Standard of rules and practices I try to pay attention to in Front-end'],
['PostgreSQL', 'Used in MyBooks'],
['HTML', 'Markup language, used in all Front-end projects'],
['MVC Architecture', 'Architecture present in Laravel, I am familiar with it'],
['Dashboard', 'Developed in some personal projects and within Adapti'],
['Sequelize', 'Library used in the back-end of Email Registration and MyBooks'],
['CSS', 'Used in all Front-end projects'],
['Scrum', 'Methodology used at Adapti in teams'],
['CRUD', 'concept used in most Full-Stack and Adapti projects'],
['Relational database', 'Includes PostgreSQL and MySQL projects'],
['React.js', 'Favorite and most comfortable technology'],
['MongoDB', 'Project at College'],
['NoSQL database', 'Project in POO class'],
['Deploy Vercel', 'Where some React.js and Next.js portfolio projects are hosted'],
['MySQL Workbench', 'Used to build the modeling of Back-end databases'],
['Grid and Flex', 'Concept applied in all Front-end projects'],
['jQuery', 'Used in some Adapti projects for JS manipulation'],
['Object-Oriented Programming', 'Concept learned at UFES and applied in all frameworks I use'],
    ['CORS', 'Dependency that manages access permissions used in Back-end'],
    ['Access Levels', 'Mainly used in Adapti projects'],
    ['Express', 'Dependency used in all Node.js projects']
]

export const myBooksEN = {
    frontBack: true,
    title: 'MyBooks',
    icons: ['next-icon.png', 'react-icon.png', 'js-icon.png', 'node-icon.png', 'firebase-icon.png', 'tailwind-icon.png', 'PostgreSQL'],
    tags: ['Full-Stack', 'System', 'Rest API', 'Dark Mode', 'Google Authentication', 'PostgreSQL'],
    description: 'This project consists of an application where the user can register their books and reviews, so they have an organized and intuitive place to leave their reflections on the books they have read. MyBooks was developed with the Front-end and Back-end separated.',
    linkFront: 'github.com/Ruan-Azeredo/MyBooks',
    linkBack: 'github.com/Ruan-Azeredo/MyBooks-Backend',
    mainImg: 'telamybooks.png',
    type: 'frontAndBack',
    conteudo: {
    front: [
    {
    img: 'L_techmybooks.png',
    txt: 'The front-end of this project was developed with Next, which is a Framework that works using the React library, and allows Server Side rendering. For styling, the Tailwind CSS Framework was used. Other dependencies were also added to the Next project for cookie management, authentication with Firebase, and communication with the Back-end API.'
    }, {
    img: 'figmamybooks.png',
    txt: 'The first part of the project was the development of the visual identity, which was done through the software Figma. The main screens and modals, which would be used to add, update and delete Writers, Books and Reviews, were already referenced. In Figma, the dark and light themes were also defined, as can be seen in the image next to it.'
    }, {
    img: 'L_arqfrontmybooks.png',
    txt: 'The project structure was made using the native componentization principle of React. The project was divided into Pages folders, which contain my main pages, Functions, which contain the request functions in axios and other functions that are used in various parts of the system, Contexts that store the global Hooks, Components, which hold the JSX components and the Content, which has components that hold other elements.'
    }, {
    img: 'loginmybooks.png',
    txt: 'The project has a login screen, with authentication through Google, which is developed using Firebase. Login can be done with name, email, and password or by logging in with Google. The user login remains in the system through cookies, and when they expire or when the user logs out, each site route will be redirected to the login screen again.'
    }, {
    img: 'modalmybooks.png',
    txt: 'The logic of the system consists of the user registering their authors, within the authors, the books related to them, and within these books registering the reviews, which are the main objective of the user. The system has the functionality of not only registering all the objects described above but also allowing the user to view, edit, and delete all data.'
    }, {
    img: 'L_darkmodemybooks.png',
    txt: "The system has features such as dark mode, which saves the user's preference on the browser's localhost, and also has a user information card."
    }
    ], back: [
        {
            img: 'L_techbackmybooks.png',
            txt: 'The system back-end was developed using Node.js, with the Express framework, Nodemon to aid in development, and Sequelize for project structuring with the database, which is implemented with PostgreSQL, using Docker to generate the database container. Cors was also used for validation of API routes, and Multer for archiving and image manipulation.'
            }, {
            img: 'L_arqbackmybooks.png',
            txt: 'The API was architected as follows, with a config that communicates with the container running PostgreSQL, migrations and models that have the table structures of the databases, which are the users, authors, books, and reviews tables, respectively. The public folder holds the images that are archived through Multer.'
            }, {
            img: 'controllerDeleteBook.png',
            txt: 'The Controllers are where API routes are effectively defined. Here we have an example of the delete route in the BookController, which, in addition to deleting the book, needs to delete the image that is saved in /public.'
            }
        ]}
    }

export const ediaristasEN = {
    frontBack: true,
    title: 'e-diaristas',
    icons: ['next-icon.png', 'react-icon.png', 'typescript-icon.png', 'styled-icon.png', 'laravel-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'System', 'Rest API', 'MySQL'],
    description: 'This project was developed in the TreinaWeb bootcamp and consists of a CRUD system made with Laravel, where cleaners can be registered and an API can be generated, and this application generates a Rest API. The Next.js part shows a field where the user enters a zip code, and the system shows the cleaners present near that zip code.',
    linkFront: 'https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas',
    linkBack: 'https://github.com/Ruan-Azeredo/Bootcamp-Api-laravel-e-diaristas',
    mainImg: 'telaediaristas.png',
    type: 'frontAndBack',
    conteudo: {
    front: [
    {
    img: 'telaprincipaldiarista.png',
    txt: 'In general, the functionality of the part developed in Next.js has a simple objective, which is to query the API for which cleaners are near the address that was entered, and then receive and show these cleaners to the user in a simple, fast, and easy way.'
    },
    {
    img: 'L_diaristasencontrados.png',
    txt: 'With the information received from the Rest API, the website shows the cleaners nearby according to the zip code, along with some relevant information about these cleaners.'
    },
    {
    img: 'telaediaristascrud.png',
    txt: 'The cleaner registration system was developed in Laravel and PHP, which allows the construction of a full-stack system. It has a connection to the database, which in this project uses MySQL. The part that has interaction with the administrator user is basically a CRUD, with options to create, edit, view, and delete any cleaners.'
    },
    {
    img: 'editardiaristas.png',
    txt: 'To add and update information, there is a form that was developed natively with Laravel, with several types of inputs. These form fields also have requests so that the user does not add cleaners without some important information for the API to function.'
    }
    ],
    back: [
    {
    img: 'viacepediaristas.png',
    txt: 'The main task that the back-end of this project performs is to register the cleaners in the database and use their zip code to access the ViaCEP API, to get the location of this address, as well as get the zip code entered by the user on the open website and query, in a similar way to the cleaners query, the location of the website user, and compare it with that of the cleaners, to be able to return only the cleaners that have location compatibility.'
    },
    {
    img: 'requisicoesediaristas.png',
    txt: 'Within the Laravel back-end, several business rules were made that help the system to function so that information that does not match the adopted standard is not inserted into the database, thus reducing the index of problems that may occur.'
    }
    ]
    }
    }

export const irrigafacilEN = {
    frontBack: true,
    title: 'Dynamic Company Page',
    icons: ['laravel-icon.png', 'css-icon.png', 'php-icon.png'],
    tags: ['Full-Stack', 'slick', 'Administrative', 'Login', 'Dynamic'],
    description: "Dynamic content page, developed at Adapti Junior Company, in a team of four people. This project, developed with Laravel, was created to meet the client's demand for a website where they could update information and banners on their own through an administrative system.",
    mainImg: 'telairrigafacil.png',
    type: 'frontAndBack',
    conteudo: {
    front: [
    {
    img: 'irrigafaciltop.png',
    txt: 'The website part of this project has a banner made with the slick library, as well as other sections, such as About Us, which features animation in the display of the MVV, and Services, which shows dynamically adjusting service types.'
    },
    {
    img: 'irrigafacilbot.png',
    txt: 'The Portfolio and Blog sections show some examples, the most recently added ones in particular. Both sections feature animations to display information on the index and a dedicated page to show all examples of each project and post. The project also includes a contact area that displays the location using the Google Maps API.'
    }
    ], back: [
    {
    img: 'crudirrigafacil.png',
    txt: 'The back-end of this dynamic landing page is also made in Laravel, as this system has a monolithic architecture characteristic of the framework. The main function of the back-end of this application is to register information such as Posts, Banners, About us, and other information and store this data in the database, which in this project uses MySQL, a relational database.',
    },
    {
    img: 'requestirrigafacil.png',
    txt: 'This project also features login features that protect content editing routes and business rules that define some patterns of information that can be added to the database so that different types of information from what is expected cannot be added, thus avoiding problems that may arise due to this incompatibility.'
    }
    ]
    }
    }

export const crudEN = {
    frontBack: true,
    title: 'Email Registration',
    icons: ['react-icon.png', 'node-icon.png', 'tailwind-icon.png'],
    tags: ['Full-Stack', 'Rest API', 'MySQL', 'Sequelize'],
    description: 'A CRUD is a simple application that allows you to add, view, edit and delete information. In this project, the CRUD works with users, collecting their names and emails, as well as generating an ID for each one. The front-end of this project was developed in React.js, and the back-end in Node.js.',
    mainImg: 'telacrud.png',
    type: 'frontAndBack',
    conteudo: {
    front: [
    {
    img: 'principalcrud.png',
    txt: 'This project was developed with a well-defined front-end and back-end structure through the use of the React.js and Node.js frameworks, respectively. Since both frameworks use the JavaScript language, the connection between the front and back is made through a Rest API, with the help of Axios, both in React.js and Node.js.'
    },
    {
    img: 'modalcrud.png',
    txt: 'The design of this project was also developed by me, and generally shows a table, with the standard options of a CRUD, to view, edit, delete and update each item. The "react-modal" library was also used for modal use.'
    }
    ],
    back: [
    {
    img: 'controllercrud.png',
    txt: 'The back-end of this project was developed through Node.js, which uses JavaScript, and was made using a structure with /config, which connects to the database, /migrations, which sets up the tables, /models, which models the tables, and /controllers, which manages the information and controls the Rest API calls, which are made by HTTP calls.'
    },
    {
    img: 'migrationcrud.png',
    txt: 'The part of connecting to the database is the responsibility of Sequelize, which is an ORM that allows connection to MySQL, a relational database. This database was developed using a container with Docker.'
    }
    ]
    }
}
