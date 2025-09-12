import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/user': Operation<
    '/education/users/{educationUser-id}/user',
    'get'
  >;
  'GET /education/users/{educationUser-id}/user/mailboxSettings': Operation<
    '/education/users/{educationUser-id}/user/mailboxSettings',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/user/mailboxSettings': Operation<
    '/education/users/{educationUser-id}/user/mailboxSettings',
    'patch'
  >;
  'GET /education/users/{educationUser-id}/user/serviceProvisioningErrors': Operation<
    '/education/users/{educationUser-id}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/user`
 *
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/user']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/user']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/user',
    paramDefs: {
      path: ['educationUser-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /education/users/{educationUser-id}/user/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/user/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/users/{educationUser-id}/user/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/users/{educationUser-id}/user/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /education/users/{educationUser-id}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/users/{educationUser-id}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/users/{educationUser-id}/user/mailboxSettings',
      paramDefs: {
        path: ['educationUser-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /education/users/{educationUser-id}/user/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/user/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/user/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/users/{educationUser-id}/user/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id'],
      },
      params,
    };
  },
};
