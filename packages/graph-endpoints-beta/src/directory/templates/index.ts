export * as deviceTemplates from './deviceTemplates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/templates': Operation<'/directory/templates', 'delete'>;
  'GET /directory/templates': Operation<'/directory/templates', 'get'>;
  'PATCH /directory/templates': Operation<'/directory/templates', 'patch'>;
}

/**
 * `DELETE /directory/templates`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/templates']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/templates']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/templates',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /directory/templates`
 *
 * A container for templates, such as device templates used for onboarding devices in Microsoft Entra ID.
 */
export function list(
  params?: IEndpoints['GET /directory/templates']['parameters']
): EndpointRequest<IEndpoints['GET /directory/templates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/templates',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/templates`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/templates']['body'],
  params?: IEndpoints['PATCH /directory/templates']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory/templates']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/templates',
    paramDefs: [],
    params,
    body,
  };
}
