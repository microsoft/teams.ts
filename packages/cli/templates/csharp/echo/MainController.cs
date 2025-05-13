using Microsoft.Teams.Api.Activities;
using Microsoft.Teams.Apps;
using Microsoft.Teams.Apps.Annotations;
using Microsoft.Teams.Apps.Routing;

namespace Echo;

[ActivityController("main")]
public class MainController
{
    [Message]
    public async Task OnMessage([Context] MessageActivity activity, [Context] IContext.Client client)
    {
        await client.Send($"you said \"{activity.Text}\"");
    }
}
