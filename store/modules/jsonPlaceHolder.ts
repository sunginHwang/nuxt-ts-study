import PlaceHolder from '../../models/PlaceHolder';
import {Commit} from 'vuex'
import {fetchJsonPlaceHolder} from '../../core/api/jsonPlaceHolderApi';
import asyncMutation from '../../models/asyncMutation';
import asyncCommit from '../../core/util/asyncCommit';

const AsyncMutationCreator = (mutationType: string): asyncMutation => ({
  PENDING: `${mutationType}_PENDING`,
  SUCCESS: `${mutationType}_SUCCESS`,
  FAILURE: `${mutationType}_FAILURE`,
});

const mutationTypes: any = {
  GET_JSON_PLACE_HOLDER: 'GET_JSON_PLACE_HOLDER',
  GET_ASYNC_PLACE_HOLDER: AsyncMutationCreator('GET_JSON_PLACE_HOLDER')
}

const moduleName: string = 'jsonPlaceHolder';

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
  [mutationTypes.GET_ASYNC_PLACE_HOLDER.PENDING](state: stateType, res: PlaceHolder) {
    console.log('PENDING');
  },
  [mutationTypes.GET_ASYNC_PLACE_HOLDER.SUCCESS](state: stateType, res: PlaceHolder) {
    console.log('SUCCESS');
  },
  [mutationTypes.GET_ASYNC_PLACE_HOLDER.FAILURE](state: stateType, res: PlaceHolder) {
    console.log('FAILURE');
  },
}

export const actions = {
  async getJsonPlaceHolder(context: { commit: Commit, state: stateType }, id: number) {
    const placeHolder: PlaceHolder = await fetchJsonPlaceHolder(id);
    context.commit(mutationTypes.GET_JSON_PLACE_HOLDER, placeHolder);
  },
  async getAsyncPlaceHolder(context: { commit: Commit, state: stateType }, id: number) {
    await asyncCommit(moduleName, mutationTypes.GET_ASYNC_PLACE_HOLDER, fetchJsonPlaceHolder(id));
  },
};
