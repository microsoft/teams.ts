import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}': Operation<
    '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    'delete'
  >;
  'GET /deviceManagement/cartToClassAssociations': Operation<
    '/deviceManagement/cartToClassAssociations',
    'get'
  >;
  'GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}': Operation<
    '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    'get'
  >;
  'PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}': Operation<
    '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    'patch'
  >;
  'POST /deviceManagement/cartToClassAssociations': Operation<
    '/deviceManagement/cartToClassAssociations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cartToClassAssociation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/cartToClassAssociations`
 *
 * The Cart To Class Associations.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/cartToClassAssociations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/cartToClassAssociations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cartToClassAssociations',
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
 * `GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}`
 *
 * The Cart To Class Associations.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cartToClassAssociation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    paramDefs: [{ name: 'cartToClassAssociation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/cartToClassAssociations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cartToClassAssociations']['body'],
  params?: IEndpoints['POST /deviceManagement/cartToClassAssociations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/cartToClassAssociations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cartToClassAssociations',
    paramDefs: [],
    params,
    body,
  };
}
