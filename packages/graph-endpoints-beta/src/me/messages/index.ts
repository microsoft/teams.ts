export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'delete'>;
  'GET /me/messages': Operation<'/me/messages', 'get'>;
  'GET /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'get'>;
  'PATCH /me/messages/{message-id}': Operation<'/me/messages/{message-id}', 'patch'>;
  'POST /me/messages': Operation<'/me/messages', 'post'>;
  'POST /me/messages/{message-id}/copy': Operation<'/me/messages/{message-id}/copy', 'post'>;
  'POST /me/messages/{message-id}/createForward': Operation<
    '/me/messages/{message-id}/createForward',
    'post'
  >;
  'POST /me/messages/{message-id}/createReply': Operation<
    '/me/messages/{message-id}/createReply',
    'post'
  >;
  'POST /me/messages/{message-id}/createReplyAll': Operation<
    '/me/messages/{message-id}/createReplyAll',
    'post'
  >;
  'GET /me/messages/{message-id}/extensions': Operation<
    '/me/messages/{message-id}/extensions',
    'get'
  >;
  'POST /me/messages/{message-id}/extensions': Operation<
    '/me/messages/{message-id}/extensions',
    'post'
  >;
  'GET /me/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/messages/{message-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/messages/{message-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/messages/{message-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /me/messages/{message-id}/forward': Operation<'/me/messages/{message-id}/forward', 'post'>;
  'POST /me/messages/{message-id}/markAsJunk': Operation<
    '/me/messages/{message-id}/markAsJunk',
    'post'
  >;
  'POST /me/messages/{message-id}/markAsNotJunk': Operation<
    '/me/messages/{message-id}/markAsNotJunk',
    'post'
  >;
  'GET /me/messages/{message-id}/mentions': Operation<'/me/messages/{message-id}/mentions', 'get'>;
  'POST /me/messages/{message-id}/mentions': Operation<
    '/me/messages/{message-id}/mentions',
    'post'
  >;
  'GET /me/messages/{message-id}/mentions/{mention-id}': Operation<
    '/me/messages/{message-id}/mentions/{mention-id}',
    'get'
  >;
  'DELETE /me/messages/{message-id}/mentions/{mention-id}': Operation<
    '/me/messages/{message-id}/mentions/{mention-id}',
    'delete'
  >;
  'POST /me/messages/{message-id}/move': Operation<'/me/messages/{message-id}/move', 'post'>;
  'POST /me/messages/{message-id}/permanentDelete': Operation<
    '/me/messages/{message-id}/permanentDelete',
    'post'
  >;
  'POST /me/messages/{message-id}/reply': Operation<'/me/messages/{message-id}/reply', 'post'>;
  'POST /me/messages/{message-id}/replyAll': Operation<
    '/me/messages/{message-id}/replyAll',
    'post'
  >;
  'POST /me/messages/{message-id}/reportMessage': Operation<
    '/me/messages/{message-id}/reportMessage',
    'post'
  >;
  'POST /me/messages/{message-id}/send': Operation<'/me/messages/{message-id}/send', 'post'>;
  'POST /me/messages/{message-id}/unsubscribe': Operation<
    '/me/messages/{message-id}/unsubscribe',
    'post'
  >;
}

