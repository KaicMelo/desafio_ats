import { literals } from './dictionary';

interface LiteralObject {
  pt: string;
  en: string;
  es: string;
}

const defaultPt: any = {};
const defaultEn: any = {};
const defaultEs: any = {};

Object.keys(literals).forEach((literalKey) => {
  const { pt, es, en }: LiteralObject = literals[literalKey];
  defaultPt[literalKey] = pt;
  defaultEn[literalKey] = en;
  defaultEs[literalKey] = es;
});

/* generals are from backoffice v1 */
export const dictionaries: any = {
  pt: defaultPt,
  en: defaultEn,
  es: defaultEs,
};

export default class LiteralsFactory {
  static languageLocalization = navigator.language.toLowerCase();
  static language = navigator.language.split('-')[0].toLowerCase();

  static getLiterals(): any {
    const dic =
      dictionaries[this.languageLocalization] ||
      dictionaries[this.language] ||
      dictionaries.pt;
    return dic;
  }
}

export interface RawLiterals {
  candidateApplies: LiteralObject;
  candidateAppliesShort: LiteralObject;
  candidate: LiteralObject;
  vacancies: LiteralObject;
  vacancy: LiteralObject;
  nominations: LiteralObject;
  resume: LiteralObject;
  atsChallenge: LiteralObject;
  candidateCanApplyForVacancy: LiteralObject;
  noDataFound: LiteralObject;
  deleteApplication: LiteralObject;
  selectTheVacancy: LiteralObject;
  SelectTheCandidate: LiteralObject;
  apply: LiteralObject;
  savedSuccessfully: LiteralObject;
  alreadyRegisteredForThisJob: LiteralObject;
  wouldLikeToDeleteCandidacy: LiteralObject;
  toDelete: LiteralObject;
  toCancel: LiteralObject;
  deleted: LiteralObject;
  create: LiteralObject;
  candidateNumber: LiteralObject;
  toEdit: LiteralObject;
  registerNewCandidate: LiteralObject;
  changeCandidate: LiteralObject;
  wouldLikeToDeleteCandidate: LiteralObject;
  candidateName: LiteralObject;
  toSave: LiteralObject;
  close: LiteralObject;
  fillInTheFieldCorrectly: LiteralObject;
  listOfCandidatesApplyingForVacancy: LiteralObject;
  groupedByCandidates: LiteralObject;
  haveCV: LiteralObject;
  dontHaveCV: LiteralObject;
  registerCV: LiteralObject;
  viewCV: LiteralObject;
  deleteCV: LiteralObject;
  youAlreadyHaveCV: LiteralObject;
}
export interface Literals {
  candidateApplies: string;
  candidateAppliesShort: string;
  candidate: string;
  vacancies: string;
  vacancy: string;
  nominations: string;
  resume: string;
  atsChallenge: string;
  candidateCanApplyForVacancy: string;
  noDataFound: string;
  deleteApplication: string;
  selectTheVacancy: string;
  SelectTheCandidate: string;
  apply: string;
  savedSuccessfully: string;
  alreadyRegisteredForThisJob: string;
  wouldLikeToDeleteCandidacy: string;
  toDelete: string;
  toCancel: string;
  deleted: string;
  create: string;
  candidateNumber: string;
  toEdit: string;
  registerNewCandidate: string;
  changeCandidate: string;
  wouldLikeToDeleteCandidate: string;
  candidateName: string;
  toSave: string;
  close: string;
  fillInTheFieldCorrectly: string;
  listOfCandidatesApplyingForVacancy: string;
  groupedByCandidates: string;
  haveCV: string;
  dontHaveCV: string;
  registerCV: string;
  viewCV: string;
  deleteCV: string;
  youAlreadyHaveCV: string;
}
