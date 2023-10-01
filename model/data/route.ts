import { getStringAmericanNumberDisplay } from '@/helpers/format/get-string-american-number-display'
import { Bunker, BunkerFromApiProperties } from './bunker'
import { Canal, CanalFromApiProperties } from './canal'
import { Commodities, CommoditiesFromApiProperties } from './commodities'
import { Port, PortFromApiProperties } from './port'
import { RouteCadence, RouteCadenceFromApiProperties } from './route-cadence'
import {
  RouteExtraBallastCost,
  RouteExtraBallastCostFromApiProperties,
} from './route-extra-ballast-cost'
import {
  RouteLadenCanalDiscount,
  RouteLadenCanalDiscountFromApiProperties,
} from './route-laden-canal-discount'
import { RouteRegion, RouteRegionFromApiProperties } from './route-region'
import { RouteZone, RouteZoneFromApiProperties } from './route-zone'
import { Unit, UnitFromApiProperties } from './unit'
import { VesselFamily, VesselFamilyFromApiProperties } from './vessel-family'
import { RouteFamily } from './route-family'

// react-select dans la page : afficher toutes les routes dès le début ?
// =B3&" - "&C3&BW3&"/"&G3&" - "&TEXTE(M3,"0,000")&" - "&N3*100&"%"&" "&R3&" SF - "&S3*100&"TTL - "&U3&"/"&V3&" - "&X3&"/"&Y3
// '&Charterer&' - '&1st Load port&&2nd load port name used for extract&' - "&TEXTE(Stem size,"0,000")&" - "&moloo&*100&"%"&" "&SF&" SF - "&Total Com*100&"TTL - "&Speed at load&"/"&Ratio at load&" - "&Speed at disch&"/"&Ratio at disch

interface RouteCommonProperties {
  id: string
  charterer: string
  moloo: number
  sf: number
  totalCom: number
  speedAtLoad: number
  speedAtDisch: number
  portDisch: string | null
  apsRoute: boolean
  ilow: number
  constant: number
  ttTotal: number
  wdaysBallast: number
  wdaysLaden: number
  distanceLadenSeca: number
  draftApplied: number
  ballastTimeLostVessel: number
  timeBunker: number
  draftRouting2: number | null
  distanceLadenSeca2: number | null
  ballastTimeLostVessel2: number | null
  timeBunker2: number | null
  hasSecondOption: boolean
}

export interface RouteFromApiProperties extends RouteCommonProperties {
  extra_ballast_cost_id: RouteExtraBallastCostFromApiProperties
  region_id: RouteRegionFromApiProperties
  bki_type_delivery_id: PortFromApiProperties
  bki_type_canal_id: CanalFromApiProperties | null
  load_unit_id: UnitFromApiProperties
  discharge_unit_id: UnitFromApiProperties
  bunker_fo_id: BunkerFromApiProperties
  bunker_do_id: BunkerFromApiProperties
  scrub_disc_id: BunkerFromApiProperties
  passing_canal_laden_extract_id: CanalFromApiProperties | null
  passing_canal_laden_calcs_id: RouteLadenCanalDiscountFromApiProperties | null
  family_id: VesselFamilyFromApiProperties
  zone_id: RouteZoneFromApiProperties
  commodities_id: CommoditiesFromApiProperties // 1
  ratio_at_load_id: RouteCadenceFromApiProperties
  ratio_at_disch_id: RouteCadenceFromApiProperties
  load_port1_id: PortFromApiProperties
  load_port2_id: PortFromApiProperties | null
  stemSize: string
  totalDasLoadDischMisc: string
  dwt71_79: string
  dwt80_83: string
  dwt84_88: string
  dwt89_93: string
  dwt94_98: string
  dwt99_125: string
  dwt126_150: string
  dwt151_180: string
  dwt181_200: string
  dwt201_250: string
  dwt28_32: string
  dwt33_40: string
  dwt41_50: string
  dwt51_59: string
  dwt60_70: string
  distanceLadenTotal: string
  distanceLadenTotal2: string | null
}

interface RouteProperties extends RouteCommonProperties {
  label: string
  extraBallastCost: RouteExtraBallastCost
  region: RouteRegion
  bkiTypePortDelivery: Port
  bkiTypeCanal: Canal | null
  loadUnit: Unit
  dischargeUnit: Unit
  bunkerFo: Bunker
  bunkerDo: Bunker
  scrubDisc: Bunker
  passingCanalLadenExtract: Canal | null
  passingCanalLadenCalcs: RouteLadenCanalDiscount | null
  family: VesselFamily
  zone: RouteZone
  commodities: Commodities // 1
  ratioAtLoad: RouteCadence
  ratioAtDisch: RouteCadence
  loadPort1: Port
  loadPort2: Port | null
  stemSize: number
  totalDasLoadDischMisc: number
  // dwt71_79: number
  // dwt80_83: number
  // dwt84_88: number
  // dwt89_93: number
  // dwt94_98: number
  // dwt99_125: number
  // dwt126_150: number
  // dwt151_180: number
  // dwt181_200: number
  // dwt201_250: number
  // dwt28_32: number
  // dwt33_40: number
  // dwt41_50: number
  // dwt51_59: number
  // dwt60_70: number
  families: Array<RouteFamily>
  distanceLadenTotal: number
  distanceLadenTotal2: number | null
}

