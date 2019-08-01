import store from '../../store';
import asyncMutation from '../../models/asyncMutation';

const asyncCommit = async (moduleName: string, asyncMutationType : asyncMutation, asyncFunc: any) => {
    const s = store();

    const existPendingMutation = s._mutations[`${moduleName}/${asyncMutationType.PENDING}`] !== undefined;

    if (existPendingMutation) {
        s.commit(`${moduleName}/${asyncMutationType.PENDING}`);
    }

    try {
        const res: any = await asyncFunc;
        const existSuccessMutation: boolean = s._mutations[`${moduleName}/${asyncMutationType.SUCCESS}`] !== undefined;

        if (existSuccessMutation) {
            s.commit(`${moduleName}/${asyncMutationType.SUCCESS}`, res)
        }
    } catch (e) {
        const existFailureMutation: boolean = s._mutations[`${moduleName}/${asyncMutationType.FAILURE}`] !== undefined;

        //something auth check && show error modal
        existFailureMutation ? s.commit(`${moduleName}/${asyncMutationType.FAILURE}`, e) : console.log(e);
    }

}
export default asyncCommit;

