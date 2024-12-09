const caesarCipher = require("./caesarCipher");


test("shifts lowercase letters correctly", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifts uppercase letters correctly", () => {
	expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("preserves case of letters", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("keeps punctuation and spaces unchanged", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles negative shifts", () => {
	expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("handles shifts larger than 26", () => {
	expect(caesarCipher("abc", 29)).toBe("def");
});