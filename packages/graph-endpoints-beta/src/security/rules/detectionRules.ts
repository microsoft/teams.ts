import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/rules/detectionRules/{detectionRule-id}': Operation<
    '/security/rules/detectionRules/{detectionRule-id}',
    'delete'
  >;
  'GET /security/rules/detectionRules': Operation<'/security/rules/detectionRules', 'get'>;
  'GET /security/rules/detectionRules/{detectionRule-id}': Operation<
    '/security/rules/detectionRules/{detectionRule-id}',
    'get'
  >;
  'PATCH /security/rules/detectionRules/{detectionRule-id}': Operation<
    '/security/rules/detectionRules/{detectionRule-id}',
    'patch'
  >;
  'POST /security/rules/detectionRules': Operation<'/security/rules/detectionRules', 'post'>;
}

/**
 * `DELETE /security/rules/detectionRules/{detectionRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/rules/detectionRules/{detectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/rules/detectionRules/{detectionRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/rules/detectionRules/{detectionRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'detectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /security/rules/detectionRules`
  *
  * Get a list of custom detection rules.
With custom detections, you can proactively monitor for and respond to various events and system states, including suspected breach activity and misconfigured assets in their organization network.
Custom detection rules, which are written in Kusto query language (KQL), automatically trigger alerts and response actions once there are events matching their KQL queries.
  */
export function list(
  params?: IEndpoints['GET /security/rules/detectionRules']['parameters']
): EndpointRequest<IEndpoints['GET /security/rules/detectionRules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/rules/detectionRules',
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
 * `GET /security/rules/detectionRules/{detectionRule-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/rules/detectionRules/{detectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/rules/detectionRules/{detectionRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/rules/detectionRules/{detectionRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'detectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/rules/detectionRules/{detectionRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/rules/detectionRules/{detectionRule-id}']['body'],
  params?: IEndpoints['PATCH /security/rules/detectionRules/{detectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/rules/detectionRules/{detectionRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/rules/detectionRules/{detectionRule-id}',
    paramDefs: [{ name: 'detectionRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/rules/detectionRules`
 *
 */
export function create(
  body: IEndpoints['POST /security/rules/detectionRules']['body'],
  params?: IEndpoints['POST /security/rules/detectionRules']['parameters']
): EndpointRequest<IEndpoints['POST /security/rules/detectionRules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/rules/detectionRules',
    paramDefs: [],
    params,
    body,
  };
}
