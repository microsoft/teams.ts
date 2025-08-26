import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/deletedItems/{directoryObject-id}/getMemberObjects': Operation<
    '/directory/deletedItems/{directoryObject-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /directory/deletedItems/{directoryObject-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/deletedItems/{directoryObject-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
