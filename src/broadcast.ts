import type { EventRegistry } from "./EventRegistry.js";
import type { EventTypeDictionary } from "./EventTypeDictionary.js";
import { emit } from "./emit.js";
import { on } from "./on.js";

/**
 * Creates a new "broadcast" object, which has `emit` and `on` with a shared
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const broadcast = broadcast<{ event: string }>();
 * const unsubscribe = broadcast.on("event")(console.log);
 * broadcast.emit("event")("Hello world"); // Logs "Hello world"
 * unsubscribe();
 * broadcast.emit("event")("Nope"); // Nothing happens
 * ```
 * @param eventRegistry Optional record of event names mapped to an array of
 * listeners.
 * @returns Object with `emit` and `on` functions.
 */
export const broadcast = <Events extends EventTypeDictionary>(
	eventRegistry: EventRegistry<Events> = {},
) => ({ emit: emit(eventRegistry), on: on(eventRegistry) });
