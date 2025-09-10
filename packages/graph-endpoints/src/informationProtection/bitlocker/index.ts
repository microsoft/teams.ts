import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection/bitlocker': Operation<'/informationProtection/bitlocker', 'get'>;
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
 * `GET /informationProtection/bitlocker`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection/bitlocker']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/bitlocker']['response']> {
  return {
    method: 'get',
    path: '/informationProtection/bitlocker',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const recoveryKeys = {
  /**
   * `GET /informationProtection/bitlocker/recoveryKeys`
   *
   * Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the key property. For information about how to read the key property, see Get bitlockerRecoveryKey. You can use this API to programmatically iterate through the list of recovery keys in the tenant and identify devices with BitLocker enabled. For more information, see the sample PowerShell code in BitLocker recovery process.
   */
  list: function list(
    params?: IEndpoints['GET /informationProtection/bitlocker/recoveryKeys']['parameters']
  ): EndpointRequest<IEndpoints['GET /informationProtection/bitlocker/recoveryKeys']['response']> {
    return {
      method: 'get',
      path: '/informationProtection/bitlocker/recoveryKeys',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}`
   *
   * Retrieve the properties and relationships of a bitlockerRecoveryKey object.  By default, this operation doesn&#x27;t return the key property that represents the actual recovery key. To include the key property in the response, use the $select OData query parameter. Including the $select query parameter triggers a Microsoft Entra audit of the operation and generates an audit log. For more information on audit logs for bitlocker recovery keys, see the KeyManagement category filter of Microsoft Entra audit logs.
   */
  get: function get(
    params?: IEndpoints['GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}']['response']
  > {
    return {
      method: 'get',
      path: '/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bitlockerRecoveryKey-id'],
      },
      params,
    };
  },
};
