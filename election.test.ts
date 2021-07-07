import {
  // calculateMostVotingAge,
  // calculateElectionWinner,
  filterFemaleVoters,
} from "./election";
import { femaleVoters, voters } from "./voters";

describe("Election calculations", function () {
  //
  it("should filter female voters", function () {
    expect(filterFemaleVoters(voters)).toEqual(femaleVoters);
  });

  // it("should compute most common voting age", function () {
  //   expect(calculateMostVotingAge(voters)).toEqual({ age: 60, count: 7 });
  // });
  // it("should compute election winner", function () {
  //   expect(calculateElectionWinner(voters)).toEqual({
  //     votesForJohn: 44,
  //     votesForMike: 58,
  //     totalVotes: 102,
  //     winner: "Mike Fake",
  //   });
  // });
});
