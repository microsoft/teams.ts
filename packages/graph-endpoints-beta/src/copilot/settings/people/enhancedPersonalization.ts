import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/settings/people/enhancedPersonalization': Operation<
    '/copilot/settings/people/enhancedPersonalization',
    'delete'
  >;
  'GET /copilot/settings/people/enhancedPersonalization': Operation<
    '/copilot/settings/people/enhancedPersonalization',
    'get'
  >;
  'PATCH /copilot/settings/people/enhancedPersonalization': Operation<
    '/copilot/settings/people/enhancedPersonalization',
    'patch'
  >;
}

/**
 * `DELETE /copilot/settings/people/enhancedPersonalization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/settings/people/enhancedPersonalization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/settings/people/enhancedPersonalization']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/settings/people/enhancedPersonalization',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /copilot/settings/people/enhancedPersonalization`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/settings/people/enhancedPersonalization']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/settings/people/enhancedPersonalization']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/settings/people/enhancedPersonalization',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/settings/people/enhancedPersonalization`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/settings/people/enhancedPersonalization']['body'],
  params?: IEndpoints['PATCH /copilot/settings/people/enhancedPersonalization']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/settings/people/enhancedPersonalization']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/settings/people/enhancedPersonalization',
    paramDefs: [],
    params,
    body,
  };
}
