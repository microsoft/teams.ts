import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /programs/{program-id}/controls/{programControl-id}': Operation<
    '/programs/{program-id}/controls/{programControl-id}',
    'delete'
  >;
  'GET /programs/{program-id}/controls': Operation<'/programs/{program-id}/controls', 'get'>;
  'GET /programs/{program-id}/controls/{programControl-id}': Operation<
    '/programs/{program-id}/controls/{programControl-id}',
    'get'
  >;
  'PATCH /programs/{program-id}/controls/{programControl-id}': Operation<
    '/programs/{program-id}/controls/{programControl-id}',
    'patch'
  >;
  'POST /programs/{program-id}/controls': Operation<'/programs/{program-id}/controls', 'post'>;
  'GET /programs/{program-id}/controls/{programControl-id}/program': Operation<
    '/programs/{program-id}/controls/{programControl-id}/program',
    'get'
  >;
  'PATCH /programs/{program-id}/controls/{programControl-id}/program': Operation<
    '/programs/{program-id}/controls/{programControl-id}/program',
    'patch'
  >;
  'DELETE /programs/{program-id}/controls/{programControl-id}/program': Operation<
    '/programs/{program-id}/controls/{programControl-id}/program',
    'delete'
  >;
}

/**
 * `DELETE /programs/{program-id}/controls/{programControl-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programs/{program-id}/controls/{programControl-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['program-id', 'programControl-id'],
    },
    params,
  };
}

/**
 * `GET /programs/{program-id}/controls`
 *
 * In the Microsoft Entra access reviews feature, list all the programControl objects, linked to a particular program.
 */
export function list(
  params?: IEndpoints['GET /programs/{program-id}/controls']['parameters']
): EndpointRequest<IEndpoints['GET /programs/{program-id}/controls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs/{program-id}/controls',
    paramDefs: {
      path: ['program-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /programs/{program-id}/controls/{programControl-id}`
 *
 * Controls associated with the program.
 */
export function get(
  params?: IEndpoints['GET /programs/{program-id}/controls/{programControl-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /programs/{program-id}/controls/{programControl-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs/{program-id}/controls/{programControl-id}',
    paramDefs: {
      path: ['program-id', 'programControl-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /programs/{program-id}/controls/{programControl-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}']['body'],
  params?: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programs/{program-id}/controls/{programControl-id}',
    paramDefs: {
      path: ['program-id', 'programControl-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /programs/{program-id}/controls`
 *
 */
export function create(
  body: IEndpoints['POST /programs/{program-id}/controls']['body'],
  params?: IEndpoints['POST /programs/{program-id}/controls']['parameters']
): EndpointRequest<IEndpoints['POST /programs/{program-id}/controls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/programs/{program-id}/controls',
    paramDefs: {
      path: ['program-id'],
    },
    params,
    body,
  };
}

export const program = {
  /**
   * `GET /programs/{program-id}/controls/{programControl-id}/program`
   *
   * The program this control is part of.
   */
  get: function get(
    params?: IEndpoints['GET /programs/{program-id}/controls/{programControl-id}/program']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /programs/{program-id}/controls/{programControl-id}/program']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/programs/{program-id}/controls/{programControl-id}/program',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['program-id', 'programControl-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /programs/{program-id}/controls/{programControl-id}/program`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}/program']['body'],
    params?: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}/program']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}/program']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/programs/{program-id}/controls/{programControl-id}/program',
      paramDefs: {
        path: ['program-id', 'programControl-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /programs/{program-id}/controls/{programControl-id}/program`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}/program']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}/program']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/programs/{program-id}/controls/{programControl-id}/program',
      paramDefs: {
        header: ['If-Match'],
        path: ['program-id', 'programControl-id'],
      },
      params,
    };
  },
};
