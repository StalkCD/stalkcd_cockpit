import { ArrivalRate } from "./arrivalRate";
import { BuildResult } from "./buildResult";

export interface Characteristics {
    avgBuildDuration: number;
    arrivalRate: ArrivalRate[];
    buildResults: BuildResult[];
}