import { ArrivalRate } from "./arrivalRate";
import { BuildResult } from "./buildResult";

export interface Characteristics {
    avgBuildDuration: number;
    arrivalRate: ArrivalRate[];
    buildResults: BuildResult[];

    stepsFailed?: any;
    jobsFailed?: any; 

    totalAvgStepDuration?: any;
    totalAvgSuccessfulStepDuration?: any;


    totalAvgStepDurationPerStep?: any; // TODO: Done Als LineCHart is same likavgStepDurationPerStepPerJob lol?
    avgStepDurationPerStepPerJob?: any;
}