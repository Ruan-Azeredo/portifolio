import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/AboutMe.css';
import './style/Title.css';
import './style/Projetos.css'
import './style/Trajetoria.css'
import './style/Contato.css'
import './style/Footer.css'
import CardBlack from './components/CardBlack';
import Home from './Home';
import PageProjetoLayout from './PageProjetoLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/MyBooks' element={<PageProjetoLayout
          frontBack={true}
          title='MyBooks'
          description='Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
          link='github.com/Ruan-Azeredo/MyBooks'
          mainImg='telamybooks.png'
          type='front'
          conteudo={[
            {
              img: 'techmybooks.png',
              txt: 'O Front deste projeto foi desenvolvido com o Next, que é um Framework que funciona utilizando a biblioteca React, e que permite uma renderização Server Side. Para estilização, foi utilizado o Framework Tailwind CSS. Ainda no projeto em Next foram adicionadas outras dependencias para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'
            }, {
              img: 'figmamybooks.png',
              txt: 'A primeira parte do projeto foi o desenvolvimento da identidade visual do mesmo, que foi feita atravez do softwere Figma. Nele já foram feitas as referencia de como deveriam ficar as principais tela, e os Modais, os quais seriam utilizados para adicionar, atualizar e deletar os Escritores, Livros e Resenhas. No Figma tambem foi definido como seria o tema escuro e o claro, ao lado pode-se ver o projeto no tema escuro.'
            }, {
              img: 'arquitemybooks.png',
              txt: 'A estruturação do projeto foi feita utilizando o principio nativo de componentização do React. Dividi o projeto em pastas de Pages, que contem minhas páginas principais, Functions, que comporta as funções de requisição em axios e outras funções que são usadas em varios locais do sistema, Context que armazenam os Hooks globais, Conponents, que guarda os componentes JSX e o Content que possui componentes que comportão outros elementos.'
            }
          ]}

        />} />
      </Routes>   
    </Router>
  );
}

export default App;
