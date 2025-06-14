export function isNumber(num: unknown): boolean {
	if (typeof num === "number") {
		return num - num === 0;
	}
	if (typeof num === "string" && num.trim() !== "") {
		return Number.isFinite(+num);
	}
	return false;
}
