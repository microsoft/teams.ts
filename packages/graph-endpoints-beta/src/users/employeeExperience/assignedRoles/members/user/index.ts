export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user': Operation<
    '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user`
 *
 * User entity of the member who has been assigned the role.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/employeeExperience/assignedRoles/{engagementRole-id}/members/{engagementRoleMember-id}/user',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'engagementRole-id', in: 'path' },
      { name: 'engagementRoleMember-id', in: 'path' },
    ],
    params,
  };
}
