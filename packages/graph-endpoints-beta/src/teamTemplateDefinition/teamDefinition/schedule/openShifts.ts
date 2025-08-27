import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
