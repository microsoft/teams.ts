import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/passiveDnsRecords': Operation<
    '/security/threatIntelligence/passiveDnsRecords',
    'get'
  >;
  'GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/passiveDnsRecords': Operation<
    '/security/threatIntelligence/passiveDnsRecords',
    'post'
  >;
  'GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact',
    'get'
  >;
  'GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['passiveDnsRecord-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/passiveDnsRecords`
 *
 * Read the properties and relationships of a passiveDnsRecord object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/passiveDnsRecords']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/passiveDnsRecords',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}`
 *
 * Read the properties and relationships of a passiveDnsRecord object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    paramDefs: {
      path: ['passiveDnsRecord-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    paramDefs: {
      path: ['passiveDnsRecord-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/passiveDnsRecords`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/passiveDnsRecords']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/passiveDnsRecords']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/passiveDnsRecords',
    body,
  };
}

export const artifact = {
  /**
   * `GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact`
   *
   * The artifact related to this passiveDnsRecord entry.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/artifact',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['passiveDnsRecord-id'],
      },
      params,
    };
  },
};

export const parentHost = {
  /**
   * `GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost`
   *
   * The parent host related to this passiveDnsRecord entry. Generally, this is the value that you can search to discover this passiveDnsRecord value.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}/parentHost',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['passiveDnsRecord-id'],
      },
      params,
    };
  },
};
