import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus': Operation<
    '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus`
 *
 * Set the task&#x27;s status and attach a note.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus']['body'],
  params?: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus',
    paramDefs: [{ name: 'deviceAppManagementTask-id', in: 'path' }],
    params,
    body,
  };
}
