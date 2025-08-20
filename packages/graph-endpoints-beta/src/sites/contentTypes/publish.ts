import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/contentTypes/{contentType-id}/publish': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/publish',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/contentTypes/{contentType-id}/publish`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/publish']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/publish',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
