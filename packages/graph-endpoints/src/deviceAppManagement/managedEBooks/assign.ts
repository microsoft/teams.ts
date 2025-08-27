import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assign',
    paramDefs: [{ name: 'managedEBook-id', in: 'path' }],
    params,
    body,
  };
}
