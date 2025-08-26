import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/restorePoints/search': Operation<
    '/solutions/backupRestore/restorePoints/search',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/restorePoints/search`
 *
 * Search for the restorePoint objects associated with a protectionUnit.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/restorePoints/search']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/restorePoints/search']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/restorePoints/search']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/restorePoints/search',
    paramDefs: [],
    params,
    body,
  };
}
