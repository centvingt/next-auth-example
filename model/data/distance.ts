export interface SlimDistanceFromApiProperties {
  // id: string
  disch_port_id: {
    id: string
    label: string
  }
  canal_id: {
    label: string
  }
  region_bsa_id: {
    label: string
  }
  region_usg_id: {
    label: string
  }
}
export interface SlimDistanceProperties {
  // id: string
  disch_port_id: {
    id: string
    label: string
  }
  canal_id: {
    label: string
  }
  region_bsa_id: {
    label: string
  }
  region_usg_id: {
    label: string
  }
}

export interface SlimDistance extends SlimDistanceProperties {}
export class SlimDistance {
  constructor(slimDistanceFromApi: SlimDistanceFromApiProperties) {}

  static getGraphqlGetSlimDistanceByInputQuery({ input }: { input: string }) {
    return `
    query {
      deliveryOptionsCanal1: Distance(
          limit:-1
          filter: { 
              disch_port_id: { 
                  port: { _contains: "${input}" } 
              }
              canal_id: { 
                  id: { _eq: "1" } 
              }
          }
      ) {
          disch_port_id {
              id
              label: port
          }
          canal_id {
              label: canal
          }
          region_bsa_id {
              label: canal_ballast_region
          }
          region_usg_id {
              label: canal_ballast_region
          }
      }
      deliveryOptionsCanal2: Distance(
          limit:-1
          filter: { 
              
              disch_port_id: { 
                  port: { _contains: "${input}" } 
              }
              canal_id: { 
                  id: { _eq: "2" } 
              }
          }
      ) {
          disch_port_id {
              id
              label: port
          }
          canal_id {
              label: canal
          }
          region_bsa_id {
              label: canal_ballast_region
          }
          region_usg_id {
              label: canal_ballast_region
          }
      }
      deliveryOptionsCanal3: Distance(
          limit:-1
          filter: { 
              
              disch_port_id: { 
                  port: { _contains: "${input}" } 
              }
              canal_id: { 
                  id: { _null:true } 
              }
          }
      ) {
          disch_port_id {
              id
              label: port
          }
          canal_id {
              label: canal
          }
          region_bsa_id {
              label: canal_ballast_region
          }
          region_usg_id {
              label: canal_ballast_region
          }
      }
      
  }
    `
  }
}

export interface DistanceFromApiProperties {
  id: string
  disch_port_id: {
    id: string
    label: string
  }
  canal_id: {
    id: string
    label: string
  } | null
  region_bsa_id: {
    id: string
    label: string
  }
  region_usg_id: {
    id: string
    label: string
  }
  totalDistance: number
  secaDistance: number
}
export interface DistanceProperties {
  id: string
  dischPort: {
    id: string
    label: string
  }
  canal: {
    id: string
    label: string
  } | null
  regionBsa: {
    id: string
    label: string
  }
  regionUsg: {
    id: string
    label: string
  }
  totalDistance: number
  secaDistance: number
}

export interface Distance extends DistanceProperties {}
export class Distance {
  constructor(distanceFromApi: DistanceFromApiProperties) {
    this.id = distanceFromApi.id
    this.dischPort = distanceFromApi.disch_port_id
    this.canal = distanceFromApi.canal_id
    this.regionBsa = distanceFromApi.region_bsa_id
    this.regionUsg = distanceFromApi.region_usg_id
    this.totalDistance = distanceFromApi.totalDistance
    this.secaDistance = distanceFromApi.secaDistance
  }

  // static getDistanceByDischLoadPortQuery({
  //   dischPortId,
  //   canalId,
  //   loadPortId,
  // }: {
  //   dischPortId: string
  //   canalId: string | undefined | null
  //   loadPortId: string
  // }) {
  //   return `
  //     query {
  //         distanceByDischLoadPort: Distance(
  //         filter: {
  //           disch_port_id: {
  //             id: { _eq: "${dischPortId}" }
  //           },
  //           ${canalId ? `canal_id: { id: { _eq: "${canalId}" } },` : ''}
  //           load_port_id: {
  //             id: { _eq: "${loadPortId}" }
  //           }
  //         }
  //       ) {
  //           disch_port_id {
  //             id
  //             label:port
  //           }
  //           canal_id {
  //             id
  //             label:canal
  //           }
  //           region_bsa_id {
  //             id
  //             label:canal_ballast_region
  //           }
  //           region_usg_id {
  //             id
  //             label:canal_ballast_region
  //           }
  //           totalDistance: total_distance
  //           secaDistance: seca_distance
  //         }
  //     }
  //   `
  // }

  static getDistanceByDischLoadPortQuery({ vessel, bki }: FetchParams) {
    return `
      query {
          vessel: Distance(
          filter: {
            disch_port_id: { 
              id: { _eq: "${vessel.dischPortId}" }
            },
            ${
              vessel.canalId
                ? `canal_id: { id: { _eq: "${vessel.canalId}" } },`
                : ''
            }
            load_port_id: {
              id: { _eq: "${vessel.loadPortId}" }
            }
          }
        ) {
            id
            disch_port_id {
              id
              label:port
            }
            canal_id {
              id
              label:canal
            }
            region_bsa_id {
              id
              label:canal_ballast_region
            }
            region_usg_id {
              id
              label:canal_ballast_region
            }
            totalDistance: total_distance
            secaDistance: seca_distance
          }
          bki: Distance(
            filter: {
              disch_port_id: { 
                id: { _eq: "${bki.dischPortId}" }
              },
              ${
                bki.canalId
                  ? `canal_id: { id: { _eq: "${bki.canalId}" } },`
                  : ''
              }
              load_port_id: {
                id: { _eq: "${bki.loadPortId}" }
              }
            }
          ) {
              id
              disch_port_id {
                id
                label:port
              }
              canal_id {
                id
                label:canal
              }
              region_bsa_id {
                id
                label:canal_ballast_region
              }
              region_usg_id {
                id
                label:canal_ballast_region
              }
              totalDistance: total_distance
              secaDistance: seca_distance
            }
      }
    `
  }
}

export interface FetchVesselParams {
  dischPortId: string
  canalId: string | undefined | null
  loadPortId: string
}
export interface FetchParams {
  vessel: FetchVesselParams
  bki: FetchVesselParams
}
