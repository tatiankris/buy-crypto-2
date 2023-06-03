import compose from 'compose-function';
import { withRouter } from './with-router';
import { withContainer } from './with-container';

export const withProviders = compose(withRouter);
export const withContainerProvider = compose(withContainer);
