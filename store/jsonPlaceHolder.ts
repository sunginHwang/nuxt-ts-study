import PlaceHolder from '../models/PlaceHolder';
import {Commit} from 'vuex'
import {fetchJsonPlaceHolder} from '../core/api/jsonPlaceHolderApi';

const mutationTypes = {
    GET_JSON_PLACE_HOLDER: 'GET_JSON_PLACE_HOLDER'
}

const jsonUrl: string = 'https://jsonplaceholder.typicode.com/todos';

// state type
interface stateType {
    content: string,
    placeholder: PlaceHolder
}

// state
export const state: stateType = {
    content: '',
    placeholder: {
        userId: 0,
        id: 0,
        title: '',
        computed: false
    }
}


export const mutations = {
    [mutationTypes.GET_JSON_PLACE_HOLDER](state: stateType, res: PlaceHolder) {
        state.placeholder = res;
    },
}

export const actions = {
    async getJsonPlaceHolder(context: { commit: Commit, state: stateType }, id: number) {
        const placeHolder: PlaceHolder = await fetchJsonPlaceHolder(id);
        context.commit(mutationTypes.GET_JSON_PLACE_HOLDER, placeHolder);
    },
};
