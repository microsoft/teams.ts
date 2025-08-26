import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate',
    'post'
  >;
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/migrateToTemplate',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
