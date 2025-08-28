import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onPremisesSyncBehavior': Operation<
    '/groups/{group-id}/onPremisesSyncBehavior',
    'delete'
  >;
  'GET /groups/{group-id}/onPremisesSyncBehavior': Operation<
    '/groups/{group-id}/onPremisesSyncBehavior',
    'get'
  >;
  'PATCH /groups/{group-id}/onPremisesSyncBehavior': Operation<
    '/groups/{group-id}/onPremisesSyncBehavior',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/onPremisesSyncBehavior`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onPremisesSyncBehavior']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/onPremisesSyncBehavior']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onPremisesSyncBehavior',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onPremisesSyncBehavior`
 *
 * Read the properties of an onPremisesSyncBehavior object. The isCloudManaged property indicates whether the object&#x27;s source of authority is set to the cloud. If true, updates from on-premises Active Directory are blocked in the cloud; if false, updates from on-premises Active Directory are allowed in the cloud and the object can be taken over by on-premises Active Directory.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onPremisesSyncBehavior']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onPremisesSyncBehavior']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onPremisesSyncBehavior',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onPremisesSyncBehavior`
 *
 * Update the properties of an onPremisesSyncBehavior object.
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onPremisesSyncBehavior']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onPremisesSyncBehavior']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/onPremisesSyncBehavior']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onPremisesSyncBehavior',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
