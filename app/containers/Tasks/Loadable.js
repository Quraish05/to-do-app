/**
 *
 * Asynchronously loads the component for Tasks
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
