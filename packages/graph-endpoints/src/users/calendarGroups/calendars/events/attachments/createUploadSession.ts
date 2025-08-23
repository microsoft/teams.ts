import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession`
 *
 * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to the specified Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that&#x27;s smaller than 3 MB, do a POST operation on the attachments navigation property of the Outlook item; see how to do this for a message or for an event. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. Request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload. The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/createUploadSession',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
