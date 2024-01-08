import { IncomingMessage } from "node:http";
import type { Context } from "hono";

const getKeySymbol = (object: object, symbolName: string) =>
  Object.getOwnPropertySymbols(object).find((s) => s.toString() === symbolName);

const isIncomingMessage = (object: object): object is IncomingMessage => {
  return object instanceof IncomingMessage;
};

export const getRawIncomingMessage = (c: Context): IncomingMessage => {
  const incomingKey = getKeySymbol(c.req.raw, "Symbol(incomingKey)");
  // @ts-ignore
  const incomingMessage = c.req.raw[incomingKey!];
  if (isIncomingMessage(incomingMessage)) {
    return incomingMessage;
  }
  throw new Error("Could not get raw incoming message");
};
