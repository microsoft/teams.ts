import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/sla/azureADAuthentication': Operation<
    '/reports/sla/azureADAuthentication',
    'delete'
  >;
  'GET /reports/sla/azureADAuthentication': Operation<'/reports/sla/azureADAuthentication', 'get'>;
  'PATCH /reports/sla/azureADAuthentication': Operation<
    '/reports/sla/azureADAuthentication',
    'patch'
  >;
}

/**
 * `DELETE /reports/sla/azureADAuthentication`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/sla/azureADAuthentication']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/sla/azureADAuthentication']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/sla/azureADAuthentication',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/sla/azureADAuthentication`
 *
 * Read the properties and relationships of an azureADAuthentication object to find the level of Microsoft Entra authentication availability for your tenant. The Microsoft Entra service Level Agreement (SLA) commits to at least 99.99% authentication availability, as described in Microsoft Entra SLA performance. This object provides you with your tenant&#x27;s actual performance against this commitment.
 */
export function get(
  params?: IEndpoints['GET /reports/sla/azureADAuthentication']['parameters']
): EndpointRequest<IEndpoints['GET /reports/sla/azureADAuthentication']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/sla/azureADAuthentication',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/sla/azureADAuthentication`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/sla/azureADAuthentication']['body'],
  params?: IEndpoints['PATCH /reports/sla/azureADAuthentication']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/sla/azureADAuthentication']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/sla/azureADAuthentication',
    paramDefs: [],
    params,
    body,
  };
}
