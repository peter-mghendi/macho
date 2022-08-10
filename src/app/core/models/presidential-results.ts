import {ConstituencyPresidential, CountyPresidentialResults, NationalPresidentialResults} from ".";

export interface PresidentialResults {
  national: NationalPresidentialResults;
  county: CountyPresidentialResults;
  constituency: ConstituencyPresidential;
}
