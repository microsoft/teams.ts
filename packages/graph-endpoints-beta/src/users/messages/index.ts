export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/messages/{message-id}': Operation<
    '/users/{user-id}/messages/{message-id}',
    'delete'
  >;
  'GET /users/{user-id}/messages': Operation<'/users/{user-id}/messages', 'get'>;
  'GET /users/{user-id}/messages/{message-id}': Operation<
    '/users/{user-id}/messages/{message-id}',
    'get'
  >;
  'PATCH /users/{user-id}/messages/{message-id}': Operation<
    '/users/{user-id}/messages/{message-id}',
    'patch'
  >;
  'POST /users/{user-id}/messages': Operation<'/users/{user-id}/messages', 'post'>;
  'POST /users/{user-id}/messages/{message-id}/copy': Operation<
    '/users/{user-id}/messages/{message-id}/copy',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/createForward': Operation<
    '/users/{user-id}/messages/{message-id}/createForward',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/createReply': Operation<
    '/users/{user-id}/messages/{message-id}/createReply',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/createReplyAll': Operation<
    '/users/{user-id}/messages/{message-id}/createReplyAll',
    'post'
  >;
  'GET /users/{user-id}/messages/{message-id}/extensions': Operation<
    '/users/{user-id}/messages/{message-id}/extensions',
    'get'
  >;
  'POST /users/{user-id}/messages/{message-id}/extensions': Operation<
    '/users/{user-id}/messages/{message-id}/extensions',
    'post'
  >;
  'GET /users/{user-id}/messages/{message-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/messages/{message-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/messages/{message-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/messages/{message-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/messages/{message-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/messages/{message-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /users/{user-id}/messages/{message-id}/forward': Operation<
    '/users/{user-id}/messages/{message-id}/forward',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/markAsJunk': Operation<
    '/users/{user-id}/messages/{message-id}/markAsJunk',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/markAsNotJunk': Operation<
    '/users/{user-id}/messages/{message-id}/markAsNotJunk',
    'post'
  >;
  'GET /users/{user-id}/messages/{message-id}/mentions': Operation<
    '/users/{user-id}/messages/{message-id}/mentions',
    'get'
  >;
  'POST /users/{user-id}/messages/{message-id}/mentions': Operation<
    '/users/{user-id}/messages/{message-id}/mentions',
    'post'
  >;
  'GET /users/{user-id}/messages/{message-id}/mentions/{mention-id}': Operation<
    '/users/{user-id}/messages/{message-id}/mentions/{mention-id}',
    'get'
  >;
  'DELETE /users/{user-id}/messages/{message-id}/mentions/{mention-id}': Operation<
    '/users/{user-id}/messages/{message-id}/mentions/{mention-id}',
    'delete'
  >;
  'POST /users/{user-id}/messages/{message-id}/move': Operation<
    '/users/{user-id}/messages/{message-id}/move',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/permanentDelete': Operation<
    '/users/{user-id}/messages/{message-id}/permanentDelete',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/reply': Operation<
    '/users/{user-id}/messages/{message-id}/reply',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/replyAll': Operation<
    '/users/{user-id}/messages/{message-id}/replyAll',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/reportMessage': Operation<
    '/users/{user-id}/messages/{message-id}/reportMessage',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/send': Operation<
    '/users/{user-id}/messages/{message-id}/send',
    'post'
  >;
  'POST /users/{user-id}/messages/{message-id}/unsubscribe': Operation<
    '/users/{user-id}/messages/{message-id}/unsubscribe',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/messages/{message-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/messages/{message-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'message-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/messages`
 *
 * The messages in a mailbox or folder. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/messages',
    paramDefs: {
      path: ['user-id'],
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
 * `GET /users/{user-id}/messages/{message-id}`
 *
 * The messages in a mailbox or folder. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/messages/{message-id}',
    paramDefs: {
      path: ['user-id', 'message-id'],
      query: ['includeHiddenMessages', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/messages/{message-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/messages/{message-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/messages/{message-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/messages/{message-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/messages/{message-id}',
    paramDefs: {
      path: ['user-id', 'message-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/messages',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const copy = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/copy`
   *
   * Copy a message to a folder within the user&#x27;s mailbox.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/copy']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/copy']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/messages/{message-id}/copy']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/copy',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const createForward = {
  /**
  * `POST /users/{user-id}/messages/{message-id}/createForward`
  *
  * Create a draft to forward an existing message, in either JSON or MIME format. When using JSON format, you can:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- Specify either the toRecipients parameter or the toRecipients property of the message parameter. Specifying both or specifying neither will return an HTTP 400 Bad Request error.
- Update the draft later to add content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, forward a message in a single operation.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/createForward']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/createForward']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/createForward']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/createForward',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const createReply = {
  /**
  * `POST /users/{user-id}/messages/{message-id}/createReply`
  *
  * Create a draft to reply to the sender of a message in either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If replyTo is specified in the original message, per Internet Message Format (RFC 2822), you should send the reply to the recipients in replyTo, and not the recipients in from.
- You can update the draft later to add reply content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, reply to a message in a single operation.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/createReply']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/createReply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/createReply']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/createReply',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const createReplyAll = {
  /**
  * `POST /users/{user-id}/messages/{message-id}/createReplyAll`
  *
  * Create a draft to reply to the sender and all recipients of a message in either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), you should send the reply to the recipients in the replyTo and toRecipients properties, and not the recipients in the from and toRecipients properties.
- You can update the draft message later. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, reply-all to a message in a single action.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/createReplyAll']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/createReplyAll']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/createReplyAll']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/createReplyAll',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const extensions = {
  /**
   * `GET /users/{user-id}/messages/{message-id}/extensions`
   *
   * The collection of open extensions defined for the message. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/messages/{message-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/messages/{message-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/messages/{message-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'message-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/messages/{message-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/extensions']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/extensions',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/messages/{message-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the message. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/messages/{message-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'message-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/messages/{message-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/messages/{message-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['user-id', 'message-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/messages/{message-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/messages/{message-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/messages/{message-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'message-id', 'extension-id'],
      },
      params,
    };
  },
};

export const forward = {
  /**
  * `POST /users/{user-id}/messages/{message-id}/forward`
  *
  * Forward a message using either JSON or MIME format. When using JSON format, you can:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- Specify either the toRecipients parameter or the toRecipients property of the message parameter. Specifying both or specifying neither will return an HTTP 400 Bad Request error. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to forward a message, and send it later.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/forward']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/forward']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/forward']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/forward',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const markAsJunk = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/markAsJunk`
   *
   * Mark a message as junk. This API adds the sender to the list of blocked senders and moves the message to the Junk Email folder, when moveToJunk is true.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsJunk']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsJunk']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsJunk']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/markAsJunk',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const markAsNotJunk = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/markAsNotJunk`
   *
   * Mark a message as not junk. This API removes the sender from the list of blocked senders and moves the message to the Inbox folder, when moveToInbox is true.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsNotJunk']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsNotJunk']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/markAsNotJunk']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/markAsNotJunk',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const mentions = {
  /**
   * `GET /users/{user-id}/messages/{message-id}/mentions`
   *
   * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/messages/{message-id}/mentions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/messages/{message-id}/mentions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/messages/{message-id}/mentions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'message-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/messages/{message-id}/mentions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/mentions']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/mentions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/mentions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/mentions',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/messages/{message-id}/mentions/{mention-id}`
   *
   * A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/messages/{message-id}/mentions/{mention-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/messages/{message-id}/mentions/{mention-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/messages/{message-id}/mentions/{mention-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'message-id', 'mention-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /users/{user-id}/messages/{message-id}/mentions/{mention-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/messages/{message-id}/mentions/{mention-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/messages/{message-id}/mentions/{mention-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/messages/{message-id}/mentions/{mention-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'message-id', 'mention-id'],
      },
      params,
    };
  },
};

export const move = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/move`
   *
   * Move a message to another folder within the specified user&#x27;s mailbox. This creates a new copy of the message in the destination folder and removes the original message.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/move']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/move']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/messages/{message-id}/move']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/move',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/permanentDelete`
   *
   * Permanently delete a message and place it in the Purges folder in the dumpster in the user&#x27;s mailbox. Email clients such as Outlook or Outlook on the web can&#x27;t access permanently deleted items. Unless there&#x27;s a hold set on the mailbox, the items are permanently deleted after a set period of time. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/permanentDelete',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
    };
  },
};

export const reply = {
  /**
  * `POST /users/{user-id}/messages/{message-id}/reply`
  *
  * Reply to the sender of a message using either JSON or MIME format. When using JSON format:
* Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
* If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), send the reply to the recipients in replyTo and not the recipient in the from property. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to reply to a message, and send it later.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/reply']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/reply']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/messages/{message-id}/reply']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/reply',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const replyAll = {
  /**
  * `POST /users/{user-id}/messages/{message-id}/replyAll`
  *
  * Reply to all recipients of a message using either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), send the reply to the recipients in replyTo and not the recipient in the from property. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to reply-all to a message, and send it later.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/replyAll']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/replyAll']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/replyAll']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/replyAll',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const reportMessage = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/reportMessage`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/messages/{message-id}/reportMessage']['body'],
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/reportMessage']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/reportMessage']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/reportMessage',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
      body,
    };
  },
};

export const send = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/send`
   *
   * Send an existing draft message. The draft message can be a new message draft, reply draft, reply-all draft, or a forward draft. This method saves the message in the Sent Items folder. Alternatively, send a new message in a single operation.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/send']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/messages/{message-id}/send']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/send',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
    };
  },
};

export const unsubscribe = {
  /**
   * `POST /users/{user-id}/messages/{message-id}/unsubscribe`
   *
   * Submits an email request on behalf of the signed-in user to unsubscribe from an email distribution list. Uses the information in the List-Unsubscribe header. Message senders can use mailing lists in a user-friendly way by including an option for recipients to opt out. They can do so by specifying the List-Unsubscribe header in each message following RFC-2369. Note In particular, for the unsubscribe action to work, the sender must specify mailto: and not URL-based unsubscribe information. Setting that header would also set the unsubscribeEnabled property of the message instance to true, and the unsubscribeData property to the header data. If the unsubscribeEnabled property of a message is true, you can use the unsubscribe action to unsubscribe the user from similar future messages as managed by the message sender. A successful unsubscribe action moves the message to the Deleted Items folder. The actual exclusion of the user from future mail distribution is managed by the sender.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/unsubscribe']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/messages/{message-id}/unsubscribe']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/messages/{message-id}/unsubscribe',
      paramDefs: {
        path: ['user-id', 'message-id'],
      },
      params,
    };
  },
};
