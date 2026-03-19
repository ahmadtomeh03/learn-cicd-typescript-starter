import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when no authorization header", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header has wrong format", () => {
    expect(getAPIKey({ authorization: "Bearer token123" })).toBeNull();
  });

  test("returns null when authorization header has no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns API key when authorization header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey mySecretKey" })).toBe("mySecretKey");
  });
});
