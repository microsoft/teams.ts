export * as signInEventsAppSummary from './signInEventsAppSummary';
export * as signIns from './signIns';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /auditLogs': Operation<'/auditLogs', 'get'>;
  'PATCH /auditLogs': Operation<'/auditLogs', 'patch'>;
  'GET /auditLogs/auditActivityTypes': Operation<'/auditLogs/auditActivityTypes', 'get'>;
  'POST /auditLogs/auditActivityTypes': Operation<'/auditLogs/auditActivityTypes', 'post'>;
  'GET /auditLogs/auditActivityTypes/{auditActivityType-id}': Operation<
    '/auditLogs/auditActivityTypes/{auditActivityType-id}',
    'get'
  >;
  'PATCH /auditLogs/auditActivityTypes/{auditActivityType-id}': Operation<
    '/auditLogs/auditActivityTypes/{auditActivityType-id}',
    'patch'
  >;
  'DELETE /auditLogs/auditActivityTypes/{auditActivityType-id}': Operation<
    '/auditLogs/auditActivityTypes/{auditActivityType-id}',
    'delete'
  >;
  'GET /auditLogs/customSecurityAttributeAudits': Operation<
    '/auditLogs/customSecurityAttributeAudits',
    'get'
  >;
  'POST /auditLogs/customSecurityAttributeAudits': Operation<
    '/auditLogs/customSecurityAttributeAudits',
    'post'
  >;
  'GET /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}': Operation<
    '/auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}',
    'get'
  >;
  'PATCH /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}': Operation<
    '/auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}',
    'patch'
  >;
  'DELETE /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}': Operation<
    '/auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}',
    'delete'
  >;
  'GET /auditLogs/directoryAudits': Operation<'/auditLogs/directoryAudits', 'get'>;
  'POST /auditLogs/directoryAudits': Operation<'/auditLogs/directoryAudits', 'post'>;
  'GET /auditLogs/directoryAudits/{directoryAudit-id}': Operation<
    '/auditLogs/directoryAudits/{directoryAudit-id}',
    'get'
  >;
  'PATCH /auditLogs/directoryAudits/{directoryAudit-id}': Operation<
    '/auditLogs/directoryAudits/{directoryAudit-id}',
    'patch'
  >;
  'DELETE /auditLogs/directoryAudits/{directoryAudit-id}': Operation<
    '/auditLogs/directoryAudits/{directoryAudit-id}',
    'delete'
  >;
  'GET /auditLogs/directoryProvisioning': Operation<'/auditLogs/directoryProvisioning', 'get'>;
  'POST /auditLogs/directoryProvisioning': Operation<'/auditLogs/directoryProvisioning', 'post'>;
  'GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    'get'
  >;
  'PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    'patch'
  >;
  'DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    'delete'
  >;
  'GET /auditLogs/provisioning': Operation<'/auditLogs/provisioning', 'get'>;
  'POST /auditLogs/provisioning': Operation<'/auditLogs/provisioning', 'post'>;
  'GET /auditLogs/provisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    'get'
  >;
  'PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    'patch'
  >;
  'DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    'delete'
  >;
  'GET /auditLogs/signInEventsSummary': Operation<'/auditLogs/signInEventsSummary', 'get'>;
  'POST /auditLogs/signInEventsSummary': Operation<'/auditLogs/signInEventsSummary', 'post'>;
  'GET /auditLogs/signInEventsSummary/{signInEventsActivity-id}': Operation<
    '/auditLogs/signInEventsSummary/{signInEventsActivity-id}',
    'get'
  >;
  'PATCH /auditLogs/signInEventsSummary/{signInEventsActivity-id}': Operation<
    '/auditLogs/signInEventsSummary/{signInEventsActivity-id}',
    'patch'
  >;
  'DELETE /auditLogs/signInEventsSummary/{signInEventsActivity-id}': Operation<
    '/auditLogs/signInEventsSummary/{signInEventsActivity-id}',
    'delete'
  >;
  'GET /auditLogs/signUps': Operation<'/auditLogs/signUps', 'get'>;
  'POST /auditLogs/signUps': Operation<'/auditLogs/signUps', 'post'>;
  'GET /auditLogs/signUps/{selfServiceSignUp-id}': Operation<
    '/auditLogs/signUps/{selfServiceSignUp-id}',
    'get'
  >;
  'PATCH /auditLogs/signUps/{selfServiceSignUp-id}': Operation<
    '/auditLogs/signUps/{selfServiceSignUp-id}',
    'patch'
  >;
  'DELETE /auditLogs/signUps/{selfServiceSignUp-id}': Operation<
    '/auditLogs/signUps/{selfServiceSignUp-id}',
    'delete'
  >;
}

