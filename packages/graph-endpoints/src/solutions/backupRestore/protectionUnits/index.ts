import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/protectionUnits': Operation<
    '/solutions/backupRestore/protectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}': Operation<
    '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}',
    'get'
  >;
  'POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard': Operation<
    '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard',
    'post'
  >;
  'POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard': Operation<
    '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard',
    'post'
  >;
}

/**
 * `GET /solutions/backupRestore/protectionUnits`
 *
 * Read the properties and relationships of a protectionUnitBase object.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/protectionUnits']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/protectionUnits']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/protectionUnits',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}`
 *
 * Read the properties and relationships of a protectionUnitBase object.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}',
    paramDefs: {
      path: ['protectionUnitBase-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const cancelOffboard = {
  /**
   * `POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard`
   *
   * Cancel the offboarding of a protectionUnitBase.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard',
      paramDefs: {
        path: ['protectionUnitBase-id'],
      },
      params,
    };
  },
};

export const offboard = {
  /**
   * `POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard`
   *
   * Offboard a protectionUnitBase.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard',
      paramDefs: {
        path: ['protectionUnitBase-id'],
      },
      params,
    };
  },
};
