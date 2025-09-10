import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'delete'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'get'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'patch'
  >;
  'POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'post'
  >;
  'POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'pageTemplate-id', 'webPart-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 * The set of web parts in this section.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    paramDefs: {
      path: ['site-id', 'pageTemplate-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 * The set of web parts in this section.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: {
      path: ['site-id', 'pageTemplate-id', 'webPart-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: {
      path: ['site-id', 'pageTemplate-id', 'webPart-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    paramDefs: {
      path: ['site-id', 'pageTemplate-id'],
    },
    params,
    body,
  };
}

export const getPositionOfWebPart = {
  /**
   * `POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart`
   *
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart',
      paramDefs: {
        path: ['site-id', 'pageTemplate-id', 'webPart-id'],
      },
      params,
    };
  },
};
