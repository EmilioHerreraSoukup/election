import {
  calculateDecisiveAge,
  calculateElectionWinner,
  Candidates,
} from "./election";
import { voters } from "./voters";

describe("Calculations", function () {
  it("should compute election winner", function () {
    expect(calculateElectionWinner(voters)).toEqual({
      votesForJohn: 44,
      votesForMike: 58,
      totalVotes: 102,
      winner: Candidates.B,
    });
  });

  it("should compute most common age", function () {
    expect(calculateDecisiveAge(voters)).toEqual({ age: 60, count: 8 });
  });
});
