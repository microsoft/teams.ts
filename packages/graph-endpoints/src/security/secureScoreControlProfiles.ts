import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}': Operation<
    '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    'delete'
  >;
  'GET /security/secureScoreControlProfiles': Operation<
    '/security/secureScoreControlProfiles',
    'get'
  >;
  'GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}': Operation<
    '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    'get'
  >;
  'PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}': Operation<
    '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    'patch'
  >;
  'POST /security/secureScoreControlProfiles': Operation<
    '/security/secureScoreControlProfiles',
    'post'
  >;
}

/**
 * `DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'secureScoreControlProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/secureScoreControlProfiles`
 *
 * Retrieve the properties and relationships of a secureScoreControlProfiles object.
 */
export function list(
  params?: IEndpoints['GET /security/secureScoreControlProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/secureScoreControlProfiles']['response']> {
  return {
    method: 'get',
    path: '/security/secureScoreControlProfiles',
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
 * `GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
 *
 * Retrieve the properties and relationships of an securescorecontrolprofile object.
 */
export function get(
  params?: IEndpoints['GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'secureScoreControlProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
 *
 * Update an editable secureScoreControlProfile object within any integrated solution to change various properties, such as assignedTo or tenantNote.
 */
export function update(
  body: IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    paramDefs: [{ name: 'secureScoreControlProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/secureScoreControlProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /security/secureScoreControlProfiles']['body'],
  params?: IEndpoints['POST /security/secureScoreControlProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/secureScoreControlProfiles']['response']> {
  return {
    method: 'post',
    path: '/security/secureScoreControlProfiles',
    paramDefs: [],
    params,
    body,
  };
}
