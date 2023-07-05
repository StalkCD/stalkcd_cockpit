import { ArrivalRate } from "./arrivalRate";
import { BuildResult } from "./buildResult";

export class Characteristics {
    avgBuildDuration: number;
    arrivalRate: ArrivalRate[];
    buildResults: BuildResult[];
    
    constructor(avgBuildDuration: number, arrivalRate: ArrivalRate[], buildResults: BuildResult[]) {
        this.avgBuildDuration = avgBuildDuration;
        this.arrivalRate = arrivalRate;
        this.buildResults = buildResults;
    }
}

// export interface Characteristics {
//     avgBuildDuration: number;
//     arrivalRate: ArrivalRate[];
//     buildResults: BuildResult[];
// }