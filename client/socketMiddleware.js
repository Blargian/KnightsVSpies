import { Middleware } from 'redux'
import { RootState } from './store'

export const myMiddleware = storeAPI => next => action => {
    console.log(`Your action was ${action.type}`);
    return next(action);
}