using Microsoft.Teams.Plugins.AspNetCore.DevTools.Extensions;
using Microsoft.Teams.Plugins.AspNetCore.Extensions;

using Echo;

var builder = WebApplication.CreateBuilder(args);
builder.AddTeams();
builder.AddTeamsDevTools();
builder.Services.AddTransient<MainController>();

var app = builder.Build();
app.UseTeams();
app.Run();
