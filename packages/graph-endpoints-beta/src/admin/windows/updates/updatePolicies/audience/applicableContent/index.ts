export * as catalogEntry from './catalogEntry';
export * as matchedDevices from './matchedDevices';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    'delete'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent',
    'get'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    'get'
  >;
  'PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    'patch'
  >;
  'POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get$1(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: [
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent']['body'],
  params?: IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/applicableContent',
    paramDefs: [{ name: 'updatePolicy-id', in: 'path' }],
    params,
    body,
  };
}
