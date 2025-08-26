import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/cancel',
    'post'
  >;
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/cancel',
    paramDefs: [{ name: 'virtualEvent-id', in: 'path' }],
    params,
    body,
  };
}
