import PlaceHolder from '../../models/PlaceHolder';
import axios from "axios";

const url: string = 'https://jsonplaceholder.typicode.com/todos';


export const fetchJsonPlaceHolder = async (id: number) => {

    interface fetchJsonRes {
        data: PlaceHolder,
    }

    const res: fetchJsonRes = await axios.get(`${url}/${id}`);
    return res.data;
};