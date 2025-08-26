import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/validateBulkResize': Operation<
    '/users/{user-id}/cloudPCs/validateBulkResize',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/validateBulkResize`
 *
 * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/validateBulkResize']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/validateBulkResize']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/validateBulkResize']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/validateBulkResize',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
