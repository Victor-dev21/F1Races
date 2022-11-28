import React, {Component} from 'react'
import ImageRetreive from './ImageRetreive';
import DriverComponent from './DriverComponent';
import F1Api from './api'
export default class SearchComponent extends Component{


    constructor(){
        super();
        this.state = {
            term: "",
            driver_race_stats:[],
            races:22,
            qualifying: [],
            raceResults:[]
        }
    }
    onChange = (event) =>{
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = (event) =>{
        // stats for each race from driver
        event.preventDefault();
        let driver_races = F1Api.driver_race_results(this.state.term);
        this.setState({driver_race_stats:driver_races});
        
    }

    renderImages = () => (this.state.images.map(image => <div key={image["id"]}><ImageRetreive image={image}/></div>))
    render(){
        let val = null
            if(this.state.driver_race_stats != null){
              val = <DriverComponent races={this.state.driver_race_stats}/>
             
            }
        return( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    Search:<input type="text" value={this.state.term} onChange={this.onChange}></input>
                    <button type="submit">Search</button>                
                </form>
                {val}  
            </div>
        )
    }
}

