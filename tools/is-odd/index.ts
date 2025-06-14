import { isNumber } from "../is-number";

export function isOdd(value: number): boolean {
	const n = Math.abs(value);
	if (!isNumber(n)) {
		throw new TypeError("expected a number");
	}
	if (!Number.isInteger(n)) {
		throw new Error("expected an integer");
	}
	if (!Number.isSafeInteger(n)) {
		throw new Error("value exceeds maximum safe integer");
	}
	return n % 2 === 1;
}
