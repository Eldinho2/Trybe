import About from './Component'
import Task from './task'
import './App.css';

const tasks = ['aprender react', 'estudar', 'comer muita pizza', 'ser menos chato'];

function App() {
  return (
    <main>
     <About/>
     <ol>
     {tasks.map((a) => Task(a))}
     </ol>
    </main>
  )
}

export default App;
