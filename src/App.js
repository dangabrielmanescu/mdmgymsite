import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Homepage from './Pages/Homepage';
import Calculator from './Pages/Calculator';
import CalculatorCalories from './Pages/CalculatorCalories';
import Registration from './Pages/Registration';
import Contact from './Pages/Contact';




const router = createBrowserRouter([
  {
  path: '/',
  element:
  <Main>
    <Homepage/>
  </Main>
  },
  {
    path: '/BmiCalculator',
    element:
    <Main>
      <Calculator/>
    </Main>
    },
    {
    path: '/CaloriesCalculator',
    element:
    <Main>
      <CalculatorCalories/>
    </Main>
    },
    {
    path: '/Register',
    element:
    <Main>
      <Registration/>
    </Main>
    },
    {
    path: '/Contact',
    element:
    <Main>
      <Contact/>
    </Main>
    }
])

function App (){
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
};

export default App;
