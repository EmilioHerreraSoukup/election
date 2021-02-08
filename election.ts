// A = "John Doe",
// B = "Mike Fake",

interface Voter {};

interface Result {}

interface MostVotingAge {}

export function filterFemaleVoters(voters: Voter[]): Voter[] {
  // RETURN Voter[]
}

export function calculateMostVotingAge(voters: Voter[]): MostVotingAge {
  // The age that voted the most
  // RETURN: { age: ??, count: ?? };
}

export function calculateElectionWinner(voters: Voter[]): Result {
  // RETURN:
  // {
  //   votesForJohn: ??,
  //   votesForMike: ??,
  //   totalVotes: ??,
  //   winner: ??,
  // };
}