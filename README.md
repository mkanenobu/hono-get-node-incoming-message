# hono-get-node-incoming-message

Usage

```typescript
import { getIncomingMessage } from "hono-get-node-incoming-message"; 
import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => {
  const rawIncomingMessage = getRawIncomingMessage(c);
  
  const ipAddress = rawIncomingMessage.socket.remoteAddress;
  return c.text(ipAddress ?? "unknown");
});

serve({
  fetch: app.fetch,
});
```
