import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/getUserOwnedObjects': Operation<'/applications/getUserOwnedObjects', 'post'>;
}

/**
 * `POST /applications/getUserOwnedObjects`
 *
 * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
 */
export function create(
  body: IEndpoints['POST /applications/getUserOwnedObjects']['body'],
  params?: IEndpoints['POST /applications/getUserOwnedObjects']['parameters']
): EndpointRequest<IEndpoints['POST /applications/getUserOwnedObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/getUserOwnedObjects',
    paramDefs: [],
    params,
    body,
  };
}
