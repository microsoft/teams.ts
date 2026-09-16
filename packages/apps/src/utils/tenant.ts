import { Activity } from '@microsoft/teams.api';

/**
 * The tenant an activity belongs to, read from the conversation first and from channel data second.
 *
 * Reading only `conversation.tenantId` silently misses the ones that arrive as `channelData.tenant` depending on the activity. An empty tenant is treated as absent.
 */
export function extractTenantId(activity: Activity): string | undefined {
  return activity.conversation?.tenantId || activity.channelData?.tenant?.id || undefined;
}
