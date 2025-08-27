import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/settings/itemInsights': Operation<
    '/organization/{organization-id}/settings/itemInsights',
    'delete'
  >;
  'GET /organization/{organization-id}/settings/itemInsights': Operation<
    '/organization/{organization-id}/settings/itemInsights',
    'get'
  >;
  'PATCH /organization/{organization-id}/settings/itemInsights': Operation<
    '/organization/{organization-id}/settings/itemInsights',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/settings/itemInsights`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/settings/itemInsights']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/settings/itemInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/settings/itemInsights',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/settings/itemInsights`
 *
 * Get the properties of an insightsSettings object for displaying or returning item insights in an organization. To learn how to customize the privacy of item insights in an organization, see Customize item insights privacy.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/settings/itemInsights']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/settings/itemInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/settings/itemInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/settings/itemInsights`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/settings/itemInsights']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/settings/itemInsights']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/settings/itemInsights']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/settings/itemInsights',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
