import { _DispatchType, _FAIL, _SUCCESS, _Type } from '../actions/types'

interface InitialState {
  success: boolean
  items?: _Type
}

const initialState: InitialState = {
  success: false,
}

const reducer = (state = initialState, action: _DispatchType): InitialState => {
  switch (action.type) {
    case _FAIL:
      return {
        ...state,
        success: false,
      }
    case _SUCCESS:
      const { abilities, sprites } = action.payload
      return {
        ...state,
        success: true,
        items: {
          abilities,
          sprites,
        },
      }
    default:
      return state
  }
}

export default reducer
