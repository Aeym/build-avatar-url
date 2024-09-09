import { API_URL } from "../src/config";
import { buildAvatarUrl } from "../src/buildAvatarUrl";

describe("buildAvatarUrl", () => {
	test('should return empty string if context contains "default"', () => {
		expect(buildAvatarUrl("default", "John", "Doe")).toBe("");
		expect(buildAvatarUrl("something default", "John", "Doe")).toBe("");
	});

	test("should return valid URL if context is null or undefined", () => {
		expect(buildAvatarUrl(null, "John", "Doe")).toBe(`${API_URL}J+D`);
		expect(buildAvatarUrl(undefined, "John", "Doe")).toBe(`${API_URL}J+D`);
	});

	test("should return avatar URL with initials for valid firstName and lastName", () => {
		expect(buildAvatarUrl("aa", "John", "Doe")).toBe(`${API_URL}J+D`);
	});

	test("should handle empty firstName and valid lastName", () => {
		expect(buildAvatarUrl("aa", "", "Doe")).toBe(`${API_URL}+D`);
	});

	test("should handle empty firstName and lastName", () => {
		expect(buildAvatarUrl("aa", "", "")).toBe(`${API_URL}+`);
	});

	test("should trim spaces around firstName and lastName", () => {
		expect(buildAvatarUrl("aa", " John ", " Doe ")).toBe(`${API_URL}J+D`);
	});

	test("should handle spaces only in firstName and lastName", () => {
		expect(buildAvatarUrl("aa", "   ", "   ")).toBe(`${API_URL}+`);
	});

	test("should handle null or undefined firstName and lastName", () => {
		expect(buildAvatarUrl("aa", null, undefined)).toBe(`${API_URL}+`);
	});

	test("should handle valid firstName without lastName", () => {
		expect(buildAvatarUrl("aa", "John", "")).toBe(`${API_URL}J+`);
	});

	test("should return a valid URL with empty initials if all inputs are missing", () => {
		expect(buildAvatarUrl(null, null, null)).toBe(`${API_URL}+`);
		expect(buildAvatarUrl(undefined, undefined, undefined)).toBe(`${API_URL}+`);
	});
});
