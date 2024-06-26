import { HttpClientSingleton } from "./http-client";

let consoleMock = vi.fn();

describe(HttpClientSingleton.name, () => {
  let iot: HttpClientSingleton;

  beforeEach(() => {
    iot = HttpClientSingleton.getInstance();
    vi.spyOn(global.console, "log").mockImplementation(consoleMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should request method to be a function", async () => {
    expect(iot.request).toBeInstanceOf(Function)
  });
});
