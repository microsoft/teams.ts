import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/settings': Operation<
    '/compliance/ediscovery/cases/{case-id}/settings',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/settings': Operation<
    '/compliance/ediscovery/cases/{case-id}/settings',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/settings': Operation<
    '/compliance/ediscovery/cases/{case-id}/settings',
    'patch'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/settings`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/settings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/settings`
 *
 * Read the properties and relationships of an eDiscovery caseSettings object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases/{case-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/settings`
 *
 * Update the properties of a an eDiscovery caseSettings object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/settings']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/settings',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