function isValidProperty(
  obj: RouteFromApiProperties,
  key: string,
): key is keyof RouteFromApiProperties {
  return key in obj
}

export interface Route extends RouteProperties {}
export class Route {
  constructor(routeFromApi: RouteFromApiProperties) {
    this.id = routeFromApi.id
    this.charterer = routeFromApi.charterer
    this.stemSize = Number(routeFromApi.stemSize)
    this.moloo = routeFromApi.moloo
    this.sf = routeFromApi.sf
    this.totalCom = routeFromApi.totalCom
    this.speedAtLoad = routeFromApi.speedAtLoad
    this.speedAtDisch = routeFromApi.speedAtDisch
    this.portDisch = routeFromApi.portDisch
    this.apsRoute = routeFromApi.apsRoute
    this.ilow = routeFromApi.ilow
    this.constant = routeFromApi.constant
    this.ttTotal = routeFromApi.ttTotal
    this.wdaysBallast = routeFromApi.wdaysBallast
    this.wdaysLaden = routeFromApi.wdaysLaden
    this.totalDasLoadDischMisc = Number(routeFromApi.totalDasLoadDischMisc)
    this.distanceLadenSeca = routeFromApi.distanceLadenSeca
    this.draftApplied = routeFromApi.draftApplied
    this.ballastTimeLostVessel = routeFromApi.ballastTimeLostVessel
    this.timeBunker = routeFromApi.timeBunker
    this.draftRouting2 = routeFromApi.draftRouting2
    this.distanceLadenSeca2 = routeFromApi.distanceLadenSeca2
    this.ballastTimeLostVessel2 = routeFromApi.ballastTimeLostVessel2
    this.timeBunker2 = routeFromApi.timeBunker2
    this.distanceLadenTotal = Number(routeFromApi.distanceLadenTotal)
    this.distanceLadenTotal2 = Number(routeFromApi.distanceLadenTotal2)
    this.extraBallastCost = new RouteExtraBallastCost(
      routeFromApi.extra_ballast_cost_id,
    )
    this.region = new RouteRegion(routeFromApi.region_id)
    this.bkiTypePortDelivery = new Port(routeFromApi.bki_type_delivery_id)
    this.bkiTypeCanal =
      routeFromApi.bki_type_canal_id === null
        ? null
        : new Canal(routeFromApi.bki_type_canal_id)
    this.loadUnit = new Unit(routeFromApi.load_unit_id)
    this.dischargeUnit = new Unit(routeFromApi.discharge_unit_id)
    this.bunkerFo = new Bunker(routeFromApi.bunker_fo_id)
    this.bunkerDo = new Bunker(routeFromApi.bunker_do_id)
    this.scrubDisc = new Bunker(routeFromApi.scrub_disc_id)
    this.passingCanalLadenExtract =
      routeFromApi.passing_canal_laden_extract_id === null
        ? null
        : new Canal(routeFromApi.passing_canal_laden_extract_id)
    this.passingCanalLadenCalcs =
      routeFromApi.passing_canal_laden_calcs_id === null
        ? null
        : new RouteLadenCanalDiscount(routeFromApi.passing_canal_laden_calcs_id)
    this.family = new VesselFamily(routeFromApi.family_id)
    this.zone = new RouteZone(routeFromApi.zone_id)
    this.commodities = new Commodities(routeFromApi.commodities_id) // 1
    this.ratioAtLoad = new RouteCadence(routeFromApi.ratio_at_load_id)
    this.ratioAtDisch = new RouteCadence(routeFromApi.ratio_at_disch_id)
    this.loadPort1 = new Port(routeFromApi.load_port1_id)
    this.loadPort2 =
      routeFromApi.load_port2_id === null
        ? null
        : new Port(routeFromApi.load_port2_id)

    // this.dwt71_79 = Number(routeFromApi.dwt71_79)
    // this.dwt80_83 = Number(routeFromApi.dwt80_83)
    // this.dwt84_88 = Number(routeFromApi.dwt84_88)
    // this.dwt89_93 = Number(routeFromApi.dwt89_93)
    // this.dwt94_98 = Number(routeFromApi.dwt94_98)
    // this.dwt99_125 = Number(routeFromApi.dwt99_125)
    // this.dwt126_150 = Number(routeFromApi.dwt126_150)
    // this.dwt151_180 = Number(routeFromApi.dwt151_180)
    // this.dwt181_200 = Number(routeFromApi.dwt181_200)
    // this.dwt201_250 = Number(routeFromApi.dwt201_250)
    // this.dwt28_32 = Number(routeFromApi.dwt28_32)
    // this.dwt33_40 = Number(routeFromApi.dwt33_40)
    // this.dwt41_50 = Number(routeFromApi.dwt41_50)
    // this.dwt51_59 = Number(routeFromApi.dwt51_59)
    // this.dwt60_70 = Number(routeFromApi.dwt60_70)

    // this.families = [
    //   new RouteFamily({
    //     label: 'dwt71_79',
    //     value: Number(routeFromApi.dwt71_79),
    //   }),
    // ]
    // populateFamilies(routeFromApi: RouteFromApiProperties) {

    const familyLabels: string[] = [
      'dwt71_79',
      'dwt80_83',
      'dwt84_88',
      'dwt89_93',
      'dwt94_98',
      'dwt99_125',
      'dwt126_150',
      'dwt151_180',
      'dwt181_200',
      'dwt201_250',
      'dwt28_32',
      'dwt33_40',
      'dwt41_50',
      'dwt51_59',
      'dwt60_70',
    ]
    this.families = []

    // Iterate over the familyLabels array
    for (const familyLabel of familyLabels) {
      // Get the corresponding value from routeFromApi using the familyLabel
      const value = routeFromApi[familyLabel as keyof RouteFromApiProperties] // Type assertion

      // Create a new RouteFamily instance and push it to the families array
      this.families.push(
        new RouteFamily({
          label: familyLabel,
          value: Number(value),
        }),
      )
    }

    this.hasSecondOption = routeFromApi.hasSecondOption
    this.label = `${this.charterer} - ${this.loadPort1.label}${
      this.loadPort2 ? this.loadPort2.label : ''
    }/${this.portDisch} - ${getStringAmericanNumberDisplay(this.stemSize)} - ${
      this.moloo * 100
    }% ${this.sf} SF - ${this.totalCom * 100}TTL - ${this.speedAtLoad}/${
      this.ratioAtLoad.ratio
    } - ${this.speedAtDisch}/${this.ratioAtDisch.ratio}`
  }

