import PlaceHolder from '~/models/PlaceHolder';
import {Commit} from 'vuex'
import {fetchJsonPlaceHolder} from '~/core/api/jsonPlaceHolderApi';
import {moduleNames, jsonPlaceHolder} from '~/store/mutationType';
import asyncCommit from '~/core/util/asyncCommit';

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
    [jsonPlaceHolder.GET_JSON_PLACE_HOLDER](state: stateType, res: PlaceHolder) {
        state.placeholder = res;
    },
    [jsonPlaceHolder.GET_ASYNC_PLACE_HOLDER.PENDING](state: stateType, res: PlaceHolder) {
        console.log('PENDING');
    },
    [jsonPlaceHolder.GET_ASYNC_PLACE_HOLDER.SUCCESS](state: stateType, res: PlaceHolder) {
        console.log('SUCCESS');
    },
    [jsonPlaceHolder.GET_ASYNC_PLACE_HOLDER.FAILURE](state: stateType, res: PlaceHolder) {
        console.log('FAILURE');
    },
}

export const actions = {
    async getJsonPlaceHolder(context: { commit: Commit, state: stateType }, id: number) {
        const placeHolder: PlaceHolder = await fetchJsonPlaceHolder(id);
        context.commit(jsonPlaceHolder.GET_JSON_PLACE_HOLDER, placeHolder);
    },
    async getAsyncPlaceHolder(context: { commit: Commit, state: stateType }, id: number) {
        await asyncCommit(moduleNames.jsonPlaceHolder, jsonPlaceHolder.GET_ASYNC_PLACE_HOLDER, fetchJsonPlaceHolder(id));
    },
};
