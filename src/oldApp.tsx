import './App.css';
import { useState } from 'react';

let isLoggedIn: boolean = !false;

const products = [
  { title: 'Col', isFruit: false, id: 1 },
  { title: 'Ajo', isFruit: false, id: 2 },
  { title: 'Manzana', isFruit: true, id: 3 },
];

const ShoppingList = ()=> {
  const listItems = products.map( product => 
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
      { product.title }
    </li>
  );

  return ( 
    <ul>
      { listItems }
    </ul>
  )
}

function MyButton({ text }: { text: string }) {
  const [count, setCount] = useState(1);
  function handleClick() {
    setCount(count + 1);

  }
  return (
    <button onClick={handleClick}>
      {text} numero { count }
    </button>
  )
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function User() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

function App() {

  return (
    <>
      {
        isLoggedIn ?
        <div>
          <ShoppingList />
          <User />
          <MyButton text='Render' />
          <MyButton text='Render numbers' />
        </div>
        :
        'Please login'
      }

    </>
  )
}

export default App
