import asyncMutation from "~/models/asyncMutation";

export const enum moduleNames {
    jsonPlaceHolder = 'jsonPlaceHolder'
}

const asyncMutationCreator = (mutationType: string): asyncMutation => ({
    PENDING: `${mutationType}_PENDING`,
    SUCCESS: `${mutationType}_SUCCESS`,
    FAILURE: `${mutationType}_FAILURE`,
});


interface jsonPlaceHolder {
    GET_JSON_PLACE_HOLDER: string
    GET_ASYNC_PLACE_HOLDER: asyncMutation
}

export const jsonPlaceHolder: jsonPlaceHolder = {
    GET_JSON_PLACE_HOLDER: 'GET_JSON_PLACE_HOLDER',
    GET_ASYNC_PLACE_HOLDER: asyncMutationCreator('GET_JSON_PLACE_HOLDER')
}