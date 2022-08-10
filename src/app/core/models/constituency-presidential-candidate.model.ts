export interface ConstituencyPresidentialCandidate {
  PRESIDENT_ID: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  SMALL_IMAGE: string;
  PARTY_INITIALS: string;
  COUNTY_NO: string;
  CONSTITUENCY_NO: string;
  CANDIDATE_VOTES?: number;
  TOTAL_PRESIDENT_CONSTITUENCY_VOTES_CAST: number;
  COLOURCODES: string;
  CONSTITUENCY_PERCENTAGE: number;
  WINNING: boolean;
}
