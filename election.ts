export type Voter = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female";
  votedFor: "A" | "B";
};

export enum Candidates {
  A = "John Doe",
  B = "Mike Fake",
}

export type Result = {
  votesForJohn: number;
  votesForMike: number;
  totalVotes: number;
  winner: Candidates;
};

export type DecisiveAge = {
  age: number;
  count: number;
};

export function calculateElectionWinner(voters: Voter[]): Result {
  const results = {
    votesForJohn: 0,
    votesForMike: 0,
    totalVotes: voters.length,
    winner: Candidates.A,
  };

  voters.map((item) => {
    if (item.votedFor === "A") {
      results.votesForJohn += 1;
    } else {
      results.votesForMike += 1;
    }
  });

  if (results.votesForMike > results.votesForJohn) {
    results.winner = Candidates.B;
  }

  // RETURN: 
  // {
  //   votesForJohn: ??,
  //   votesForMike: ??,
  //   totalVotes: ??,
  //   winner: ??,
  // };


}

export function calculateDecisiveAge(voters: Voter[]): DecisiveAge {
  let most = { age: 0, count: 0 };

  voters.reduce((acc, item) => {
    if (!acc[item.age]) {
      acc[item.age] = 1;
    }

    if (acc[item.age]) {
      acc[item.age] += 1;

      if (acc[item.age] > most.count) {
        most.age = item.age;
        most.count = acc[item.age];
      }
    }

    return { ...acc };
  }, {});

  return most;
  
  // RETURN: { age: ??, count: ?? };

}
