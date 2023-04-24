import './App.css';
import Alface from'./Assets/alface.png' 
import Beterraba from './Assets/beterraba.png'
import Cenoura from './Assets/cenoura.png'
import Cereja from './Assets/cereja.png'
import Laranja from './Assets/laranja.png'
import Limao from './Assets/limao.png'
import Manga from './Assets/manga.png'
import Tomate from './Assets/tomate.png'
import styled from 'styled-components';
import { useState } from 'react';

const Container= styled.div`
background-color:red;
display:flex;
justify-content:row;

`
const BoxImages=styled.figure`
display:flex;
justify-content:row;

border:solid 2px;
flex-wrap:wrap;
`
const ShoppingCart=styled.section`
background-color:gray;

`
const BoxGray=styled.div`
display:flex;
background-color:gray;
align-items:space-between;

`
const BoxGrayZoom=styled.div`

button{
  border-radius:60%;
  background:none;
}

`

function App() {
  const [hortifruti,setHortifruti]= useState([
    {
      img:Alface,
      descricao:"Imagem de um alface "
    },{
      img:Laranja,
      descricao:"Imagem de uma laranja "
    },{
      img:Cereja,
      descricao:"Imagem de uma cereja"
    },{
      img:Cenoura,
      descricao:"Imagem de uma cenoura"
    },{
      img:Manga,
      descricao:"Imagem de uma manga"
    },{
      img:Limao,
      descricao:"Imagem de um limão"
    },{
      img:Beterraba,
      descricao:"Imagem de uma beterraba "
    },{
      img:Tomate,
      descricao:"Imagem de um tomate"
    }
  ]);

  return (
    <Container>
      <h1>HORTIFRUTI</h1>
      <h2>VnW</h2>
      <BoxImages>
        <h2>Nossos Produtos</h2>
    {hortifruti.map((item)=>(
      <img src={item.img}
      alt={item.descricao}/>
    ))}
    <ShoppingCart>
      <BoxGray>
        <img src="./Assets/carrinho.png" alt="Imagem de um carrinho de compras"/>
        <p>Arraste o seu produto aqui para o carrinho</p>
      </BoxGray>
      <BoxGrayZoom>
      <button>+</button>
      <button>-</button>

        </BoxGrayZoom>
    </ShoppingCart>
      </BoxImages>
    </Container>
    
     
  );
}

export default App;
