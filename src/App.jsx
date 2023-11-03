import './App.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <>
      <div className='header'>

        <NavBar/>
        <ItemListContainer greeting={'Las Mejores Excursiones de Pesca!'}/>

      </div>

    </>
  )
}

export default App
