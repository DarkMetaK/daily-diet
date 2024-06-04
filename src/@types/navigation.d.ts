export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      meal: undefined
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
