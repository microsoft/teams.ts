export * as authorityTemplate from './authorityTemplate';
export * as categoryTemplate from './categoryTemplate';
export * as citationTemplate from './citationTemplate';
export * as departmentTemplate from './departmentTemplate';
export * as filePlanReferenceTemplate from './filePlanReferenceTemplate';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    'delete'
  >;
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    'get'
  >;
  'PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    'patch'
  >;
}

/**
 * `DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['response']
> {
  return {
    method: 'delete',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors`
 *
 * Represents out-of-the-box values that provide more options to improve the manageability and organization of the content you need to label.
 */
export function list(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['body'],
  params?: IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/retentionLabels/{retentionLabel-id}/descriptors']['response']
> {
  return {
    method: 'patch',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors',
    paramDefs: [{ name: 'retentionLabel-id', in: 'path' }],
    params,
    body,
  };
}
