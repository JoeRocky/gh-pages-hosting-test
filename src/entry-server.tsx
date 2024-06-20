// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={import.meta.env.SERVER_BASE_URL + "/icon.svg"} />
          {assets}
        </head>
        <body>
          <div id="app" class="dark">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));