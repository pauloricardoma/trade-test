import { IGlobalReducerState } from "../Base/interface/IGlobalReducerState";

export const getAuth = (state: IGlobalReducerState) => state.auth;

export const getIsLogged = (state: IGlobalReducerState) => state.auth.isLogged;

export const getAccount = (state: IGlobalReducerState) => state.auth.account;

export const getRequests = (state: IGlobalReducerState) => state.auth.requests;

export const getSubscription = (state: IGlobalReducerState) => state.auth.subscription;
