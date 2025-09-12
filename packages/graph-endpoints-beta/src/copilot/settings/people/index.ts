import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/settings/people': Operation<'/copilot/settings/people', 'delete'>;
  'GET /copilot/settings/people': Operation<'/copilot/settings/people', 'get'>;
  'PATCH /copilot/settings/people': Operation<'/copilot/settings/people', 'patch'>;
  'GET /copilot/settings/people/enhancedPersonalization': Operation<
    '/copilot/settings/people/enhancedPersonalization',
    'get'
  >;
  'PATCH /copilot/settings/people/enhancedPersonalization': Operation<
    '/copilot/settings/people/enhancedPersonalization',
    'patch'
  >;
  'DELETE /copilot/settings/people/enhancedPersonalization': Operation<
    '/copilot/settings/people/enhancedPersonalization',
    'delete'
  >;
}

/**
 * `DELETE /copilot/settings/people`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/settings/people']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/settings/people']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/settings/people',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/settings/people`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/settings/people']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/settings/people']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/settings/people',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/settings/people`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/settings/people']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/settings/people']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/settings/people',
    body,
  };
}

export const enhancedPersonalization = {
  /**
   * `GET /copilot/settings/people/enhancedPersonalization`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/settings/people/enhancedPersonalization']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/settings/people/enhancedPersonalization']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/settings/people/enhancedPersonalization',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/settings/people/enhancedPersonalization`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/settings/people/enhancedPersonalization']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /copilot/settings/people/enhancedPersonalization']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/copilot/settings/people/enhancedPersonalization',
      body,
    };
  },
  /**
   * `DELETE /copilot/settings/people/enhancedPersonalization`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/settings/people/enhancedPersonalization']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /copilot/settings/people/enhancedPersonalization']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/copilot/settings/people/enhancedPersonalization',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
