import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection/bitlocker/recoveryKeys': Operation<
    '/informationProtection/bitlocker/recoveryKeys',
    'get'
  >;
  'GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}': Operation<
    '/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    'get'
  >;
}

/**
 * `GET /informationProtection/bitlocker/recoveryKeys`
 *
 * Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the key property. For information about how to read the key property, see Get bitlockerRecoveryKey. You can use this API to programmatically iterate through the list of recovery keys in the tenant and identify devices with BitLocker enabled. For more information, see the sample PowerShell code in BitLocker recovery process.
 */
export function list(
  params?: IEndpoints['GET /informationProtection/bitlocker/recoveryKeys']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/bitlocker/recoveryKeys']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/bitlocker/recoveryKeys',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
 *
 * Retrieve the properties and relationships of a bitlockerRecoveryKey object.  By default, this operation does not return the key property that represents the actual recovery key. To include the key property in the response, use the $select OData query parameter. Including the $select query parameter triggers a Microsoft Entra audit of the operation and generates an audit log. You can find the log in Microsoft Entra audit logs under the KeyManagement category.
 */
export function get(
  params?: IEndpoints['GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bitlockerRecoveryKey-id', in: 'path' },
    ],
    params,
  };
}
