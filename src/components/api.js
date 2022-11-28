
import races from '../formula1/allRaces.json';
import driverResults from '../formula1/driverResults.json';
class F1Api {
    static driver_race_results(name){
        let driver_results = driverResults["response"].filter(driver => driver["driver"]["name"].toLowerCase().includes(name.toLowerCase()));
        let driver_data = [];
        driver_results.forEach(driver => {
        let single_race = {}
        single_race.race = driver["race"]["name"]
        single_race.team = driver["team"]["name"]
        single_race.name = driver["driver"]["name"]
        single_race.laps = driver["laps"]
        single_race.pos_started = driver["grid"]
        single_race.pos_finished = driver["position"]
        single_race.circuit_logo = driver["race"]["image"]
        single_race.team_logo = driver["team"]["logo"]
        driver_data.push(single_race);
        })
        return driver_data;
    }

    static circuits(){
        let allCircuits = []
        races["response"].forEach(circuit => {
            let race = {}
            race.name = circuit["competition"]["name"]
            race.season = circuit["season"]
            race.laps = circuit["laps"]["total"]
            race.country = circuit["competition"]["location"]["country"]
            race.image = circuit["circuit"]["image"]
            allCircuits.push(race)
        })
        return allCircuits;
    }
}


export default F1Api;