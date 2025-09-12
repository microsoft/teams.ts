export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendars/{calendar-id}/events/{event-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}',
    'delete'
  >;
  'GET /me/calendars/{calendar-id}/events': Operation<'/me/calendars/{calendar-id}/events', 'get'>;
  'GET /me/calendars/{calendar-id}/events/{event-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}',
    'get'
  >;
  'PATCH /me/calendars/{calendar-id}/events/{event-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}',
    'patch'
  >;
  'POST /me/calendars/{calendar-id}/events': Operation<
    '/me/calendars/{calendar-id}/events',
    'post'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/accept': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/accept',
    'post'
  >;
  'GET /me/calendars/{calendar-id}/events/{event-id}/calendar': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/calendar',
    'get'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/cancel': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/cancel',
    'post'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/decline': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/decline',
    'post'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/dismissReminder',
    'post'
  >;
  'GET /me/calendars/{calendar-id}/events/{event-id}/extensions': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/extensions',
    'get'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/extensions': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/extensions',
    'post'
  >;
  'GET /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/forward': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/forward',
    'post'
  >;
  'GET /me/calendars/{calendar-id}/events/{event-id}/instances': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/instances',
    'get'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/permanentDelete',
    'post'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/snoozeReminder': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/snoozeReminder',
    'post'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept',
    'post'
  >;
}

/**
 * `DELETE /me/calendars/{calendar-id}/events/{event-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendars/{calendar-id}/events/{event-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['calendar-id', 'event-id'],
    },
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}/events`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function list(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/events']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars/{calendar-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendars/{calendar-id}/events',
    paramDefs: {
      path: ['calendar-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}/events/{event-id}`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendars/{calendar-id}/events/{event-id}',
    paramDefs: {
      path: ['calendar-id', 'event-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/calendars/{calendar-id}/events/{event-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendars/{calendar-id}/events/{event-id}',
    paramDefs: {
      path: ['calendar-id', 'event-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/calendars/{calendar-id}/events`
 *
 * Use this API to create a new event in a calendar. The calendar can be one for a user, or the default calendar of a Microsoft 365 group.
 */
export function create(
  body: IEndpoints['POST /me/calendars/{calendar-id}/events']['body'],
  params?: IEndpoints['POST /me/calendars/{calendar-id}/events']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendars/{calendar-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendars/{calendar-id}/events',
    paramDefs: {
      path: ['calendar-id'],
    },
    params,
    body,
  };
}

export const accept = {
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/accept`
   *
   * Accept the specified event in a user calendar.
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/accept']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/accept']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/accept']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/accept',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const calendar = {
  /**
   * `GET /me/calendars/{calendar-id}/events/{event-id}/calendar`
   *
   * The calendar that contains the event. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/calendar']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/calendar']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendars/{calendar-id}/events/{event-id}/calendar',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['calendar-id', 'event-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
  * `POST /me/calendars/{calendar-id}/events/{event-id}/cancel`
  *
  * This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting 
by providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following
error message: &#x27;Your request can&#x27;t be completed. You need to be an organizer to cancel a meeting.&#x27; This action differs from Delete in that Cancel is available to only the organizer, and lets
the organizer send a custom message to the attendees about the cancellation.
  */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/cancel']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/cancel',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const decline = {
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/decline`
   *
   * Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/decline']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/decline']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/decline']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/decline',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const dismissReminder = {
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder`
   *
   * Dismiss a reminder that has been triggered for an event in a user calendar.
   */
  create: function create(
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/dismissReminder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/dismissReminder',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /me/calendars/{calendar-id}/events/{event-id}/extensions`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendars/{calendar-id}/events/{event-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['calendar-id', 'event-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/extensions']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/extensions',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['calendar-id', 'event-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['calendar-id', 'event-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/calendars/{calendar-id}/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['calendar-id', 'event-id', 'extension-id'],
      },
      params,
    };
  },
};

export const forward = {
  /**
  * `POST /me/calendars/{calendar-id}/events/{event-id}/forward`
  *
  * This action allows the organizer or attendee of a meeting event to forward the
meeting request to a new recipient. If the meeting event is forwarded from an attendee&#x27;s Microsoft 365 mailbox to another recipient, this action
also sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer&#x27;s
copy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.
  */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/forward']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/forward']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/forward']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/forward',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const instances = {
  /**
   * `GET /me/calendars/{calendar-id}/events/{event-id}/instances`
   *
   * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern and exceptions that have been modified. It doesn&#x27;t include occurrences that have been canceled from the series. Navigation property. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/instances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/instances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendars/{calendar-id}/events/{event-id}/instances',
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
        path: ['calendar-id', 'event-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete`
   *
   * Permanently delete an event and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or the Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/permanentDelete',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
    };
  },
};

export const snoozeReminder = {
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/snoozeReminder`
   *
   * Postpone a reminder for an event in a user calendar until a new time.
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/snoozeReminder']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/snoozeReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/snoozeReminder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/snoozeReminder',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
};

export const tentativelyAccept = {
  /**
   * `POST /me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept`
   *
   * Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  create: function create(
    body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept']['body'],
    params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/calendars/{calendar-id}/events/{event-id}/tentativelyAccept',
      paramDefs: {
        path: ['calendar-id', 'event-id'],
      },
      params,
      body,
    };
  },
};
