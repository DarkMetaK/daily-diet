export function numberToPercentage(n: number): string {
  return (
    n.toLocaleString('pt-BR', {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 2,
    }) + '%'
  )
}
