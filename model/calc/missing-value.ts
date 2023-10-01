export enum Calc {
  RouteCostsCalc = 'route costs',
  IntakeCalc = 'intake',
  MainCalc = 'main',
  TotalFuelCost = 'total fuel cost',
  StoppingRouteCosts = 'stopping route costs',
  TotalRouteDuration = 'total route duration',
}
export enum RequiredValue {
  // Server's issues
  settings = 'settings from API',
  bkiVesselCubic = "BKI vessel's cubic value",
  bkiVesselDateBuilt = "BKI vessel's date built value",
  bkiVesselDraft = "BKI vessel's draft value",
  bkiVesselExtraCost = "selected vessel's extra cost",
  bkiVesselFamily = "BKI vessel's family value",
  bkiVesselTpc = "BKI vessel's TPC value",
  bkiSpeed1 = 'BKI speeds 1',
  linkedBkiVesselDelivery = "BKI's informations in selected route or no found distance with this port",
  routeBallastCanalDiscounts = 'route ballast canal discounts',
  routeLadenCanalDiscounts = 'route laden canal discounts',
  distanceNotFoundBki = 'no found distance with this data (route bki - route load port)',
  distanceNotFoundVessel = 'no found distance with this data (delivery - route load port)',
  secondRouteMissingDistances = 'second route missing distance total 2 or seca 2',

  // User's issues so user should edit the selected vessel
  selectedDelivery = 'selected delivery option',
  selectedRoute = 'selected route',
  selectedVessel = 'selected vessel',
  selectedVesselCubic = "selected vessel's cubic value",
  selectedVesselDateBuilt = "selected vessel's date built value",
  selectedVesselDraft = "selected vessel's draft value",
  selectedVesselExtraCost = 'computed selected vessel route family value',
  selectedVesselFamily = "selected vessel's family value",
  selectedVesselTpc = "selected vessel's TPC value",
  selectedVesselSpeed1 = "selected vessel's speeds 1",

  routeCostsResult = "route costs's result",
  intakeCalcResult = "intake calc's result",
  stoppingRouteCostsResult = "stopping route costs's result",
}
export interface MissingValue {
  calc: Calc
  value: RequiredValue
}
