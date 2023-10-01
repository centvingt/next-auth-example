import { Flag, FlagFromApiProperties, FlagProperties } from './flag'
import {
  VesselFamilyFromApiProperties,
  VesselFamilyProperties,
} from './vessel-family'
import { VesselFamily } from './vessel-family'
import { Yard, YardFromApiProperties, YardProperties } from './yard'

interface SlimVesselProperties extends SlimVesselFromApiProperties {
  label: string
}
interface SlimVesselFromApiProperties {
  id: string
  name: string
  dwt: number
  dateBuilt: string
}

interface BaseVesselProperties extends SlimVesselFromApiProperties {
  draft: number | null // 1
  tpc: number | null // +50
  neoFitted: boolean
  scub: boolean
  co2: boolean
  portWorkFo: number | null // +50
  portIdleDo: number | null // +50
  portWorkDo: number | null // +50
  portIdleFo: number | null // +50
  imoNumber: number
  loa: number | null // +50
  speed1BallastKnots: number | null // +450
  speed1BallastConsoFo: number | null // +450
  speed1BallastConsoDo: number | null // +450
  speed1LadenKnots: number | null // +450
  speed1LadenConsoFo: number | null // +450
  speed1LadenConsoDo: number | null // +450
  speed2BallastKnots: number | null
  speed2BallastConsoFo: number | null
  speed2BallastConsoDo: number | null
  speed2LadenKnots: number | null
  speed2LadenConsoFo: number | null
  speed2LadenConsoDo: number | null
  speed3BallastKnots: number | null
  speed3BallastConsoFo: number | null
  speed3BallastConsoDo: number | null
  speed3LadenKnots: number | null
  speed3LadenConsoFo: number | null
  speed3LadenConsoDo: number | null
  speed4BallastKnots: number | null
  speed4BallastConsoFo: number | null
  speed4BallastConsoDo: number | null
  speed4LadenKnots: number | null
  speed4LadenConsoFo: number | null
  speed4LadenConsoDo: number | null
  grabsCapacity: number | null // +500
  grabsNumber: number | null // +500
  geared: boolean
  grt: number
  iceLevel: string | null // +500
  lbp: number | null // 8
  netTonnage: number | null // 11
  ahlFitted: boolean | null
  builderCountry: string | null // 10
  cubic: number | null //  12
  beam: number | null // 1
}
export interface VesselFromApiProperties extends BaseVesselProperties {
  // yard_id: { yard: string } | null
  // yard_id: { yard: string; id: number } | null
  yard_id: YardFromApiProperties | null

  // flag_id: { flag: string } | null
  flag_id: FlagFromApiProperties | null
  family_id: VesselFamilyFromApiProperties
}
interface VesselProperties extends BaseVesselProperties {
  // yard: string | null // 10
  yard: YardProperties | null // 10

  // flag: string | null // 2
  flag: FlagProperties | null // 2
  // family: string
  family: VesselFamilyProperties | null
}

// TOKEN PERMANENT : AD1baV6s1wHXtJ_2NtniWEGD0nzKoHDU
export interface SlimVessel extends SlimVesselProperties {}
export class SlimVessel {
  constructor(slimVesselFromApi: SlimVesselFromApiProperties) {
    this.id = slimVesselFromApi.id
    this.name = slimVesselFromApi.name
    this.dwt = slimVesselFromApi.dwt
    this.dateBuilt = slimVesselFromApi.dateBuilt
    this.label = `${this.name} - ${this.dwt
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/${new Date(
      this.dateBuilt,
    ).getFullYear()}`
  }

  static getGraphqlGetAllByInputQuery({ input }: { input: string }) {
    return `
      query {
          vesselsOptions: Vessel(
          filter: { vessel: {_starts_with: "${input}"} }
        ) {
          id
          name: vessel
          dwt
          dateBuilt: date_built
        }
      }
    `
  }
}

