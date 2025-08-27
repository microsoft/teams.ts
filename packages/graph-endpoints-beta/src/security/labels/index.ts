export * as authorities from './authorities';
export * as categories from './categories';
export * as citations from './citations';
export * as departments from './departments';
export * as filePlanReferences from './filePlanReferences';
export * as retentionLabels from './retentionLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels': Operation<'/security/labels', 'delete'>;
  'GET /security/labels': Operation<'/security/labels', 'get'>;
  'PATCH /security/labels': Operation<'/security/labels', 'patch'>;
}

/**
 * `DELETE /security/labels`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/labels']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/labels`
 *
 */
export function list(
  params?: IEndpoints['GET /security/labels']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels']['body'],
  params?: IEndpoints['PATCH /security/labels']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/labels']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels',
    paramDefs: [],
    params,
    body,
  };
}
