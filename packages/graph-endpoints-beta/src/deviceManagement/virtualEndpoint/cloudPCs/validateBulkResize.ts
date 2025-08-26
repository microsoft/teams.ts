import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize`
 *
 * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize',
    paramDefs: [],
    params,
    body,
  };
}
