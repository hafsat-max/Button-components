
import './components/Button'
import './App.css';
import Button from './components/Button';


function App() {
  return (
    <>
    <div className='containers'>
    <Button color='one blue' caption='Button' text='Default'/>
    <Button color='two blue' caption='Shadow variant' text='Default' />
    <Button color='three blue' caption='Text variant' text='Default'/>
    </div>
    <div className='containers'>
    <Button color='four blue' caption='Disabled shadow' text='Default'/>
    <Button color='five blue' caption='Disabled variant' text='Default'/>
    <Button color='six blue' caption='Shadow button' text='Default'/>
    </div>
    <div className='containers'>
    <Button color='six blue' caption='Button with left icon' iconleft text='Default'/>
    <Button color='six blue' caption='Button with right icon' iconright text='Default'/>
    </div> 
    <div className='containers'>
    <Button color='six blue' caption='Small button' text='Default'/>
    <Button color='six blue' caption='Medium button' text='Default'/>
    <Button color='six blue' caption='Big button' text='Default'/>
    </div>
    <div className='containers'>
    <Button color='six default blue' caption='Default button' text='Default'/>    
    <Button color='six primary blue' caption='Primary button' text='Primary'/>    
    <Button color='six secondary blue' caption='Secondary button' text='Secondary'/>    
    <Button color='six danger blue' caption='Danger button' text='Danger'/>    
    </div>
    </>
  );
}
 
export default App;
