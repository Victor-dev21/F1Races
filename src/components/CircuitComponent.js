import React, {Component} from 'react'
import F1Api from './api'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class CircuitComponent extends Component{
    constructor(props){
        super();
       
    }
    displayCircuits = () =>{
        console.log(this.props.races)
        return  this.props.races.map((circuit,index) => {
            
            return  <tr key={index}> 
                    <td>{circuit.name}</td>
                    <td>{circuit.season}</td>
                    <td>{circuit.laps}</td>
                    <td>{circuit.country}</td>
                    <td><img src={circuit.image}  width="250" height="150"/></td>
                    
                    </tr>
            });
    }
    
    render(){
        return(
            <div>
                <Table striped bordered hover>
                <tbody>
                <tr>
                <th>Grand Prix</th>
                <th>Season</th>
                <th>Total Laps</th>
                <th>Country</th>
                <th>Circuit</th>
                
                </tr>
                {this.displayCircuits()}
                </tbody>
            </Table>
            </div>
        )
    }
}