export interface Vessel extends VesselProperties {}
export class Vessel extends SlimVessel {
  constructor(vesselFromApi: VesselFromApiProperties) {
    // Initialize only this.id, this.name, this.dwt, this.dateBuilt and this.label
    super(vesselFromApi)

    // Initialize all the others properties
    this.draft = vesselFromApi.draft
    this.tpc = vesselFromApi.tpc
    this.neoFitted = vesselFromApi.neoFitted
    this.scub = vesselFromApi.scub
    this.co2 = vesselFromApi.co2
    this.portWorkFo = vesselFromApi.portWorkFo
    this.portIdleDo = vesselFromApi.portIdleDo
    this.portWorkDo = vesselFromApi.portWorkDo
    this.portIdleFo = vesselFromApi.portIdleFo
    this.imoNumber = vesselFromApi.imoNumber
    this.loa = vesselFromApi.loa
    this.speed1BallastKnots = vesselFromApi.speed1BallastKnots
    this.speed1BallastConsoFo = vesselFromApi.speed1BallastConsoFo
    this.speed1BallastConsoDo = vesselFromApi.speed1BallastConsoDo
    this.speed1LadenKnots = vesselFromApi.speed1LadenKnots
    this.speed1LadenConsoFo = vesselFromApi.speed1LadenConsoFo
    this.speed1LadenConsoDo = vesselFromApi.speed1LadenConsoDo
    this.speed2BallastKnots = vesselFromApi.speed2BallastKnots
    this.speed2BallastConsoFo = vesselFromApi.speed2BallastConsoFo
    this.speed2BallastConsoDo = vesselFromApi.speed2BallastConsoDo
    this.speed2LadenKnots = vesselFromApi.speed2LadenKnots
    this.speed2LadenConsoFo = vesselFromApi.speed2LadenConsoFo
    this.speed2LadenConsoDo = vesselFromApi.speed2LadenConsoDo
    this.speed3BallastKnots = vesselFromApi.speed3BallastKnots
    this.speed3BallastConsoFo = vesselFromApi.speed3BallastConsoFo
    this.speed3BallastConsoDo = vesselFromApi.speed3BallastConsoDo
    this.speed3LadenKnots = vesselFromApi.speed3LadenKnots
    this.speed3LadenConsoFo = vesselFromApi.speed3LadenConsoFo
    this.speed3LadenConsoDo = vesselFromApi.speed3LadenConsoDo
    this.speed4BallastKnots = vesselFromApi.speed4BallastKnots
    this.speed4BallastConsoFo = vesselFromApi.speed4BallastConsoFo
    this.speed4BallastConsoDo = vesselFromApi.speed4BallastConsoDo
    this.speed4LadenKnots = vesselFromApi.speed4LadenKnots
    this.speed4LadenConsoFo = vesselFromApi.speed4LadenConsoFo
    this.speed4LadenConsoDo = vesselFromApi.speed4LadenConsoDo
    this.grabsCapacity = vesselFromApi.grabsCapacity
    this.grabsNumber = vesselFromApi.grabsNumber
    this.geared = vesselFromApi.geared
    this.grt = vesselFromApi.grt
    this.iceLevel = vesselFromApi.iceLevel
    this.lbp = vesselFromApi.lbp
    this.netTonnage = vesselFromApi.netTonnage
    this.ahlFitted = vesselFromApi.ahlFitted
    this.builderCountry = vesselFromApi.builderCountry
    this.cubic = vesselFromApi.cubic
    this.beam = vesselFromApi.beam

    // this.flag = vesselFromApi.flag_id?.flag ?? null
    if (vesselFromApi.flag_id) this.flag = new Flag(vesselFromApi.flag_id)

    // this.family = vesselFromApi.family_id.family
    if (vesselFromApi.family_id)
      this.family = new VesselFamily(vesselFromApi.family_id)

    // this.yard = vesselFromApi.yard_id?.yard ?? null
    if (vesselFromApi.yard_id) this.yard = new Yard(vesselFromApi.yard_id)
  }

