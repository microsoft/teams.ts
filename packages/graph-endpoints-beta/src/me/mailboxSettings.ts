import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/mailboxSettings': Operation<'/me/mailboxSettings', 'get'>;
  'PATCH /me/mailboxSettings': Operation<'/me/mailboxSettings', 'patch'>;
}

/**
 * `GET /me/mailboxSettings`
 *
 * Get the user&#x27;s mailboxSettings. You can view all mailbox settings, or get specific settings. Users can set the following settings for their mailboxes through an Outlook client: Users can set their preferred date and time formats using Outlook on the web. Users can choose one of the supported short date or short time formats. This GET operation returns the format the user has chosen. Users can set the time zone they prefer on any Outlook client, by choosing from the supported time zones that their administrator has set up for their mailbox server. The administrator can set up time zones in the Windows time zone format or  Internet Assigned Numbers Authority (IANA) time zone (also known as Olson time zone) format. The Windows format is the default. This GET operation returns the user&#x27;s preferred time zone in the format that the administrator has set up. If you want that time zone to be in a specific format (Windows or IANA), you can first update the preferred time zone in that format as a mailbox setting. Subsequently you will be able to get the time zone in that format. Alternatively, you can manage the format conversion separately in your app.
 */
export function list(
  params?: IEndpoints['GET /me/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailboxSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mailboxSettings`
 *
 * Enable, configure, or disable one or more of the following settings as part of a user&#x27;s mailboxSettings: When updating the preferred date or time format for a user, specify it in respectively, the short date or short time format. When updating the preferred time zone for a user, specify it in the Windows or Internet Assigned Numbers Authority (IANA) time zone (also known as Olson time zone) format. You can also further customize the time zone as shown in example 2 below.
 */
export function update(
  body: IEndpoints['PATCH /me/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /me/mailboxSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/mailboxSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mailboxSettings',
    paramDefs: [],
    params,
    body,
  };
}
