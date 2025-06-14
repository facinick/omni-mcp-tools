import { describe, expect, it } from "bun:test";
import { isNumber } from "./index";

describe("isNumber", () => {
	describe("should return true for valid numbers", () => {
		const validNumbers = [
			0xff,
			5e3,
			0,
			0.1,
			-0.1,
			-1.1,
			37,
			3.14,
			1,
			1.1,
			10,
			10.1,
			100,
			-100,
			"0.1",
			"-0.1",
			"-1.1",
			"0",
			"012",
			"0xff",
			"1",
			"1.1",
			"10",
			"10.10",
			"100",
			"5e3",
			"   56\r\n  ",
			Math.LN2,
			Number.parseInt("012"),
			Number.parseFloat("012"),
			Math.abs(1),
			Math.acos(1),
			Math.asin(1),
			Math.atan(1),
			Math.atan2(1, 2),
			Math.ceil(1),
			Math.cos(1),
			Math.E,
			Math.exp(1),
			Math.floor(1),
			Math.LN10,
			Math.LN2,
			Math.log(1),
			Math.LOG10E,
			Math.LOG2E,
			Math.max(1, 2),
			Math.min(1, 2),
			Math.PI,
			1 ** 2,
			5 ** 5,
			Math.random(),
			Math.round(1),
			Math.sin(1),
			Math.sqrt(1),
			Math.SQRT1_2,
			Math.SQRT2,
			Math.tan(1),
			Number.MAX_VALUE,
			Number.MIN_VALUE,
			"0.0",
			"0x0",
			"0e+5",
			"000",
			"0.0e-5",
			"0.0E5",
			+"",
			+1,
			+3.14,
			+37,
			+5,
			+[],
			+false,
			+Math.LN2,
			+true,
			+new Date(),
		];

		for (const num of validNumbers) {
			it(`should return true for ${JSON.stringify(num)}`, () => {
				expect(isNumber(num)).toBe(true);
			});
		}
	});

	describe("should return false for invalid numbers", () => {
		const invalidNumbers = [
			"   ",
			"\r\n\t",
			"",
			"3a",
			"abc",
			"false",
			"null",
			"true",
			"undefined",
			+"abc",
			+/foo/,
			+[1, 2, 4],
			Number.POSITIVE_INFINITY,
			+Math.sin,
			+Number.NaN,
			+{ a: 1 },
			+{},
			/foo/,
			[1, 2, 3],
			[1],
			[],
			true,
			false,
			+(() => {}),
			() => {},
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			Math.sin,
			Number.NaN,
			new Date(),
			null,
			undefined,
			{},
		];

		for (const num of invalidNumbers) {
			it(`should return false for ${JSON.stringify(num)}`, () => {
				expect(isNumber(num)).toBe(false);
			});
		}
	});
});
