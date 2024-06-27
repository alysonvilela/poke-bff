import { BadRequest } from "./bad-request";

describe(BadRequest.name, () => {
  let iot: BadRequest;

  beforeEach(() => {
    iot = new BadRequest('')
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should have http code", async () => {
    expect(iot.code).toBe(400)
  });
});
