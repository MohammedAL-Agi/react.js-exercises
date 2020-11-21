import React from 'react'
import Students from './Students';
import Card from './components/Card';
import './index.css';

const Information = Students.map(props => <Card
    Image={props.Image}
    Name={props.Name}
    Contry={props.Contry}
    Job={props.Job}
    Info={props.Info} />)

function App() {
    return (
        <div className="container">
            {Information}
        </div>



    )
}
export default App;