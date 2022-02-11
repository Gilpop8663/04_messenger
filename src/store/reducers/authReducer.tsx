interface AuthReducerProps {
  type: string;
  name: string;
  data: object;
}

export default function authReducer(state = {}, action: AuthReducerProps) {
  switch (action.type) {
    case 'common':
      return { ...state, [action.name]: action.data };
    default:
      return state;
  }
}
