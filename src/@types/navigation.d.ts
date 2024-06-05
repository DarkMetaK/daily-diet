export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      meal:
        | {
            id: string
          }
        | undefined
      stats: {
        total: number
        successAmount: number
        failureAmount: number
        successPercentage: number
      }
      feedback: {
        status: 'success' | 'failure'
      }
      details: {
        id: string
      }
    }
  }
}
