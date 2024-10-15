import logo from './logo.svg';
import './App.css';
import Category from './Category';

function App() {
  return (
    <>
    <div className='py-[40px]'>
      <div className='mx-width-[1320px] mx-auto'>
        <div className='text-center text-[40px] font-bold mb-[30px]'>Our Products</div>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
            <Category/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