/**
 * `GET /auditLogs`
 *
 */
export function list(
  params?: IEndpoints['GET /auditLogs']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /auditLogs`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs']['body']
): EndpointRequest<IEndpoints['PATCH /auditLogs']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs',
    body,
  };
}

export const auditActivityTypes = {
  /**
   * `GET /auditLogs/auditActivityTypes`
   *
   * Gets a list of all of the possible audit log types and which services they come from as defined in the auditActivityType object.
   */
  list: function list(
    params?: IEndpoints['GET /auditLogs/auditActivityTypes']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/auditActivityTypes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/auditActivityTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/auditActivityTypes`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/auditActivityTypes']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/auditActivityTypes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/auditActivityTypes',
      body,
    };
  },
  /**
   * `GET /auditLogs/auditActivityTypes/{auditActivityType-id}`
   *
   * Represents an audit activity type which includes the associated service and category for a specific activity.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/auditActivityTypes/{auditActivityType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /auditLogs/auditActivityTypes/{auditActivityType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/auditActivityTypes/{auditActivityType-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['auditActivityType-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/auditActivityTypes/{auditActivityType-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/auditActivityTypes/{auditActivityType-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/auditActivityTypes/{auditActivityType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /auditLogs/auditActivityTypes/{auditActivityType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/auditActivityTypes/{auditActivityType-id}',
      paramDefs: {
        path: ['auditActivityType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/auditActivityTypes/{auditActivityType-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/auditActivityTypes/{auditActivityType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/auditActivityTypes/{auditActivityType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/auditActivityTypes/{auditActivityType-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['auditActivityType-id'],
      },
      params,
    };
  },
};

export const customSecurityAttributeAudits = {
  /**
   * `GET /auditLogs/customSecurityAttributeAudits`
   *
   * Get the list of audit logs generated by activities related to custom security attribute management in Microsoft Entra ID.
   */
  list: function list(
    params?: IEndpoints['GET /auditLogs/customSecurityAttributeAudits']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/customSecurityAttributeAudits']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/customSecurityAttributeAudits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/customSecurityAttributeAudits`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/customSecurityAttributeAudits']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/customSecurityAttributeAudits']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/customSecurityAttributeAudits',
      body,
    };
  },
  /**
   * `GET /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}`
   *
   * Represents a custom security attribute audit log.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['customSecurityAttributeAudit-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}',
      paramDefs: {
        path: ['customSecurityAttributeAudit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/customSecurityAttributeAudits/{customSecurityAttributeAudit-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['customSecurityAttributeAudit-id'],
      },
      params,
    };
  },
};

export const directoryAudits = {
  /**
   * `GET /auditLogs/directoryAudits`
   *
   * Get the list of audit logs generated by Microsoft Entra ID. This includes audit logs generated by various services within Microsoft Entra ID, including user, app, device and group Management, privileged identity management (PIM), access reviews, terms of use, identity protection, password management (SSPR and admin password resets), and self service group management.
   */
  list: function list(
    params?: IEndpoints['GET /auditLogs/directoryAudits']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/directoryAudits']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/directoryAudits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/directoryAudits`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/directoryAudits']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/directoryAudits']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/directoryAudits',
      body,
    };
  },
  /**
   * `GET /auditLogs/directoryAudits/{directoryAudit-id}`
   *
   * Get a specific Microsoft Entra audit log item. This includes an audit log item generated by various services within Microsoft Entra ID like user, application, device and group management, privileged identity management (PIM), access reviews, terms of use, identity protection, password management (self-service and admin password resets), self-service group management, and so on.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/directoryAudits/{directoryAudit-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/directoryAudits/{directoryAudit-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/directoryAudits/{directoryAudit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['directoryAudit-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/directoryAudits/{directoryAudit-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/directoryAudits/{directoryAudit-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/directoryAudits/{directoryAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /auditLogs/directoryAudits/{directoryAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/directoryAudits/{directoryAudit-id}',
      paramDefs: {
        path: ['directoryAudit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/directoryAudits/{directoryAudit-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/directoryAudits/{directoryAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/directoryAudits/{directoryAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/directoryAudits/{directoryAudit-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['directoryAudit-id'],
      },
      params,
    };
  },
};

export const directoryProvisioning = {
  /**
   * `GET /auditLogs/directoryProvisioning`
   *
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/directoryProvisioning']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/directoryProvisioning']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/directoryProvisioning',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/directoryProvisioning`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/directoryProvisioning']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/directoryProvisioning']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/directoryProvisioning',
      body,
    };
  },
  /**
   * `GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['provisioningObjectSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
      paramDefs: {
        path: ['provisioningObjectSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['provisioningObjectSummary-id'],
      },
      params,
    };
  },
};

export const provisioning = {
  /**
   * `GET /auditLogs/provisioning`
   *
   * Get all provisioning events that occurred in your tenant, such as the deletion of a group in a target application or the creation of a user when provisioning user accounts from your HR system.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/provisioning']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/provisioning']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/provisioning',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/provisioning`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/provisioning']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/provisioning']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/provisioning',
      body,
    };
  },
  /**
   * `GET /auditLogs/provisioning/{provisioningObjectSummary-id}`
   *
   * Represents an action performed by the Microsoft Entra provisioning service and its associated properties.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /auditLogs/provisioning/{provisioningObjectSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /auditLogs/provisioning/{provisioningObjectSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/provisioning/{provisioningObjectSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['provisioningObjectSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/provisioning/{provisioningObjectSummary-id}',
      paramDefs: {
        path: ['provisioningObjectSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/provisioning/{provisioningObjectSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['provisioningObjectSummary-id'],
      },
      params,
    };
  },
};

export const signInEventsSummary = {
  /**
   * `GET /auditLogs/signInEventsSummary`
   *
   * Get a list of the number of signin events for a specific day as defined in the signInEventsActivity object.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/signInEventsSummary']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/signInEventsSummary']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/signInEventsSummary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/signInEventsSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/signInEventsSummary']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/signInEventsSummary']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/signInEventsSummary',
      body,
    };
  },
  /**
   * `GET /auditLogs/signInEventsSummary/{signInEventsActivity-id}`
   *
   * Represents the total number of sign-in events for a specific day.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/signInEventsSummary/{signInEventsActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['signInEventsActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/signInEventsSummary/{signInEventsActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/signInEventsSummary/{signInEventsActivity-id}',
      paramDefs: {
        path: ['signInEventsActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/signInEventsSummary/{signInEventsActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/signInEventsSummary/{signInEventsActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/signInEventsSummary/{signInEventsActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['signInEventsActivity-id'],
      },
      params,
    };
  },
};

export const signUps = {
  /**
   * `GET /auditLogs/signUps`
   *
   * Retrieve the Microsoft Entra External ID user selfServiceSignUps events for your tenant.  The maximum and default page size is 1,000 objects and by default, the most recent sign-ups are returned first. Only sign-up events that occurred within the Microsoft Entra ID default retention period are available.
   */
  list: function list(
    params?: IEndpoints['GET /auditLogs/signUps']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/signUps']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/signUps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /auditLogs/signUps`
   *
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/signUps']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/signUps']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/signUps',
      body,
    };
  },
  /**
   * `GET /auditLogs/signUps/{selfServiceSignUp-id}`
   *
   * Retrieve a specific Microsoft Entra External ID user selfServiceSignUp event for your tenant.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/signUps/{selfServiceSignUp-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /auditLogs/signUps/{selfServiceSignUp-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/signUps/{selfServiceSignUp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['selfServiceSignUp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /auditLogs/signUps/{selfServiceSignUp-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /auditLogs/signUps/{selfServiceSignUp-id}']['body'],
    params?: IEndpoints['PATCH /auditLogs/signUps/{selfServiceSignUp-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /auditLogs/signUps/{selfServiceSignUp-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/auditLogs/signUps/{selfServiceSignUp-id}',
      paramDefs: {
        path: ['selfServiceSignUp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/signUps/{selfServiceSignUp-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/signUps/{selfServiceSignUp-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /auditLogs/signUps/{selfServiceSignUp-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/signUps/{selfServiceSignUp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['selfServiceSignUp-id'],
      },
      params,
    };
  },
};
