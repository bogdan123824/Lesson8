import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const api = '44652079-d488bfab4dd1121aa7c8aa17e';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState(''); 

  const axiosApi = (e) => {
    axios.get(`https://pixabay.com/api/?key=${api}&q=${e}&image_type=photo&per_page=10`)
      .then(response => {
        const allImages = response.data.hits.map(image => ({
          original: image.largeImageURL,
          thumbnail: image.webformatURL,
        }));
        setImages(allImages);
      })
  };
  useEffect(() => {
    axiosApi(search);
  }, [search]);

  const searchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div >
        <input className='inputs'
          value={search}
          placeholder='Search'
          onChange={searchInput}
        />
      <ImageGallery  items={images} />
    </div>
  );
};

export default App;

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];
 
// class App extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }
 
// export default App;

// const baseURL = "https://api.monobank.ua/bank/currency";

// export default function App() {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     axios.get(baseURL)
//       .then((response) => {
//         setPost(response.data);
//       })
//   }, []);

//   const usdToUah = post.find(valut => valut.currencyCodeA === 840 && valut.currencyCodeB === 980);
//   const euroToUah = post.find(valut => valut.currencyCodeA === 978 && valut.currencyCodeB === 980);

//   return (
//   //   <>
//   //   {[
//   //     'Primary',
//   //     'Secondary',
//   //   ].map((variant) => (
//   //     <Card
//   //       bg={variant.toLowerCase()}
//   //       key={variant}
//   //       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//   //       style={{ width: '18rem' }}
//   //       className="mb-2"
//   //     >
//   //       <Card.Header>Header</Card.Header>
//   //       <Card.Body>
//   //         <Card.Title>{variant} Card Title </Card.Title>
//   //         <Card.Text>
//   //           Some quick example text to build on the card title and make up the
//   //           bulk of the card's content.
//   //         </Card.Text>
//   //       </Card.Body>
//   //     </Card>
//   //   ))}
//   // </>
//     <div>
//       <div className="cont">
//       <h1>Currency Rates</h1>
//       <div>
//       {usdToUah && (
//           <Card border="primary" bg='gray' style={{ width: '18rem', margin: '10px'}}>
//             <Card.Body>
//               <Card.Title>USD to UAH</Card.Title>
//               <Card.Text>
//                 <p>Buy: {usdToUah.rateBuy}</p>
//                 <p>Sell: {usdToUah.rateSell}</p>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         )}
//         {euroToUah && (
//           <Card border="secondary" bg="gray" style={{ width: '18rem', margin: '10px'}}>
//             <Card.Body>
//               <Card.Title>EURO to UAH</Card.Title>
//               <Card.Text>
//                 <p>Buy: {euroToUah.rateBuy}</p>
//                 <p>Sell: {euroToUah.rateSell}</p>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// }