  static getGraphqlGetAllQuery() {
    return `
      query {
        routes: Route (limit: -1) {
          id
          charterer
          stemSize: stem_size
          moloo
          sf
          totalCom: total_com
          speedAtLoad: speed_at_load
          speedAtDisch: speed_at_disch
          portDisch: port_disch
          apsRoute: aps_route
          ilow
          constant
          ttTotal: tt_total
          wdaysBallast: wdays_ballast
          wdaysLaden: wdays_laden
          totalDasLoadDischMisc: total_das_load_disch_misc
          distanceLadenSeca: distance_laden_seca
          draftApplied: draft_applied
          ballastTimeLostVessel: ballast_time_lost_vessel
          timeBunker: time_bunker
          draftRouting2: draft_routing_2
          distanceLadenSeca2: distance_laden_seca_2
          ballastTimeLostVessel2: ballast_time_lost_vessel_2
          timeBunker2: time_bunker_2
          distanceLadenTotal: distance_laden_total
          distanceLadenTotal2: distance_laden_total2
          extra_ballast_cost_id { id, extra_ballast_cost }
          region_id { id, route_region }
          bki_type_delivery_id { 
            id, 
            port, 
            load, 
            region_id { id, port_region }
          }
          bki_type_canal_id { id, canal }
          load_unit_id { id, unit }
          discharge_unit_id { id, unit }
          bunker_fo_id { 
            id, 
            bunker_name, 
            fo, 
            do, 
            scrub_adj_id {
              id
              scrub_name
              scrub_value
            }
          }
          bunker_do_id { 
            id, 
            bunker_name, 
            fo, 
            do, 
            scrub_adj_id {
              id
              scrub_name
              scrub_value
            }
          }
          scrub_disc_id { 
            id, 
            bunker_name, 
            fo, 
            do, 
            scrub_adj_id {
              id
              scrub_name
              scrub_value
            }
          }
          passing_canal_laden_extract_id { id, canal}
          passing_canal_laden_calcs_id { id, laden_canal_discount,cost,days_lost  }
          family_id { id, family }
          zone_id { id, route_zone }
          commodities_id { id, commodities }
          ratio_at_load_id { id, cadence, ratio }
          ratio_at_disch_id { id, cadence, ratio }
          load_port1_id { 
            id, 
            port, 
            load, 
            region_id { id, port_region }
          }
          load_port2_id { 
            id, 
            port, 
            load, 
            region_id { id, port_region }
          }
          dwt71_79: dwt_71_79
          dwt80_83: dwt_80_83
          dwt84_88: dwt_84_88
          dwt89_93: dwt_89_93
          dwt94_98: dwt_94_98
          dwt99_125: dwt_99_125
          dwt126_150: dwt_126_150
          dwt151_180: dwt_151_180
          dwt181_200: dwt_181_200
          dwt201_250: dwt_201_250
          dwt28_32: dwt_28_32
          dwt33_40: dwt_33_40
          dwt41_50: dwt_41_50
          dwt51_59: dwt_51_59
          dwt60_70: dwt_60_70
          hasSecondOption: second_route
        }
      }
    `
  }
}
