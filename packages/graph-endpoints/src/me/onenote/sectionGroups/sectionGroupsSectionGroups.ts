import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups',
    'get'
  >;
  'GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}': Operation<
    '/me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
    'get'
  >;
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups`
 *
 * Retrieve a list of section groups from the specified section group.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}`
 *
 * The section groups in the section. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sectionGroup-id', in: 'path' },
      { name: 'sectionGroup-id1', in: 'path' },
    ],
    params,
  };
}
