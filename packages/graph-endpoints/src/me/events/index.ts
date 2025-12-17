export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/events/{event-id}': Operation<'/me/events/{event-id}', 'delete'>;
  'GET /me/events': Operation<'/me/events', 'get'>;
  'GET /me/events/{event-id}': Operation<'/me/events/{event-id}', 'get'>;
  'PATCH /me/events/{event-id}': Operation<'/me/events/{event-id}', 'patch'>;
  'POST /me/events': Operation<'/me/events', 'post'>;
  'POST /me/events/{event-id}/accept': Operation<'/me/events/{event-id}/accept', 'post'>;
  'GET /me/events/{event-id}/calendar': Operation<'/me/events/{event-id}/calendar', 'get'>;
  'POST /me/events/{event-id}/cancel': Operation<'/me/events/{event-id}/cancel', 'post'>;
  'POST /me/events/{event-id}/decline': Operation<'/me/events/{event-id}/decline', 'post'>;
  'POST /me/events/{event-id}/dismissReminder': Operation<
    '/me/events/{event-id}/dismissReminder',
    'post'
  >;
  'GET /me/events/{event-id}/extensions': Operation<'/me/events/{event-id}/extensions', 'get'>;
  'POST /me/events/{event-id}/extensions': Operation<'/me/events/{event-id}/extensions', 'post'>;
  'GET /me/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/events/{event-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/events/{event-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/events/{event-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /me/events/{event-id}/forward': Operation<'/me/events/{event-id}/forward', 'post'>;
  'GET /me/events/{event-id}/instances': Operation<'/me/events/{event-id}/instances', 'get'>;
  'POST /me/events/{event-id}/permanentDelete': Operation<
    '/me/events/{event-id}/permanentDelete',
    'post'
  >;
  'POST /me/events/{event-id}/snoozeReminder': Operation<
    '/me/events/{event-id}/snoozeReminder',
    'post'
  >;
  'POST /me/events/{event-id}/tentativelyAccept': Operation<
    '/me/events/{event-id}/tentativelyAccept',
    'post'
  >;
}

/**
 * `DELETE /me/events/{event-id}`
 *
 * Removes the specified event from the containing calendar.  If the event is a meeting, deleting the event on the organizer&#x27;s calendar sends a cancellation message to the meeting attendees.
 */
export function del(
  params?: IEndpoints['DELETE /me/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/events/{event-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/events/{event-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['event-id'],
    },
    params,
  };
}

/**
  * `GET /me/events`
  *
  * Get a list of event objects in the user&#x27;s mailbox. The list contains single
instance meetings and series masters. To get expanded event instances, you can get the calendar view, or
get the instances of an event. Currently, this operation returns event bodies in only HTML format. There are two scenarios where an app can get events in another user&#x27;s calendar:
  */
