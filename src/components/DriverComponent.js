import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class DriverComponent extends Component{
    constructor(){
        super();
    }
    race_results = () => {
         return  this.props.races.map((race_result,index) => {
            
        return  <tr key={index}> 
                <td>{race_result.race}</td>
                <td>{race_result.name}</td>
                <td>{race_result.team}</td>
                <td>{race_result.laps}</td>
                <td>{race_result.pos_started}</td>
                <td>{race_result.pos_finished}</td>
                <td><img src={race_result.team_logo}  width="250" height="150"/></td>
                <td><img src={race_result.circuit_logo}  width="250" height="150"/></td>
                
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
                <th>Driver</th>
                <th>Team</th>
                <th>laps</th>
                <th>Position Started</th>
                <th>Position Finished</th>
                <th>Team</th>
                <th>Circuit</th>
                
                </tr>
                {this.race_results()}
                </tbody>
            </Table>
            </div>
        )
    }
}