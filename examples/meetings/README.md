# Agent: Meetings

This sample demonstrates how to handle real-time updates for meeting events and meeting participant events.

## Run

```bash
$: npm run dev
```

## Manifest Requirements

There are a few requirements in the Teams app manifest (manifest.json) to support these events.

1) The `scopes` section must include `team`, and `groupChat`:

```csharp
 "bots": [
        {
            "botId": "",
            "scopes": [
                "team",
                "personal",
                "groupChat"
            ],
            "isNotificationOnly": false
        }
    ]
```

2) In the authorization section, make sure to specify the following resource-specific permissions:

```csharp
 "authorization":{
        "permissions":{
            "resourceSpecific":[
                {
                    "name":"OnlineMeetingParticipant.Read.Chat",
                    "type":"Application"
                },
                {
                    "name":"ChannelMeeting.ReadBasic.Group",
                    "type":"Application"
                },
                {
                    "name":"OnlineMeeting.ReadBasic.Chat",
                    "type":"Application"
                }
                ]
            }
        }
```

### Teams Developer Portal: Bot Configuration

For your Bot, make sure the [Meeting Event Subscriptions](https://learn.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/meeting-apps-apis?branch=pr-en-us-8455&tabs=channel-meeting%2Cguest-user%2Cone-on-one-call%2Cdotnet3%2Cdotnet2%2Cdotnet%2Cparticipant-join-event%2Cparticipant-join-event1#receive-meeting-participant-events) are checked.
This enables you to receive the Meeting Participant events.