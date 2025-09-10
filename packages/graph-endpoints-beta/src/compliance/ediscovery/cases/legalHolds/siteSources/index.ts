import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}/site': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}/site',
    'get'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'legalHold-id', 'siteSource-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources`
 *
 * Get the list of siteSource objecs associated with a legal hold.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources',
    paramDefs: {
      path: ['case-id', 'legalHold-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}`
 *
 * Data source entity for SharePoint sites associated with the legal hold.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}',
    paramDefs: {
      path: ['case-id', 'legalHold-id', 'siteSource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}',
    paramDefs: {
      path: ['case-id', 'legalHold-id', 'siteSource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources`
 *
 * Adds a siteSource to a legalHold object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources',
    paramDefs: {
      path: ['case-id', 'legalHold-id'],
    },
    params,
    body,
  };
}

export const site = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}/site`
   *
   * The SharePoint site associated with the siteSource.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}/site']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}/site']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/siteSources/{siteSource-id}/site',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'legalHold-id', 'siteSource-id'],
      },
      params,
    };
  },
};
