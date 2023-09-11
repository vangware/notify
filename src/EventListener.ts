import type { Function, Single, Unary } from "@vangware/types";

/**
 * Event listener unary function.
 *
 * @see [Unary](https://types.vangware.com/types/Unary.html)
 */
export type EventListener<Data> = Single<Data> extends Single<never>
	? Function<[], void>
	: Unary<Data, void>;
