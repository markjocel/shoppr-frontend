import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UpdateLoadingFlag } from "../actions/util.action";

export interface UtilsModel {
    loading: boolean;
}

@State<UtilsModel>({
    name: 'utils',
    defaults: {
        loading: false
    }
})

export class Util {
    @Selector()
    static getHTTPRequestFlag(state: UtilsModel) {
        return state.loading
    }

    @Action(UpdateLoadingFlag)
    updateHTTPRequestFlag({ getState, patchState }: StateContext<UtilsModel>, { payload }: UpdateLoadingFlag) {
        const state = getState();
        patchState({
            loading: payload
        })
    }
}
