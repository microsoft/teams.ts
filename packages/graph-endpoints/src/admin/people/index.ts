export * as itemInsights from './itemInsights';
export * as profileCardProperties from './profileCardProperties';
export * as pronouns from './pronouns';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /admin/people': Operation<'/admin/people', 'get'>;
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
    method: 'get',
    path: '/admin/people',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
