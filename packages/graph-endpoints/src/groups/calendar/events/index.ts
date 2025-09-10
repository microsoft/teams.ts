export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/calendar/events/{event-id}': Operation<
    '/groups/{group-id}/calendar/events/{event-id}',
    'delete'
  >;
  'GET /groups/{group-id}/calendar/events': Operation<'/groups/{group-id}/calendar/events', 'get'>;
  'GET /groups/{group-id}/calendar/events/{event-id}': Operation<
    '/groups/{group-id}/calendar/events/{event-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/calendar/events/{event-id}': Operation<
    '/groups/{group-id}/calendar/events/{event-id}',
    'patch'
  >;
  'POST /groups/{group-id}/calendar/events': Operation<
    '/groups/{group-id}/calendar/events',
    'post'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/accept': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/accept',
    'post'
  >;
  'GET /groups/{group-id}/calendar/events/{event-id}/calendar': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/calendar',
    'get'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/cancel': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/cancel',
    'post'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/decline': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/decline',
    'post'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/dismissReminder',
    'post'
  >;
  'GET /groups/{group-id}/calendar/events/{event-id}/extensions': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/extensions',
    'get'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/extensions': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/extensions',
    'post'
  >;
  'GET /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/forward': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/forward',
    'post'
  >;
  'GET /groups/{group-id}/calendar/events/{event-id}/instances': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/instances',
    'get'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/permanentDelete',
    'post'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/snoozeReminder',
    'post'
  >;
  'POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/tentativelyAccept',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/calendar/events/{event-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/calendar/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/calendar/events/{event-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/calendar/events/{event-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'event-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/calendar/events`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/calendar/events']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar/events']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/calendar/events',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/calendar/events/{event-id}`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/calendar/events/{event-id}',
    paramDefs: {
      path: ['group-id', 'event-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/calendar/events/{event-id}`
 *
 * Update an event object.
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/calendar/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/calendar/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/calendar/events/{event-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/calendar/events/{event-id}',
    paramDefs: {
      path: ['group-id', 'event-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/calendar/events`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/events']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/events']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/calendar/events']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/calendar/events',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const accept = {
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/accept`
   *
   * Accept the specified event in a user calendar.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/accept']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/accept']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/accept']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/accept',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const calendar = {
  /**
   * `GET /groups/{group-id}/calendar/events/{event-id}/calendar`
   *
   * The calendar that contains the event. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/calendar']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/calendar']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/events/{event-id}/calendar',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'event-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
  * `POST /groups/{group-id}/calendar/events/{event-id}/cancel`
  *
  * This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting 
by providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following
error message: &#x27;Your request can&#x27;t be completed. You need to be an organizer to cancel a meeting.&#x27; This action differs from Delete in that Cancel is available to only the organizer, and lets
the organizer send a custom message to the attendees about the cancellation.
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/cancel']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/cancel',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const decline = {
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/decline`
   *
   * Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/decline']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/decline']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/decline']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/decline',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const dismissReminder = {
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder`
   *
   * Dismiss a reminder that has been triggered for an event in a user calendar.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/dismissReminder']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/dismissReminder',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /groups/{group-id}/calendar/events/{event-id}/extensions`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/extensions']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/events/{event-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'event-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/extensions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/extensions']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/extensions',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'event-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['group-id', 'event-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/calendar/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'event-id', 'extension-id'],
      },
      params,
    };
  },
};

export const forward = {
  /**
  * `POST /groups/{group-id}/calendar/events/{event-id}/forward`
  *
  * This action allows the organizer or attendee of a meeting event to forward the
meeting request to a new recipient. If the meeting event is forwarded from an attendee&#x27;s Microsoft 365 mailbox to another recipient, this action
also sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer&#x27;s
copy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.
  */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/forward']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/forward']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/forward']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/forward',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const instances = {
  /**
   * `GET /groups/{group-id}/calendar/events/{event-id}/instances`
   *
   * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions modified, but doesn&#x27;t include occurrences canceled from the series. Navigation property. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/instances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/calendar/events/{event-id}/instances']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendar/events/{event-id}/instances',
      paramDefs: {
        query: [
          'startDateTime',
          'endDateTime',
          '$top',
          '$skip',
          '$search',
          '$filter',
          '$count',
          '$orderby',
          '$select',
          '$expand',
        ],
        path: ['group-id', 'event-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/permanentDelete',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
    };
  },
};

export const snoozeReminder = {
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder`
   *
   * Postpone a reminder for an event in a user calendar until a new time.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/snoozeReminder']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/snoozeReminder',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const tentativelyAccept = {
  /**
   * `POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept`
   *
   * Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept']['body'],
    params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/tentativelyAccept']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/calendar/events/{event-id}/tentativelyAccept',
      paramDefs: {
        path: ['group-id', 'event-id'],
      },
      params,
      body,
    };
  },
};
