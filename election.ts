type Cadidates = "A" | "B";

interface Voter {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  votedFor: Cadidates;
}
interface FemaleVoter {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  votedFor: Cadidates;
}

interface Result {
  votesForJohn: number;
  votesForMike: number;
  totalVotes: number;
  winner: "John Doe" | "Mike Fake";
}

interface MostVotingAge {
  ages: number;
  count: number;
}

export function filterFemaleVoters(voters: Voter[]): FemaleVoter[] {
  // return FemaleVoter[];
}

// export function calculateMostVotingAge(voters: Voter[]): MostVotingAge {
//   // The age that voted the most
//   // RETURN: { age: ??, count: ?? };
// }

// export function calculateElectionWinner(voters: Voter[]): Result {
//   // Consider that A = "John Doe", B = "Mike Fake",
//   // RETURN:
//   // {
//   //   votesForJohn: ??,
//   //   votesForMike: ??,
//   //   totalVotes: ??,
//   //   winner: ??,
//   // };
// }
