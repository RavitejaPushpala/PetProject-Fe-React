import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(){
    return await axios.get('http://localhost:4001/Dining');
}
export default function useDiningData() {
  return useQuery('Dining',async ()=>FetchData());
}
