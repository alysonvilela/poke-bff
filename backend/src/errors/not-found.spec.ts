import { NotFound } from "./not-found";

let consoleMock = vi.fn();

describe(NotFound.name, () => {
  let iot: NotFound;

  beforeEach(() => {
    iot = new NotFound('')
    vi.spyOn(global.console, "log").mockImplementation(consoleMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should have http code", async () => {
    expect(iot.code).toBe(404)
  });
});
