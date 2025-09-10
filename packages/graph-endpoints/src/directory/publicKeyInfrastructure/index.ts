export * as certificateBasedAuthConfigurations from './certificateBasedAuthConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/publicKeyInfrastructure': Operation<
    '/directory/publicKeyInfrastructure',
    'delete'
  >;
  'GET /directory/publicKeyInfrastructure': Operation<'/directory/publicKeyInfrastructure', 'get'>;
  'PATCH /directory/publicKeyInfrastructure': Operation<
    '/directory/publicKeyInfrastructure',
    'patch'
  >;
}

/**
 * `DELETE /directory/publicKeyInfrastructure`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/publicKeyInfrastructure']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/publicKeyInfrastructure']['response']> {
  return {
    method: 'delete',
    path: '/directory/publicKeyInfrastructure',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /directory/publicKeyInfrastructure`
 *
 * The collection of public key infrastructure instances for the certificate-based authentication feature for users in a Microsoft Entra tenant.
 */
export function get(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure']['parameters']
): EndpointRequest<IEndpoints['GET /directory/publicKeyInfrastructure']['response']> {
  return {
    method: 'get',
    path: '/directory/publicKeyInfrastructure',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/publicKeyInfrastructure`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/publicKeyInfrastructure']['body']
): EndpointRequest<IEndpoints['PATCH /directory/publicKeyInfrastructure']['response']> {
  return {
    method: 'patch',
    path: '/directory/publicKeyInfrastructure',
    body,
  };
}
