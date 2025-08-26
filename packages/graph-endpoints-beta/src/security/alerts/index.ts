export * as updateAlerts from './updateAlerts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /security/alerts': Operation<'/security/alerts', 'get'>;
  'GET /security/alerts/{alert-id}': Operation<'/security/alerts/{alert-id}', 'get'>;
  'PATCH /security/alerts/{alert-id}': Operation<'/security/alerts/{alert-id}', 'patch'>;
  'POST /security/alerts': Operation<'/security/alerts', 'post'>;
}

/**
 * `GET /security/alerts`
 *
 * Retrieve a list of alert objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/alerts']['parameters']
): EndpointRequest<IEndpoints['GET /security/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/alerts',
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
 * `GET /security/alerts/{alert-id}`
 *
 * Retrieve the properties and relationships of an alert object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/alerts/{alert-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alert-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/alerts/{alert-id}`
 *
 * Update an editable alert property within any integrated solution to keep alert status and assignments in sync across solutions. This method updates any solution that has a record of the referenced alert ID.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/alerts/{alert-id}']['body'],
  params?: IEndpoints['PATCH /security/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/alerts/{alert-id}',
    paramDefs: [{ name: 'alert-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/alerts`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/alerts']['body'],
  params?: IEndpoints['POST /security/alerts']['parameters']
): EndpointRequest<IEndpoints['POST /security/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/alerts',
    paramDefs: [],
    params,
    body,
  };
}
