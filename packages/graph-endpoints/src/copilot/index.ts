export * as admin from './admin';
export * as users from './users';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /copilot': Operation<'/copilot', 'get'>;
  'PATCH /copilot': Operation<'/copilot', 'patch'>;
  'GET /copilot/interactionHistory': Operation<'/copilot/interactionHistory', 'get'>;
  'PATCH /copilot/interactionHistory': Operation<'/copilot/interactionHistory', 'patch'>;
  'DELETE /copilot/interactionHistory': Operation<'/copilot/interactionHistory', 'delete'>;
  'POST /copilot/retrieval': Operation<'/copilot/retrieval', 'post'>;
}

/**
 * `GET /copilot`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot']['parameters']
): EndpointRequest<IEndpoints['GET /copilot']['response']> {
  return {
    method: 'get',
    path: '/copilot',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot']['body']
): EndpointRequest<IEndpoints['PATCH /copilot']['response']> {
  return {
    method: 'patch',
    path: '/copilot',
    body,
  };
}

export const interactionHistory = {
  /**
   * `GET /copilot/interactionHistory`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/interactionHistory']['parameters']
  ): EndpointRequest<IEndpoints['GET /copilot/interactionHistory']['response']> {
    return {
      method: 'get',
      path: '/copilot/interactionHistory',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/interactionHistory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/interactionHistory']['body']
  ): EndpointRequest<IEndpoints['PATCH /copilot/interactionHistory']['response']> {
    return {
      method: 'patch',
      path: '/copilot/interactionHistory',
      body,
    };
  },
  /**
   * `DELETE /copilot/interactionHistory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/interactionHistory']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /copilot/interactionHistory']['response']> {
    return {
      method: 'delete',
      path: '/copilot/interactionHistory',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const retrieval = {
  /**
   * `POST /copilot/retrieval`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /copilot/retrieval']['body']
  ): EndpointRequest<IEndpoints['POST /copilot/retrieval']['response']> {
    return {
      method: 'post',
      path: '/copilot/retrieval',
      body,
    };
  },
};
