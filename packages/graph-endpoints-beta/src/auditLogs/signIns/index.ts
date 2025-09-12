import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /auditLogs/signIns/{signIn-id}': Operation<'/auditLogs/signIns/{signIn-id}', 'delete'>;
  'GET /auditLogs/signIns': Operation<'/auditLogs/signIns', 'get'>;
  'GET /auditLogs/signIns/{signIn-id}': Operation<'/auditLogs/signIns/{signIn-id}', 'get'>;
  'PATCH /auditLogs/signIns/{signIn-id}': Operation<'/auditLogs/signIns/{signIn-id}', 'patch'>;
  'POST /auditLogs/signIns': Operation<'/auditLogs/signIns', 'post'>;
  'POST /auditLogs/signIns/confirmCompromised': Operation<
    '/auditLogs/signIns/confirmCompromised',
    'post'
  >;
  'POST /auditLogs/signIns/confirmSafe': Operation<'/auditLogs/signIns/confirmSafe', 'post'>;
  'POST /auditLogs/signIns/dismiss': Operation<'/auditLogs/signIns/dismiss', 'post'>;
}

/**
 * `DELETE /auditLogs/signIns/{signIn-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /auditLogs/signIns/{signIn-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /auditLogs/signIns/{signIn-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/auditLogs/signIns/{signIn-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['signIn-id'],
    },
    params,
  };
}

/**
 * `GET /auditLogs/signIns`
 *
 * Get a list of signIn objects. The list contains the user sign-ins for your Microsoft Entra tenant. Sign-ins where a username and password are passed as part of authorization token, and successful federated sign-ins are currently included in the sign-in logs. The maximum and default page size is 1,000 objects and by default, the most recent sign-ins are returned first. Only sign-in events that occurred within the Microsoft Entra ID default retention period are available.
 */
export function list(
  params?: IEndpoints['GET /auditLogs/signIns']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signIns']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signIns',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /auditLogs/signIns/{signIn-id}`
 *
 * Retrieve a specific Microsoft Entra user sign-in event for your tenant. Sign-ins that are interactive in nature (where a username/password is passed as part of auth token) and successful federated sign-ins are currently included in the sign-in logs.
 */
export function get(
  params?: IEndpoints['GET /auditLogs/signIns/{signIn-id}']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signIns/{signIn-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signIns/{signIn-id}',
    paramDefs: {
      path: ['signIn-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /auditLogs/signIns/{signIn-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs/signIns/{signIn-id}']['body'],
  params?: IEndpoints['PATCH /auditLogs/signIns/{signIn-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /auditLogs/signIns/{signIn-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs/signIns/{signIn-id}',
    paramDefs: {
      path: ['signIn-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /auditLogs/signIns`
 *
 */
export function create(
  body: IEndpoints['POST /auditLogs/signIns']['body']
): EndpointRequest<IEndpoints['POST /auditLogs/signIns']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/auditLogs/signIns',
    body,
  };
}

export const confirmCompromised = {
  /**
   * `POST /auditLogs/signIns/confirmCompromised`
   *
   * Allow admins to mark an event in the Microsoft Entra sign-in logs as risky. Events marked as risky by an admin are immediately flagged as high risk in Microsoft Entra ID Protection, overriding previous risk states. Admins can confirm that events flagged as risky by Microsoft Entra ID Protection are in fact risky. For details about investigating Identity Protection risks, see How to investigate risk.
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/signIns/confirmCompromised']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/signIns/confirmCompromised']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/signIns/confirmCompromised',
      body,
    };
  },
};

export const confirmSafe = {
  /**
   * `POST /auditLogs/signIns/confirmSafe`
   *
   * Allow admins to mark an event in Microsoft Entra sign-in logs as safe. Admins can either mark the events flagged as risky by Microsoft Entra ID Protection as safe, or they can mark unflagged events as safe. For details about investigating Identity Protection risks, see How to investigate risk.
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/signIns/confirmSafe']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/signIns/confirmSafe']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/signIns/confirmSafe',
      body,
    };
  },
};

export const dismiss = {
  /**
   * `POST /auditLogs/signIns/dismiss`
   *
   * Mark an event in Microsoft Entra sign-in logs as dismissed. For details about investigating Identity Protection risks, see How to investigate risk.
   */
  create: function create(
    body: IEndpoints['POST /auditLogs/signIns/dismiss']['body']
  ): EndpointRequest<IEndpoints['POST /auditLogs/signIns/dismiss']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/auditLogs/signIns/dismiss',
      body,
    };
  },
};
