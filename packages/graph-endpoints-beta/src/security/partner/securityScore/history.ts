import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner/securityScore/history/{securityScoreHistory-id}': Operation<
    '/security/partner/securityScore/history/{securityScoreHistory-id}',
    'delete'
  >;
  'GET /security/partner/securityScore/history': Operation<
    '/security/partner/securityScore/history',
    'get'
  >;
  'GET /security/partner/securityScore/history/{securityScoreHistory-id}': Operation<
    '/security/partner/securityScore/history/{securityScoreHistory-id}',
    'get'
  >;
  'PATCH /security/partner/securityScore/history/{securityScoreHistory-id}': Operation<
    '/security/partner/securityScore/history/{securityScoreHistory-id}',
    'patch'
  >;
  'POST /security/partner/securityScore/history': Operation<
    '/security/partner/securityScore/history',
    'post'
  >;
}

/**
 * `DELETE /security/partner/securityScore/history/{securityScoreHistory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner/securityScore/history/{securityScoreHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/partner/securityScore/history/{securityScoreHistory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner/securityScore/history/{securityScoreHistory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'securityScoreHistory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/partner/securityScore/history`
 *
 * Get a list of securityScoreHistory entries.
 */
export function get(
  params?: IEndpoints['GET /security/partner/securityScore/history']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner/securityScore/history']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore/history',
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
 * `GET /security/partner/securityScore/history/{securityScoreHistory-id}`
 *
 * Read the properties and relationships of a securityScoreHistory object.
 */
export function get$1(
  params?: IEndpoints['GET /security/partner/securityScore/history/{securityScoreHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/partner/securityScore/history/{securityScoreHistory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore/history/{securityScoreHistory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'securityScoreHistory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/partner/securityScore/history/{securityScoreHistory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner/securityScore/history/{securityScoreHistory-id}']['body'],
  params?: IEndpoints['PATCH /security/partner/securityScore/history/{securityScoreHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/partner/securityScore/history/{securityScoreHistory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner/securityScore/history/{securityScoreHistory-id}',
    paramDefs: [{ name: 'securityScoreHistory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/partner/securityScore/history`
 *
 */
export function create(
  body: IEndpoints['POST /security/partner/securityScore/history']['body'],
  params?: IEndpoints['POST /security/partner/securityScore/history']['parameters']
): EndpointRequest<IEndpoints['POST /security/partner/securityScore/history']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/partner/securityScore/history',
    paramDefs: [],
    params,
    body,
  };
}
