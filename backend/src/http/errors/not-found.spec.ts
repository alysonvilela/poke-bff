import { NotFound } from "./not-found";

describe(NotFound.name, () => {
  let iot: NotFound;

  beforeEach(() => {
    iot = new NotFound('')
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should have http code", async () => {
    expect(iot.code).toBe(404)
  });
});
