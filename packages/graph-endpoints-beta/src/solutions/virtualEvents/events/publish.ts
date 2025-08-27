import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/publish': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/publish',
    'post'
  >;
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/publish`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/publish',
    paramDefs: [{ name: 'virtualEvent-id', in: 'path' }],
    params,
    body,
  };
}
