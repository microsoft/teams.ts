import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/whoisRecords': Operation<
    '/security/threatIntelligence/whoisRecords',
    'get'
  >;
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/whoisRecords': Operation<
    '/security/threatIntelligence/whoisRecords',
    'post'
  >;
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history',
    'get'
  >;
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}',
    'get'
  >;
  'GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host': Operation<
    '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/host',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['whoisRecord-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/whoisRecords`
 *
 * Get a list of whoisRecord objects.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/whoisRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}`
  *
  * Get the specified whoisRecord resource.  Specify the desired whoisRecord in one of the following two ways:
- Identify a host and get its current whoisRecord. 
- Specify an id value to get the corresponding whoisRecord.
  */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    paramDefs: {
      path: ['whoisRecord-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/whoisRecords/{whoisRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}',
    paramDefs: {
      path: ['whoisRecord-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/whoisRecords`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/whoisRecords']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/whoisRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/whoisRecords',
    body,
  };
}

export const history = {
  /**
   * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history`
   *
   * The collection of historical records associated to this WHOIS object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['whoisRecord-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}`
   *
   * The collection of historical records associated to this WHOIS object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/history/{whoisHistoryRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['whoisRecord-id', 'whoisHistoryRecord-id'],
      },
      params,
    };
  },
};

export const host = {
  /**
   * `GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host`
   *
   * The host associated to this WHOIS object.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/whoisRecords/{whoisRecord-id}/host']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/whoisRecords/{whoisRecord-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['whoisRecord-id'],
      },
      params,
    };
  },
};
