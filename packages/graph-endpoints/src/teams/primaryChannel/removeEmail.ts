import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/removeEmail': Operation<
    '/teams/{team-id}/primaryChannel/removeEmail',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/removeEmail`
 *
 * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/removeEmail']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/removeEmail']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/removeEmail']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/removeEmail',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
