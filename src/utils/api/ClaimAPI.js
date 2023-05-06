import axios from 'axios';
import dummyData from '../../dummydata/projectexpenseclaims.json';

const baseUrl = "http://localhost:3000"

const getClaims = (setClaims) =>{
    axios.get(baseUrl)
    .then(({data}) =>{
        setClaims(dummyData.tables[0].columns)
        // console.log(data)
        // return dummyData.tables[0].columns;
    }).catch((err) => console.log(err))
}
export{getClaims}