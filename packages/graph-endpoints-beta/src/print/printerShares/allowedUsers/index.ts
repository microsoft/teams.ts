import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/allowedUsers': Operation<
    '/print/printerShares/{printerShare-id}/allowedUsers',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings': Operation<
    '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings': Operation<
    '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
    'patch'
  >;
  'GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/serviceProvisioningErrors': Operation<
    '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/allowedUsers`
 *
 * The users who have access to print using the printer.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/allowedUsers',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printerShare-id', 'user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/mailboxSettings',
      paramDefs: {
        path: ['printerShare-id', 'user-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printerShares/{printerShare-id}/allowedUsers/{user-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['printerShare-id', 'user-id'],
      },
      params,
    };
  },
};
