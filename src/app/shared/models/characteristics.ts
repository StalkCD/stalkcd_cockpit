import { ArrivalRate } from "./arrivalRate";
import { BuildResult } from "./buildResult";

export interface Characteristics {
    avgBuildDuration: number; //done
    arrivalRate: ArrivalRate[]; //done
    buildResults: BuildResult[]; //done


    // TODO: sind die immer dabei doer nur unter bestimmten bedingungn?

    stepsFailed?: any;
    jobsFailed?: any; 

    totalAvgStepDuration?: any;
    totalAvgSuccessfulStepDuration?: any;


    totalAvgStepDurationPerStep?: any; // Done Als LineCHart is same likavgStepDurationPerStepPerJob lol?
    avgStepDurationPerStepPerJob?: any;
}