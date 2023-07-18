import { ArrivalRate } from "./arrivalRate";
import { BuildResult } from "./buildResult";

export interface Characteristics {
    avgBuildDuration: number; //done
    arrivalRate: ArrivalRate[]; //done
    buildResults: BuildResult[]; //done


    // TODO:
    // - sind die immer dabei doer nur unter bestimmten bedingungn?

    stepsFailed?: any; // Maybe als Liste ?
    jobsFailed?: any; // Maybe als Liste ?

    totalAvgStepDuration?: any; //done
    totalAvgSuccessfulStepDuration?: any; //done


    totalAvgStepDurationPerStep?: any; //Als LineCHart ?
    avgStepDurationPerStepPerJob?: any;  //Als LineCHart ?
}