  static getGraphqlGetOneByIdQueryFields = () => `
    id
    name: vessel
    dwt
    dateBuilt: date_built
    draft
    tpc
    neoFitted: neo_fitted
    scub
    co2
    portWorkFo: port_work_fo
    portIdleDo: port_idle_do
    portWorkDo: port_work_do
    portIdleFo: port_idle_fo
    imoNumber: imo_number
    loa
    speed1BallastKnots: speed1_ballast_knots
    speed1BallastConsoFo: speed1_ballast_conso_fo
    speed1BallastConsoDo: speed1_ballast_conso_do
    speed1LadenKnots: speed1_laden_knots
    speed1LadenConsoFo: speed1_laden_conso_fo
    speed1LadenConsoDo: speed1_laden_conso_do
    speed2BallastKnots: speed2_ballast_knots
    speed2BallastConsoFo: speed2_ballast_conso_fo
    speed2BallastConsoDo: speed2_ballast_conso_do
    speed2LadenKnots: speed2_laden_knots
    speed2LadenConsoFo: speed2_laden_conso_fo
    speed2LadenConsoDo: speed2_laden_conso_do
    speed3BallastKnots: speed3_ballast_knots
    speed3BallastConsoFo: speed3_ballast_conso_fo
    speed3BallastConsoDo: speed3_ballast_conso_do
    speed3LadenKnots: speed3_laden_knots
    speed3LadenConsoFo: speed3_laden_conso_fo
    speed3LadenConsoDo: speed3_laden_conso_do
    speed4BallastKnots: speed4_ballast_knots
    speed4BallastConsoFo: speed4_ballast_conso_fo
    speed4BallastConsoDo: speed4_ballast_conso_do
    speed4LadenKnots: speed4_laden_knots
    speed4LadenConsoFo: speed4_laden_conso_fo
    speed4LadenConsoDo: speed4_laden_conso_do
    grabsCapacity: vessel_grabs_capacity
    grabsNumber: vessel_grabs_number
    geared: vessel_geared
    grt: vessel_grt
    iceLevel: vessel_ice_level
    lbp: vessel_lbp
    netTonnage: vessel_net_tonnage
    ahlFitted: vessel_ahl_fitted
    builderCountry: vessel_builder_country
    cubic
    beam
    yard_id { yard, id }
    flag_id { flag, id }
    family_id { family, id }
  `
  static getGraphqlGetOneByIdQuery({ id }: { id: string }) {
    return `
      query {
        vessel: Vessel_by_id(
          id: "${id}"
        ) {
          ${this.getGraphqlGetOneByIdQueryFields()}
        }
      }
    `
  }

