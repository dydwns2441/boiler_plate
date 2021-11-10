export const _SUCCESS = '_SUCCESS'
export const _FAIL = '_FAIL'

export type _Type = {
  abilities: _Ability[]
  sprites: _Sprites
}

export type _Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: false
  slot: number
}
export type _Sprites = {
  front_default: string
}

export interface _FailDispatch {
  type: typeof _FAIL
}

export interface _SuccessDispatch {
  type: typeof _SUCCESS
  payload: {
    abilities: _Ability[]
    sprites: _Sprites
  }
}

export type _DispatchType = _FailDispatch | _SuccessDispatch