/**
 * `DELETE /me/messages/{message-id}`
 *
 * Delete eventMessage.
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/messages/{message-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['message-id'],
    },
    params,
  };
}

/**
 * `GET /me/messages`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function list(
  params?: IEndpoints['GET /me/messages']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages',
    paramDefs: {
      query: [
        'includeHiddenMessages',
        '$top',
        '$skip',
        '$search',
        '$filter',
        '$count',
        '$orderby',
        '$select',
        '$expand',
      ],
    },
    params,
  };
}

/**
  * `GET /me/messages/{message-id}`
  *
  * Get the properties and relationships of the eventMessage object. Apply the $expand parameter on the event
navigation property to get the associated event in an attendee&#x27;s calendar.
  */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages/{message-id}',
    paramDefs: {
      path: ['message-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/messages/{message-id}`
 *
 * Update the properties of an eventMessage object.
 */
export function update(
  body: IEndpoints['PATCH /me/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /me/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/messages/{message-id}',
    paramDefs: {
      path: ['message-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/messages`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /me/messages']['body']
): EndpointRequest<IEndpoints['POST /me/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages',
    body,
  };
}

export const copy = {
  /**
   * `POST /me/messages/{message-id}/copy`
   *
   * Copy a message to a folder within the user&#x27;s mailbox.
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/copy']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/copy']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/copy']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/copy',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const createForward = {
  /**
  * `POST /me/messages/{message-id}/createForward`
  *
  * Create a draft to forward an existing message, in either JSON or MIME format. When using JSON format, you can:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- Specify either the toRecipients parameter or the toRecipients property of the message parameter. Specifying both or specifying neither will return an HTTP 400 Bad Request error.
- Update the draft later to add content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, forward a message in a single operation.
  */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/createForward']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/createForward']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/createForward']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/createForward',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const createReply = {
  /**
  * `POST /me/messages/{message-id}/createReply`
  *
  * Create a draft to reply to the sender of a message in either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If replyTo is specified in the original message, per Internet Message Format (RFC 2822), you should send the reply to the recipients in replyTo, and not the recipients in from.
- You can update the draft later to add reply content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, reply to a message in a single operation.
  */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/createReply']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/createReply']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/createReply']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/createReply',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const createReplyAll = {
  /**
  * `POST /me/messages/{message-id}/createReplyAll`
  *
  * Create a draft to reply to the sender and all recipients of a message in either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), you should send the reply to the recipients in the replyTo and toRecipients properties, and not the recipients in the from and toRecipients properties.
- You can update the draft message later. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, reply-all to a message in a single action.
  */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/createReplyAll']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/createReplyAll']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/createReplyAll']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/createReplyAll',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const extensions = {
  /**
   * `GET /me/messages/{message-id}/extensions`
   *
   * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
   */
  list: function list(
    params?: IEndpoints['GET /me/messages/{message-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/messages/{message-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['message-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/messages/{message-id}/extensions`
   *
   * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/extensions']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/extensions',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/messages/{message-id}/extensions/{extension-id}`
   *
   * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
   */
  get: function get(
    params?: IEndpoints['GET /me/messages/{message-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/messages/{message-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/messages/{message-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['message-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/messages/{message-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/messages/{message-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/messages/{message-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/messages/{message-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/messages/{message-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['message-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/messages/{message-id}/extensions/{extension-id}`
   *
   * Delete an open extension (openTypeExtension object) from the specified instance of a resource.  For the list of resources that support open extensions, see the table in the Permissions section.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/messages/{message-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/messages/{message-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/messages/{message-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['message-id', 'extension-id'],
      },
      params,
    };
  },
};

export const forward = {
  /**
  * `POST /me/messages/{message-id}/forward`
  *
  * Forward a message using either JSON or MIME format. When using JSON format, you can:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- Specify either the toRecipients parameter or the toRecipients property of the message parameter. Specifying both or specifying neither will return an HTTP 400 Bad Request error. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to forward a message, and send it later.
  */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/forward']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/forward']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/forward']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/forward',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const markAsJunk = {
  /**
   * `POST /me/messages/{message-id}/markAsJunk`
   *
   * Mark a message as junk. This API adds the sender to the list of blocked senders and moves the message to the Junk Email folder, when moveToJunk is true.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/markAsJunk']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/markAsJunk']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/markAsJunk']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/markAsJunk',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const markAsNotJunk = {
  /**
   * `POST /me/messages/{message-id}/markAsNotJunk`
   *
   * Mark a message as not junk. This API removes the sender from the list of blocked senders and moves the message to the Inbox folder, when moveToInbox is true.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/markAsNotJunk']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/markAsNotJunk']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/markAsNotJunk']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/markAsNotJunk',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const mentions = {
  /**
   * `GET /me/messages/{message-id}/mentions`
   *
   * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
   */
  list: function list(
    params?: IEndpoints['GET /me/messages/{message-id}/mentions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/mentions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/messages/{message-id}/mentions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['message-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/messages/{message-id}/mentions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/mentions']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/mentions']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/mentions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/mentions',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/messages/{message-id}/mentions/{mention-id}`
   *
   * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
   */
  get: function get(
    params?: IEndpoints['GET /me/messages/{message-id}/mentions/{mention-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/messages/{message-id}/mentions/{mention-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/messages/{message-id}/mentions/{mention-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['message-id', 'mention-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /me/messages/{message-id}/mentions/{mention-id}`
   *
   * Delete a message in the specified user&#x27;s mailbox, or delete a relationship of the message. For example, you can delete a specific @-mention of the specified user in the message.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/messages/{message-id}/mentions/{mention-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/messages/{message-id}/mentions/{mention-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/messages/{message-id}/mentions/{mention-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['message-id', 'mention-id'],
      },
      params,
    };
  },
};

export const move = {
  /**
   * `POST /me/messages/{message-id}/move`
   *
   * Move a message to another folder within the specified user&#x27;s mailbox. This creates a new copy of the message in the destination folder and removes the original message.
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/move']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/move']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/move']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/move',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /me/messages/{message-id}/permanentDelete`
   *
   * Permanently delete a message and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /me/messages/{message-id}/permanentDelete']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/permanentDelete']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/permanentDelete',
      paramDefs: {
        path: ['message-id'],
      },
      params,
    };
  },
};

export const reply = {
  /**
  * `POST /me/messages/{message-id}/reply`
  *
  * Reply to the sender of a message using either JSON or MIME format. When using JSON format:
* Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
* If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), send the reply to the recipients in replyTo and not the recipient in the from property. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to reply to a message, and send it later.
  */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/reply']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/reply']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/reply']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/reply',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const replyAll = {
  /**
  * `POST /me/messages/{message-id}/replyAll`
  *
  * Reply to all recipients of a message using either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), send the reply to the recipients in replyTo and not the recipient in the from property. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to reply-all to a message, and send it later.
  */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/replyAll']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/replyAll']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/replyAll']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/replyAll',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const reportMessage = {
  /**
   * `POST /me/messages/{message-id}/reportMessage`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/reportMessage']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/reportMessage']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/reportMessage']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/reportMessage',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};

export const send = {
  /**
   * `POST /me/messages/{message-id}/send`
   *
   * Send an existing draft message. The draft message can be a new message draft, reply draft, reply-all draft, or a forward draft. This method saves the message in the Sent Items folder. Alternatively, send a new message in a single operation.
   */
  create: function create(
    params?: IEndpoints['POST /me/messages/{message-id}/send']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/send']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/send',
      paramDefs: {
        path: ['message-id'],
      },
      params,
    };
  },
};

export const unsubscribe = {
  /**
   * `POST /me/messages/{message-id}/unsubscribe`
   *
   * Submits an email request on behalf of the signed-in user to unsubscribe from an email distribution list. Uses the information in the List-Unsubscribe header. Message senders can use mailing lists in a user-friendly way by including an option for recipients to opt out. They can do so by specifying the List-Unsubscribe header in each message following RFC-2369. Note In particular, for the unsubscribe action to work, the sender must specify mailto: and not URL-based unsubscribe information. Setting that header would also set the unsubscribeEnabled property of the message instance to true, and the unsubscribeData property to the header data. If the unsubscribeEnabled property of a message is true, you can use the unsubscribe action to unsubscribe the user from similar future messages as managed by the message sender. A successful unsubscribe action moves the message to the Deleted Items folder. The actual exclusion of the user from future mail distribution is managed by the sender.
   */
  create: function create(
    params?: IEndpoints['POST /me/messages/{message-id}/unsubscribe']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/unsubscribe']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/unsubscribe',
      paramDefs: {
        path: ['message-id'],
      },
      params,
    };
  },
};
