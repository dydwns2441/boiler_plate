import axios from 'axios'
import { Dispatch } from 'redux'
import { _DispatchType, _SUCCESS, _FAIL } from './types'

export const fetchData =
  (name: string) => async (dispatch: Dispatch<_DispatchType>) => {
    try {
      const request = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      )
      const data = request.data

      dispatch({
        type: _SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: _FAIL,
      })
    }
  }