  static getGraphqlPatchOneByIdQuery({ id, fo }: { id: string; fo: number }) {
    return `mutation {
      update_Bunker_item(id: "${id}", data: { fo: "${fo}" }) {
        id
        fo
      }
    }`
  }
  static getGraphqlUpdateVesselByIdQuery({
    id,
    name,
    neoFitted,
    vesselGrabsCapacity,
    dwt,
    scub,
    vesselGrabsNumber,
    draft,
    co2,
    vesselGeared,
    cubic,
    portWorkFo,
    portWorkDo,
    vesselGrt,
    loa,
    portIdleFo,
    portIdleDo,
    vesselIceLevel,
    yardId,
    flagId,
    imoNumber,
    vesselNetTonnage,
    vesselLbp,
    beam,
    familyId,
    vesselAhlFitted,
    tpc,
    dateBuilt,
    vesselBuilderCountry,
    speed1SpeedBallastKnots,
    speed1SpeedBallastConsoFo,
    speed1SpeedBallastConsoDo,
    speed1SpeedLadenKnots,
    speed1SpeedLadenConsoFo,
    speed1SpeedLadenConsoDo,
    speed2SpeedBallastKnots,
    speed2SpeedBallastConsoFo,
    speed2SpeedBallastConsoDo,
    speed2SpeedLadenKnots,
    speed2SpeedLadenConsoFo,
    speed2SpeedLadenConsoDo,
    speed3SpeedBallastKnots,
    speed3SpeedBallastConsoFo,
    speed3SpeedBallastConsoDo,
    speed3SpeedLadenKnots,
    speed3SpeedLadenConsoFo,
    speed3SpeedLadenConsoDo,
    speed4SpeedBallastKnots,
    speed4SpeedBallastConsoFo,
    speed4SpeedBallastConsoDo,
    speed4SpeedLadenKnots,
    speed4SpeedLadenConsoFo,
    speed4SpeedLadenConsoDo,
  }: {
    id: string
    name: string
    neoFitted: boolean
    vesselGrabsCapacity: string
    dwt: string
    scub: boolean
    vesselGrabsNumber: string
    draft: string
    co2: boolean
    vesselGeared: boolean
    cubic: string
    portWorkFo: string
    portWorkDo: string
    vesselGrt: string
    loa: string
    portIdleFo: string
    portIdleDo: string
    vesselIceLevel: string
    vesselLbp: string
    yardId: {
      id: string
      label: string
    }
    flagId: {
      id: string
      label: string
    }
    imoNumber: string
    vesselNetTonnage: string
    beam: string
    familyId: {
      id: string
      label: string
    }
    vesselAhlFitted: boolean
    tpc: string
    dateBuilt: string
    vesselBuilderCountry: string
    speed1SpeedBallastKnots: string
    speed1SpeedBallastConsoFo: string
    speed1SpeedBallastConsoDo: string
    speed1SpeedLadenKnots: string
    speed1SpeedLadenConsoFo: string
    speed1SpeedLadenConsoDo: string
    speed2SpeedBallastKnots: string
    speed2SpeedBallastConsoFo: string
    speed2SpeedBallastConsoDo: string
    speed2SpeedLadenKnots: string
    speed2SpeedLadenConsoFo: string
    speed2SpeedLadenConsoDo: string
    speed3SpeedBallastKnots: string
    speed3SpeedBallastConsoFo: string
    speed3SpeedBallastConsoDo: string
    speed3SpeedLadenKnots: string
    speed3SpeedLadenConsoFo: string
    speed3SpeedLadenConsoDo: string
    speed4SpeedBallastKnots: string
    speed4SpeedBallastConsoFo: string
    speed4SpeedBallastConsoDo: string
    speed4SpeedLadenKnots: string
    speed4SpeedLadenConsoFo: string
    speed4SpeedLadenConsoDo: string
  }) {
    return `mutation {
      update_Vessel_item(id: "${id}", data: {
        vessel: "${name}",
        neo_fitted: ${neoFitted},
        vessel_grabs_capacity: ${
          vesselGrabsCapacity !== '' ? parseFloat(vesselGrabsCapacity) : null
        },
        dwt: ${dwt !== '' ? `"${parseFloat(dwt)}"` : null},
        scub: ${scub},
        vessel_lbp: ${vesselLbp !== '' ? `${parseFloat(vesselLbp)}` : null},
        vessel_grabs_number: ${
          vesselGrabsNumber !== '' ? parseInt(vesselGrabsNumber) : null
        },
        draft: ${draft !== '' ? `${parseFloat(draft)}` : null},
        co2: ${co2},
        vessel_geared: ${vesselGeared},
        cubic: ${cubic !== '' ? `"${parseFloat(cubic)}"` : null},
        port_work_fo: ${portWorkFo !== '' ? `${parseFloat(portWorkFo)}` : null},
        port_work_do: ${portWorkDo !== '' ? `${parseFloat(portWorkDo)}` : null},
        vessel_grt: ${vesselGrt !== '' ? `"${parseFloat(vesselGrt)}"` : null},
        loa: ${loa !== '' ? `${parseFloat(loa)}` : null},
        port_idle_fo: ${portIdleFo !== '' ? `${parseFloat(portIdleFo)}` : null},
        port_idle_do: ${portIdleDo !== '' ? `${parseFloat(portIdleDo)}` : null},
        vessel_ice_level: "${vesselIceLevel}",
        yard_id: ${parseInt(yardId.id)},
        flag_id: ${parseInt(flagId.id)},
        imo_number: ${imoNumber !== '' ? `"${parseFloat(imoNumber)}"` : null},
        vessel_net_tonnage: ${
          vesselNetTonnage !== '' ? `"${parseFloat(vesselNetTonnage)}"` : null
        },
        beam: ${beam !== '' ? `${parseFloat(beam)}` : null},
        family_id: ${parseInt(familyId.id)},
        vessel_ahl_fitted: ${vesselAhlFitted},
        tpc: ${tpc !== '' ? `${parseFloat(tpc)}` : null},
        date_built: ${dateBuilt !== '' ? `"${dateBuilt}"` : null},
        vessel_builder_country: "${vesselBuilderCountry}",
        speed1_ballast_knots: ${
          speed1SpeedBallastKnots !== ''
            ? `${parseFloat(speed1SpeedBallastKnots)}`
            : null
        },
        speed1_ballast_conso_fo: ${
          speed1SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed1SpeedBallastConsoFo)}`
            : null
        },
        speed1_ballast_conso_do: ${
          speed1SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed1SpeedBallastConsoDo)}`
            : null
        },
        speed1_laden_knots: ${
          speed1SpeedLadenKnots !== ''
            ? `${parseFloat(speed1SpeedLadenKnots)}`
            : null
        },
        speed1_laden_conso_fo: ${
          speed1SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed1SpeedLadenConsoFo)}`
            : null
        },
        speed1_laden_conso_do: ${
          speed1SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed1SpeedLadenConsoDo)}`
            : null
        },
        speed2_ballast_knots: ${
          speed2SpeedBallastKnots !== ''
            ? `${parseFloat(speed2SpeedBallastKnots)}`
            : null
        },
        speed2_ballast_conso_fo: ${
          speed2SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed2SpeedBallastConsoFo)}`
            : null
        },
        speed2_ballast_conso_do: ${
          speed2SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed2SpeedBallastConsoDo)}`
            : null
        },
        speed2_laden_knots: ${
          speed2SpeedLadenKnots !== ''
            ? `${parseFloat(speed2SpeedLadenKnots)}`
            : null
        },
        speed2_laden_conso_fo: ${
          speed2SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed2SpeedLadenConsoFo)}`
            : null
        },
        speed2_laden_conso_do: ${
          speed2SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed2SpeedLadenConsoDo)}`
            : null
        },
        speed3_ballast_knots: ${
          speed3SpeedBallastKnots !== ''
            ? `${parseFloat(speed3SpeedBallastKnots)}`
            : null
        },
        speed3_ballast_conso_fo: ${
          speed3SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed3SpeedBallastConsoFo)}`
            : null
        },
        speed3_ballast_conso_do: ${
          speed3SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed3SpeedBallastConsoDo)}`
            : null
        },
        speed3_laden_knots: ${
          speed3SpeedLadenKnots !== ''
            ? `${parseFloat(speed3SpeedLadenKnots)}`
            : null
        },
        speed3_laden_conso_fo: ${
          speed3SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed3SpeedLadenConsoFo)}`
            : null
        },
        speed3_laden_conso_do: ${
          speed3SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed3SpeedLadenConsoDo)}`
            : null
        },
        speed4_ballast_knots: ${
          speed4SpeedBallastKnots !== ''
            ? `${parseFloat(speed4SpeedBallastKnots)}`
            : null
        },
        speed4_ballast_conso_fo: ${
          speed4SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed4SpeedBallastConsoFo)}`
            : null
        },
        speed4_ballast_conso_do: ${
          speed4SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed4SpeedBallastConsoDo)}`
            : null
        },
        speed4_laden_knots: ${
          speed4SpeedLadenKnots !== ''
            ? `${parseFloat(speed4SpeedLadenKnots)}`
            : null
        },
        speed4_laden_conso_fo: ${
          speed4SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed4SpeedLadenConsoFo)}`
            : null
        },
        speed4_laden_conso_do: ${
          speed4SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed4SpeedLadenConsoDo)}`
            : null
        },
      }) {
        id
          name: vessel
          dwt
          dateBuilt: date_built
          draft
          tpc
          neoFitted: neo_fitted
          scub
          co2
          portWorkFo: port_work_fo
          portIdleDo: port_idle_do
          portWorkDo: port_work_do
          portIdleFo: port_idle_fo
          imoNumber: imo_number
          loa
          speed1BallastKnots: speed1_ballast_knots
          speed1BallastConsoFo: speed1_ballast_conso_fo
          speed1BallastConsoDo: speed1_ballast_conso_do
          speed1LadenKnots: speed1_laden_knots
          speed1LadenConsoFo: speed1_laden_conso_fo
          speed1LadenConsoDo: speed1_laden_conso_do
          speed2BallastKnots: speed2_ballast_knots
          speed2BallastConsoFo: speed2_ballast_conso_fo
          speed2BallastConsoDo: speed2_ballast_conso_do
          speed2LadenKnots: speed2_laden_knots
          speed2LadenConsoFo: speed2_laden_conso_fo
          speed2LadenConsoDo: speed2_laden_conso_do
          speed3BallastKnots: speed3_ballast_knots
          speed3BallastConsoFo: speed3_ballast_conso_fo
          speed3BallastConsoDo: speed3_ballast_conso_do
          speed3LadenKnots: speed3_laden_knots
          speed3LadenConsoFo: speed3_laden_conso_fo
          speed3LadenConsoDo: speed3_laden_conso_do
          speed4BallastKnots: speed4_ballast_knots
          speed4BallastConsoFo: speed4_ballast_conso_fo
          speed4BallastConsoDo: speed4_ballast_conso_do
          speed4LadenKnots: speed4_laden_knots
          speed4LadenConsoFo: speed4_laden_conso_fo
          speed4LadenConsoDo: speed4_laden_conso_do
          grabsCapacity: vessel_grabs_capacity
          grabsNumber: vessel_grabs_number
          geared: vessel_geared
          grt: vessel_grt
          iceLevel: vessel_ice_level
          lbp: vessel_lbp
          netTonnage: vessel_net_tonnage
          ahlFitted: vessel_ahl_fitted
          builderCountry: vessel_builder_country
          cubic
          beam
          yard_id { yard, id }
          flag_id { flag, id }
          family_id { family, id }
        }
    }
    `
  }

  static getGraphqlCreateVesselQuery({
    name,
    neoFitted,
    vesselGrabsCapacity,
    dwt,
    scub,
    vesselGrabsNumber,
    draft,
    co2,
    vesselGeared,
    cubic,
    portWorkFo,
    portWorkDo,
    vesselGrt,
    loa,
    portIdleFo,
    portIdleDo,
    vesselIceLevel,
    yardId,
    flagId,
    imoNumber,
    vesselNetTonnage,
    vesselLbp,
    beam,
    familyId,
    vesselAhlFitted,
    tpc,
    dateBuilt,
    vesselBuilderCountry,
    speed1SpeedBallastKnots,
    speed1SpeedBallastConsoFo,
    speed1SpeedBallastConsoDo,
    speed1SpeedLadenKnots,
    speed1SpeedLadenConsoFo,
    speed1SpeedLadenConsoDo,
    speed2SpeedBallastKnots,
    speed2SpeedBallastConsoFo,
    speed2SpeedBallastConsoDo,
    speed2SpeedLadenKnots,
    speed2SpeedLadenConsoFo,
    speed2SpeedLadenConsoDo,
    speed3SpeedBallastKnots,
    speed3SpeedBallastConsoFo,
    speed3SpeedBallastConsoDo,
    speed3SpeedLadenKnots,
    speed3SpeedLadenConsoFo,
    speed3SpeedLadenConsoDo,
    speed4SpeedBallastKnots,
    speed4SpeedBallastConsoFo,
    speed4SpeedBallastConsoDo,
    speed4SpeedLadenKnots,
    speed4SpeedLadenConsoFo,
    speed4SpeedLadenConsoDo,
  }: {
    name: string
    neoFitted: boolean
    vesselGrabsCapacity: string
    dwt: string
    scub: boolean
    vesselGrabsNumber: string
    draft: string
    co2: boolean
    vesselGeared: boolean
    cubic: string
    portWorkFo: string
    portWorkDo: string
    vesselGrt: string
    loa: string
    portIdleFo: string
    portIdleDo: string
    vesselIceLevel: string
    vesselLbp: string
    yardId: {
      id: string
      label: string
    }
    flagId: {
      id: string
      label: string
    }
    imoNumber: string
    vesselNetTonnage: string
    beam: string
    familyId: {
      id: string
      label: string
    }
    vesselAhlFitted: boolean
    tpc: string
    dateBuilt: string
    vesselBuilderCountry: string
    speed1SpeedBallastKnots: string
    speed1SpeedBallastConsoFo: string
    speed1SpeedBallastConsoDo: string
    speed1SpeedLadenKnots: string
    speed1SpeedLadenConsoFo: string
    speed1SpeedLadenConsoDo: string
    speed2SpeedBallastKnots: string
    speed2SpeedBallastConsoFo: string
    speed2SpeedBallastConsoDo: string
    speed2SpeedLadenKnots: string
    speed2SpeedLadenConsoFo: string
    speed2SpeedLadenConsoDo: string
    speed3SpeedBallastKnots: string
    speed3SpeedBallastConsoFo: string
    speed3SpeedBallastConsoDo: string
    speed3SpeedLadenKnots: string
    speed3SpeedLadenConsoFo: string
    speed3SpeedLadenConsoDo: string
    speed4SpeedBallastKnots: string
    speed4SpeedBallastConsoFo: string
    speed4SpeedBallastConsoDo: string
    speed4SpeedLadenKnots: string
    speed4SpeedLadenConsoFo: string
    speed4SpeedLadenConsoDo: string
  }) {
    return `mutation {
      create_Vessel_item(data: {
        vessel: "${name}",
        neo_fitted: ${neoFitted},
        vessel_grabs_capacity: ${
          vesselGrabsCapacity !== '' ? parseFloat(vesselGrabsCapacity) : null
        },
        dwt: ${dwt !== '' ? `"${parseFloat(dwt)}"` : null},
        scub: ${scub},
        vessel_lbp: ${vesselLbp !== '' ? `${parseFloat(vesselLbp)}` : null},
        vessel_grabs_number: ${
          vesselGrabsNumber !== '' ? parseInt(vesselGrabsNumber) : null
        },
        draft: ${draft !== '' ? `${parseFloat(draft)}` : null},
        co2: ${co2},
        vessel_geared: ${vesselGeared},
        cubic: ${cubic !== '' ? `"${parseFloat(cubic)}"` : null},
        port_work_fo: ${portWorkFo !== '' ? `${parseFloat(portWorkFo)}` : null},
        port_work_do: ${portWorkDo !== '' ? `${parseFloat(portWorkDo)}` : null},
        vessel_grt: ${vesselGrt !== '' ? `"${parseFloat(vesselGrt)}"` : null},
        loa: ${loa !== '' ? `${parseFloat(loa)}` : null},
        port_idle_fo: ${portIdleFo !== '' ? `${parseFloat(portIdleFo)}` : null},
        port_idle_do: ${portIdleDo !== '' ? `${parseFloat(portIdleDo)}` : null},
        vessel_ice_level: "${vesselIceLevel}",
        yard_id: ${parseInt(yardId.id)},
        flag_id: ${parseInt(flagId.id)},
        imo_number: ${imoNumber !== '' ? `"${parseFloat(imoNumber)}"` : null},
        vessel_net_tonnage: ${
          vesselNetTonnage !== '' ? `"${parseFloat(vesselNetTonnage)}"` : null
        },
        beam: ${beam !== '' ? `${parseFloat(beam)}` : null},
        family_id: ${parseInt(familyId.id)},
        vessel_ahl_fitted: ${vesselAhlFitted},
        tpc: ${tpc !== '' ? `${parseFloat(tpc)}` : null},
        date_built: ${dateBuilt !== '' ? `"${dateBuilt}"` : null},
        vessel_builder_country: "${vesselBuilderCountry}",
        speed1_ballast_knots: ${
          speed1SpeedBallastKnots !== ''
            ? `${parseFloat(speed1SpeedBallastKnots)}`
            : null
        },
        speed1_ballast_conso_fo: ${
          speed1SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed1SpeedBallastConsoFo)}`
            : null
        },
        speed1_ballast_conso_do: ${
          speed1SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed1SpeedBallastConsoDo)}`
            : null
        },
        speed1_laden_knots: ${
          speed1SpeedLadenKnots !== ''
            ? `${parseFloat(speed1SpeedLadenKnots)}`
            : null
        },
        speed1_laden_conso_fo: ${
          speed1SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed1SpeedLadenConsoFo)}`
            : null
        },
        speed1_laden_conso_do: ${
          speed1SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed1SpeedLadenConsoDo)}`
            : null
        },
        speed2_ballast_knots: ${
          speed2SpeedBallastKnots !== ''
            ? `${parseFloat(speed2SpeedBallastKnots)}`
            : null
        },
        speed2_ballast_conso_fo: ${
          speed2SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed2SpeedBallastConsoFo)}`
            : null
        },
        speed2_ballast_conso_do: ${
          speed2SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed2SpeedBallastConsoDo)}`
            : null
        },
        speed2_laden_knots: ${
          speed2SpeedLadenKnots !== ''
            ? `${parseFloat(speed2SpeedLadenKnots)}`
            : null
        },
        speed2_laden_conso_fo: ${
          speed2SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed2SpeedLadenConsoFo)}`
            : null
        },
        speed2_laden_conso_do: ${
          speed2SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed2SpeedLadenConsoDo)}`
            : null
        },
        speed3_ballast_knots: ${
          speed3SpeedBallastKnots !== ''
            ? `${parseFloat(speed3SpeedBallastKnots)}`
            : null
        },
        speed3_ballast_conso_fo: ${
          speed3SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed3SpeedBallastConsoFo)}`
            : null
        },
        speed3_ballast_conso_do: ${
          speed3SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed3SpeedBallastConsoDo)}`
            : null
        },
        speed3_laden_knots: ${
          speed3SpeedLadenKnots !== ''
            ? `${parseFloat(speed3SpeedLadenKnots)}`
            : null
        },
        speed3_laden_conso_fo: ${
          speed3SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed3SpeedLadenConsoFo)}`
            : null
        },
        speed3_laden_conso_do: ${
          speed3SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed3SpeedLadenConsoDo)}`
            : null
        },
        speed4_ballast_knots: ${
          speed4SpeedBallastKnots !== ''
            ? `${parseFloat(speed4SpeedBallastKnots)}`
            : null
        },
        speed4_ballast_conso_fo: ${
          speed4SpeedBallastConsoFo !== ''
            ? `${parseFloat(speed4SpeedBallastConsoFo)}`
            : null
        },
        speed4_ballast_conso_do: ${
          speed4SpeedBallastConsoDo !== ''
            ? `${parseFloat(speed4SpeedBallastConsoDo)}`
            : null
        },
        speed4_laden_knots: ${
          speed4SpeedLadenKnots !== ''
            ? `${parseFloat(speed4SpeedLadenKnots)}`
            : null
        },
        speed4_laden_conso_fo: ${
          speed4SpeedLadenConsoFo !== ''
            ? `${parseFloat(speed4SpeedLadenConsoFo)}`
            : null
        },
        speed4_laden_conso_do: ${
          speed4SpeedLadenConsoDo !== ''
            ? `${parseFloat(speed4SpeedLadenConsoDo)}`
            : null
        },
      }) {
        id
          name: vessel
          dwt
          dateBuilt: date_built
          draft
          tpc
          neoFitted: neo_fitted
          scub
          co2
          portWorkFo: port_work_fo
          portIdleDo: port_idle_do
          portWorkDo: port_work_do
          portIdleFo: port_idle_fo
          imoNumber: imo_number
          loa
          speed1BallastKnots: speed1_ballast_knots
          speed1BallastConsoFo: speed1_ballast_conso_fo
          speed1BallastConsoDo: speed1_ballast_conso_do
          speed1LadenKnots: speed1_laden_knots
          speed1LadenConsoFo: speed1_laden_conso_fo
          speed1LadenConsoDo: speed1_laden_conso_do
          speed2BallastKnots: speed2_ballast_knots
          speed2BallastConsoFo: speed2_ballast_conso_fo
          speed2BallastConsoDo: speed2_ballast_conso_do
          speed2LadenKnots: speed2_laden_knots
          speed2LadenConsoFo: speed2_laden_conso_fo
          speed2LadenConsoDo: speed2_laden_conso_do
          speed3BallastKnots: speed3_ballast_knots
          speed3BallastConsoFo: speed3_ballast_conso_fo
          speed3BallastConsoDo: speed3_ballast_conso_do
          speed3LadenKnots: speed3_laden_knots
          speed3LadenConsoFo: speed3_laden_conso_fo
          speed3LadenConsoDo: speed3_laden_conso_do
          speed4BallastKnots: speed4_ballast_knots
          speed4BallastConsoFo: speed4_ballast_conso_fo
          speed4BallastConsoDo: speed4_ballast_conso_do
          speed4LadenKnots: speed4_laden_knots
          speed4LadenConsoFo: speed4_laden_conso_fo
          speed4LadenConsoDo: speed4_laden_conso_do
          grabsCapacity: vessel_grabs_capacity
          grabsNumber: vessel_grabs_number
          geared: vessel_geared
          grt: vessel_grt
          iceLevel: vessel_ice_level
          lbp: vessel_lbp
          netTonnage: vessel_net_tonnage
          ahlFitted: vessel_ahl_fitted
          builderCountry: vessel_builder_country
          cubic
          beam
          yard_id { yard, id }
          flag_id { flag, id }
          family_id { family, id }
        }
    }
    `
  }
}
