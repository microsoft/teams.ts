import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/primaryChannel/filesFolder': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder/content',
    'get'
  >;
  'PUT /teams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder/content',
    'put'
  >;
  'DELETE /teams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder/content',
    'delete'
  >;
}

/**
 * `GET /teams/{team-id}/primaryChannel/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/filesFolder',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /teams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder/content']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/primaryChannel/filesFolder/content',
      paramDefs: {
        query: ['$format'],
        path: ['team-id'],
      },
      params,
    };
  },
  /**
   * `PUT /teams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['body'],
    params?: IEndpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['response']
  > {
    return {
      method: 'put',
      path: '/teams/{team-id}/primaryChannel/filesFolder/content',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/filesFolder/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/primaryChannel/filesFolder/content']['response']
  > {
    return {
      method: 'delete',
      path: '/teams/{team-id}/primaryChannel/filesFolder/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id'],
      },
      params,
    };
  },
};
