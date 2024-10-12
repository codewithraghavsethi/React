import './App.css';
import Header from './Header';
import img01 from './images/01.jpg';
import img02 from './images/02.jpg';
import img03 from './images/03.jpg';
import img04 from './images/04.jpg';


function App() {
  return (
    <div className="App">
      {/* Images Import with Link */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGlWCzKbPbV-McPyOrAulXgAkHcKPq659fQ&s" alt="" />

      <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202012/ratan_tata_1_0.jpg" alt="" />

      <img src="https://khabrimedia.com/wp-content/uploads/2024/01/ratan-tata.jpg" alt="" />

      {/* Images Import With Local Device */}
      <img width={150} src={img01} />
      <img width={150} src={img01} />
      <img width={150} src={img02} />
      <img width={150} src={img02} />
      <img width={150} src={img03} />
      <img width={150} src={img03} />
      <img width={150} src={img04} />
      <img width={150} src={img04} />

      <Header/>
    </div>
  );
}

export default App;
