import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /admin/people/pronouns': Operation<'/admin/people/pronouns', 'get'>;
  'PATCH /admin/people/pronouns': Operation<'/admin/people/pronouns', 'patch'>;
}

/**
 * `GET /admin/people/pronouns`
 *
 * Get the properties of the pronounsSettings resource for an organization.  For more information on settings to manage pronouns support, see Manage pronouns settings for an organization using the Microsoft Graph API.
 */
export function list(
  params?: IEndpoints['GET /admin/people/pronouns']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people/pronouns']['response']> {
  return {
    method: 'get',
    path: '/admin/people/pronouns',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people/pronouns`
 *
 * Update the properties of a pronounsSettings object in an organization. For more information on settings to manage pronouns support, see Manage pronouns settings for an organization using the Microsoft Graph API.
 */
export function update(
  body: IEndpoints['PATCH /admin/people/pronouns']['body'],
  params?: IEndpoints['PATCH /admin/people/pronouns']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/people/pronouns']['response']> {
  return {
    method: 'patch',
    path: '/admin/people/pronouns',
    paramDefs: [],
    params,
    body,
  };
}
