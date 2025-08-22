import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'delete'
  >;
  'GET /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/conditionalAccessSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/conditionalAccessSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/conditionalAccessSettings']['response']> {
  return {
    method: 'delete',
    path: '/deviceManagement/conditionalAccessSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/conditionalAccessSettings`
 *
 * Read properties and relationships of the onPremisesConditionalAccessSettings object.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/conditionalAccessSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/conditionalAccessSettings']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/conditionalAccessSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/conditionalAccessSettings`
 *
 * Update the properties of a onPremisesConditionalAccessSettings object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement/conditionalAccessSettings',
    paramDefs: [],
    params,
    body,
  };
}