export function list(
  params?: IEndpoints['GET /me/events']['parameters']
): EndpointRequest<IEndpoints['GET /me/events']['response']> {
  return {
    method: 'get',
    path: '/me/events',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/events/{event-id}`
 *
 * Get the properties and relationships of the specified event object. Currently, this operation returns event bodies in only HTML format. There are two scenarios where an app can get an event in another user&#x27;s calendar: Since the event resource supports extensions, you can also use the GET operation to get custom properties and extension data in an event instance.
 */
export function get(
  params?: IEndpoints['GET /me/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/events/{event-id}']['response']> {
  return {
    method: 'get',
    path: '/me/events/{event-id}',
    paramDefs: {
      path: ['event-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/events/{event-id}`
 *
 * Update the properties of the event object.
 */
export function update(
  body: IEndpoints['PATCH /me/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /me/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/events/{event-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/events/{event-id}',
    paramDefs: {
      path: ['event-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /me/events`
  *
  * Create one or more multi-value extended properties in a new or existing instance of a resource. The following user resources are supported: The following group resources are supported: See Extended properties overview for more information about when to use
open extensions or extended properties, and how to specify extended properties.
  */
export function create(
  body: IEndpoints['POST /me/events']['body']
): EndpointRequest<IEndpoints['POST /me/events']['response']> {
  return {
    method: 'post',
    path: '/me/events',
    body,
  };
}

export const accept = {
  /**
   * `POST /me/events/{event-id}/accept`
   *
   * Accept the specified event in a user calendar.
   */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/accept']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/accept']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/accept']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/accept',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
};

export const calendar = {
  /**
   * `GET /me/events/{event-id}/calendar`
   *
   * The calendar that contains the event. Navigation property. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/events/{event-id}/calendar']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/events/{event-id}/calendar']['response']> {
    return {
      method: 'get',
      path: '/me/events/{event-id}/calendar',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['event-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
  * `POST /me/events/{event-id}/cancel`
  *
  * This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting 
by providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following
error message: &#x27;Your request can&#x27;t be completed. You need to be an organizer to cancel a meeting.&#x27; This action differs from Delete in that Cancel is available to only the organizer, and lets
the organizer send a custom message to the attendees about the cancellation.
  */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/cancel']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/cancel']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/cancel']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/cancel',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
};

export const decline = {
  /**
   * `POST /me/events/{event-id}/decline`
   *
   * Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/decline']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/decline']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/decline']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/decline',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
};

export const dismissReminder = {
  /**
   * `POST /me/events/{event-id}/dismissReminder`
   *
   * Dismiss a reminder that has been triggered for an event in a user calendar.
   */
  create: function create(
    params?: IEndpoints['POST /me/events/{event-id}/dismissReminder']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/dismissReminder']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/dismissReminder',
      paramDefs: {
        path: ['event-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /me/events/{event-id}/extensions`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/events/{event-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/events/{event-id}/extensions']['response']> {
    return {
      method: 'get',
      path: '/me/events/{event-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['event-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/events/{event-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/extensions']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/extensions']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/extensions',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/events/{event-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['event-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/events/{event-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/events/{event-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['event-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/events/{event-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/events/{event-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/events/{event-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/events/{event-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['event-id', 'extension-id'],
      },
      params,
    };
  },
};

export const forward = {
  /**
  * `POST /me/events/{event-id}/forward`
  *
  * This action allows the organizer or attendee of a meeting event to forward the
meeting request to a new recipient. If the meeting event is forwarded from an attendee&#x27;s Microsoft 365 mailbox to another recipient, this action
also sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer&#x27;s
copy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.
  */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/forward']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/forward']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/forward']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/forward',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
};

export const instances = {
  /**
  * `GET /me/events/{event-id}/instances`
  *
  * Get the instances (occurrences) of an event for a specified time range.  If the event is a seriesMaster type, this API returns the 
occurrences and exceptions of the event in the specified time range.
  */
  list: function list(
    params?: IEndpoints['GET /me/events/{event-id}/instances']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/events/{event-id}/instances']['response']> {
    return {
      method: 'get',
      path: '/me/events/{event-id}/instances',
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
        path: ['event-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/events/{event-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/events/{event-id}/permanentDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/permanentDelete']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/permanentDelete',
      paramDefs: {
        path: ['event-id'],
      },
      params,
    };
  },
};

export const snoozeReminder = {
  /**
   * `POST /me/events/{event-id}/snoozeReminder`
   *
   * Postpone a reminder for an event in a user calendar until a new time.
   */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/snoozeReminder']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/snoozeReminder']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/snoozeReminder']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/snoozeReminder',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
};

export const tentativelyAccept = {
  /**
   * `POST /me/events/{event-id}/tentativelyAccept`
   *
   * Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  create: function create(
    body: IEndpoints['POST /me/events/{event-id}/tentativelyAccept']['body'],
    params?: IEndpoints['POST /me/events/{event-id}/tentativelyAccept']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/events/{event-id}/tentativelyAccept']['response']> {
    return {
      method: 'post',
      path: '/me/events/{event-id}/tentativelyAccept',
      paramDefs: {
        path: ['event-id'],
      },
      params,
      body,
    };
  },
};
