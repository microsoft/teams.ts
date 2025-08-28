export * as itemInsights from './itemInsights';
export * as namePronunciation from './namePronunciation';
export * as photoUpdateSettings from './photoUpdateSettings';
export * as profileCardProperties from './profileCardProperties';
export * as profilePropertySettings from './profilePropertySettings';
export * as profileSources from './profileSources';
export * as pronouns from './pronouns';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/people': Operation<'/admin/people', 'delete'>;
  'GET /admin/people': Operation<'/admin/people', 'get'>;
  'PATCH /admin/people': Operation<'/admin/people', 'patch'>;
}

/**
 * `DELETE /admin/people`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/people']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/people']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/people',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/people`
 *
 * Retrieve the properties and relationships of a peopleAdminSettings object.
 */
export function get(
  params?: IEndpoints['GET /admin/people']['parameters']
): EndpointRequest<IEndpoints['GET /admin/people']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/people',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/people`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/people']['body'],
  params?: IEndpoints['PATCH /admin/people']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/people']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/people',
    paramDefs: [],
    params,
    body,
  };
}
