import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/publish',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/publish',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
