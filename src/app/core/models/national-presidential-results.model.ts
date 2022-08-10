import {NationalPresidentialCandidate} from ".";

export interface NationalPresidentialResults {
  candidates: NationalPresidentialCandidate[];
  total_votes_cast: number;
  total_constituencies_reporting: number;
}
