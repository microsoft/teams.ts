import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/validateBulkResize': Operation<'/me/cloudPCs/validateBulkResize', 'post'>;
}

/**
 * `POST /me/cloudPCs/validateBulkResize`
 *
 * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/validateBulkResize']['body'],
  params?: IEndpoints['POST /me/cloudPCs/validateBulkResize']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/validateBulkResize']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/validateBulkResize',
    paramDefs: [],
    params,
    body,
  };
}
