import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applicationTemplates/{applicationTemplate-id}/instantiate': Operation<
    '/applicationTemplates/{applicationTemplate-id}/instantiate',
    'post'
  >;
}

/**
 * `POST /applicationTemplates/{applicationTemplate-id}/instantiate`
 *
 * Add an instance of an application from the Microsoft Entra application gallery into your directory. For non-gallery apps, use an application template with one of the following IDs to configure different single sign-on (SSO) modes like SAML SSO and password-based SSO.
 */
export function create(
  body: IEndpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['body'],
  params?: IEndpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['parameters']
): EndpointRequest<
  IEndpoints['POST /applicationTemplates/{applicationTemplate-id}/instantiate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applicationTemplates/{applicationTemplate-id}/instantiate',
    paramDefs: [{ name: 'applicationTemplate-id', in: 'path' }],
    params,
    body,
  };
}
