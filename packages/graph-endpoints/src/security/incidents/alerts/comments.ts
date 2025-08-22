import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /security/incidents/{incident-id}/alerts/{alert-id}/comments': Operation<
    '/security/incidents/{incident-id}/alerts/{alert-id}/comments',
    'post'
  >;
}

/**
 * `POST /security/incidents/{incident-id}/alerts/{alert-id}/comments`
 *
 */
export function create(
  body: IEndpoints['POST /security/incidents/{incident-id}/alerts/{alert-id}/comments']['body'],
  params?: IEndpoints['POST /security/incidents/{incident-id}/alerts/{alert-id}/comments']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/incidents/{incident-id}/alerts/{alert-id}/comments']['response']
> {
  return {
    method: 'post',
    path: '/security/incidents/{incident-id}/alerts/{alert-id}/comments',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'incident-id', in: 'path' },
      { name: 'alert-id', in: 'path' },
    ],
    params,
    body,
  };
}
