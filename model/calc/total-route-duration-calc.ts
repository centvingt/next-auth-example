interface TotalDuration {
  speed1: number
  speed2: number
  speed3: number
  speed4: number
}

export interface ExtraValues {
  timeTotalBallastVesselSpeed1: ResultCalcTime
  timeTotalBallastVesselSpeed2: ResultCalcTime
  timeTotalBallastVesselSpeed3: ResultCalcTime
  timeTotalBallastVesselSpeed4: ResultCalcTime
  timeTotalBallastBkiSpeed1: ResultCalcTime
  timeTotalBallastBkiSpeed2: ResultCalcTime
  timeTotalBallastBkiSpeed3: ResultCalcTime
  timeTotalBallastBkiSpeed4: ResultCalcTime
  timeTotalLadenVesselRoute1Speed1: ResultCalcTime
  timeTotalLadenVesselRoute1Speed2: ResultCalcTime
  timeTotalLadenVesselRoute1Speed3: ResultCalcTime
  timeTotalLadenVesselRoute1Speed4: ResultCalcTime
  timeTotalLadenBkiRoute1Speed1: ResultCalcTime
  timeTotalLadenBkiRoute1Speed2: ResultCalcTime
  timeTotalLadenBkiRoute1Speed3: ResultCalcTime
  timeTotalLadenBkiRoute1Speed4: ResultCalcTime
  timeTotalLadenVesselRoute2Speed1: ResultCalcTime
  timeTotalLadenVesselRoute2Speed2: ResultCalcTime
  timeTotalLadenVesselRoute2Speed3: ResultCalcTime
  timeTotalLadenVesselRoute2Speed4: ResultCalcTime
  timeTotalLadenBkiRoute2Speed1: ResultCalcTime
  timeTotalLadenBkiRoute2Speed2: ResultCalcTime
  timeTotalLadenBkiRoute2Speed3: ResultCalcTime
  timeTotalLadenBkiRoute2Speed4: ResultCalcTime
}

export interface TotalRouteDurationResult {
  totalDurationVesselRoute1: TotalDuration
  totalDurationBkiRoute1: TotalDuration
  totalDurationVesselRoute2: TotalDuration
  totalDurationBkiRoute2: TotalDuration
  extraValues: ExtraValues
}
export interface ResultCalcTime {
  totalDistanceTime: number // corresponds to valueX
  secaDistanceTime: number // corresponds to valueY
  totalTime: number // corresponds to valueX + valueY
}
