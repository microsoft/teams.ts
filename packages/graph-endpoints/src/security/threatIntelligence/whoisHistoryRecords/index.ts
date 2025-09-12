import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/whoisHistoryRecords': Operation<
    '/security/threatIntelligence/whoisHistoryRecords',
    'get'
  >;
  'GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/whoisHistoryRecords': Operation<
    '/security/threatIntelligence/whoisHistoryRecords',
    'post'
  >;
  'GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['whoisHistoryRecord-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/whoisHistoryRecords`
 *
 * Retrieve details about whoisHistoryRecord objects.Note: List retrieval is not yet supported.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/whoisHistoryRecords',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}`
 *
 * Retrieve details about whoisHistoryRecord objects.Note: List retrieval is not yet supported.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    paramDefs: {
      path: ['whoisHistoryRecord-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    paramDefs: {
      path: ['whoisHistoryRecord-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/whoisHistoryRecords`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/whoisHistoryRecords']['body']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/whoisHistoryRecords']['response']
> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/whoisHistoryRecords',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host`
   *
   * The host associated to this WHOIS object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['whoisHistoryRecord-id'],
      },
      params,
    };
  },
};
