import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/schools/{educationSchool-id}/administrativeUnit': Operation<
    '/education/schools/{educationSchool-id}/administrativeUnit',
    'get'
  >;
  'PATCH /education/schools/{educationSchool-id}/administrativeUnit': Operation<
    '/education/schools/{educationSchool-id}/administrativeUnit',
    'patch'
  >;
}

/**
 * `GET /education/schools/{educationSchool-id}/administrativeUnit`
 *
 * Retrieve the directory administrativeUnit that corresponds to this educationSchool.
 */
export function get(
  params?: IEndpoints['GET /education/schools/{educationSchool-id}/administrativeUnit']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/schools/{educationSchool-id}/administrativeUnit']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/schools/{educationSchool-id}/administrativeUnit',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/schools/{educationSchool-id}/administrativeUnit`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/schools/{educationSchool-id}/administrativeUnit']['body'],
  params?: IEndpoints['PATCH /education/schools/{educationSchool-id}/administrativeUnit']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/schools/{educationSchool-id}/administrativeUnit']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/schools/{educationSchool-id}/administrativeUnit',
    paramDefs: [{ name: 'educationSchool-id', in: 'path' }],
    params,
    body,
  };
}
