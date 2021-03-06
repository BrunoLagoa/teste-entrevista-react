export enum ActionTypes {
  authSignInRequest = '@auth/SIGN_IN_REQUEST',
  authSignInSuccess = '@auth/SIGN_IN_SUCCESS',
  authSignInFailure = '@auth/SIGN_IN_FAILURE',
  authSignOutRequest = '@auth/SIGN_OUT_REQUEST',
  authSignOutSuccess = '@auth/SIGN_OUT_SUCCESS',
}

export interface ISignInProps {
  email: string;
  password: string;
}

export interface ISignInRequest {
  type: string;
  payload: ISignInProps;
}

export interface ISignInSuccessProps {
  token: string;
}

export interface ISignInSuccessRequest {
  type: string;
  payload: ISignInSuccessProps;
}

export interface ISignInFailureProps {
  isError: boolean;
  message: string;
}

export interface ISignInFailureRequest {
  type: string;
  payload: ISignInFailureProps;
}

export interface IAuthState {
  token: string;
  isError: boolean;
  message: string;
  loading: boolean;
}

export interface ISignOutRequest {
  type: string;
}
