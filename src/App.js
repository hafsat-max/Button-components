
import './components/Button'
import './App.css';
import Button from './components/Button';


function App() {
  return (
    <>
    <div className='containers'>
    <Button color='one blue' caption='Button' />
    <Button color='two blue' caption='Shadow variant' />
    <Button color='three blue' caption='Text variant'/>
    </div>
    <div className='containers'>
    <Button color='four blue' caption='Disabled shadow'/>
    <Button color='five blue' caption='Disabled variant'/>
    <Button color='six blue' caption='Shadow button'/>
    </div>
    <div className='containers'>
    <Button color='six blue' caption='Button with left icon' iconleft/>
    <Button color='six blue' caption='Button with right icon' iconright/>
    </div> 
    <div className='containers'>
    <Button color='six blue' caption='Small button'/>
    <Button color='six blue' caption='Medium button'/>
    <Button color='six blue' caption='Big button'/>
    </div>
    <div className='containers'>
    <Button color='six default blue' caption='Default button'/>    
    <Button color='six primary blue' caption='Primary button'/>    
    <Button color='six secondary blue' caption='Secondary button'/>    
    <Button color='six danger blue' caption='Danger button'/>    
    </div>
    </>
  );
}
 
export default App;
