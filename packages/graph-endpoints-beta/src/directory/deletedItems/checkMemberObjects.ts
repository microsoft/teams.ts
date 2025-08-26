import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects': Operation<
    '/directory/deletedItems/{directoryObject-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/deletedItems/{directoryObject-id}/checkMemberObjects',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
