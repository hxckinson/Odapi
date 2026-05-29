/**
 * Investment Calculation Utilities
 * Implements the geometric sequence formula: U₀ × r^n = Result
 */

/**
 * Calculate ROI (final result)
 * Formula: result = U₀ × r^n
 * @param {number} initialAmount - U₀ (somme de départ)
 * @param {number} growthRate - r in percentage
 * @param {number} iterations - n (nombre d'itérations)
 * @returns {number} Final result
 */
export const calculateROI = (initialAmount, growthRate, iterations) => {
  if (!initialAmount || growthRate === undefined || iterations === undefined) {
    throw new Error('Tous les paramètres sont requis');
  }
  const r = (growthRate / 100) + 1;
  return initialAmount * Math.pow(r, iterations);
};

/**
 * Calculate iterations (number of periods)
 * Formula: n = log(result/U₀) / log(r)
 * @param {number} initialAmount - U₀
 * @param {number} growthRate - r in percentage
 * @param {number} targetResult - Desired final amount
 * @returns {number} Number of iterations
 */
export const calculateIterations = (initialAmount, growthRate, targetResult) => {
  if (!initialAmount || growthRate === undefined || !targetResult) {
    throw new Error('Tous les paramètres sont requis');
  }
  if (targetResult < initialAmount) {
    throw new Error('Le résultat final doit être ≥ à la somme de départ');
  }
  const r = (growthRate / 100) + 1;
  if (r === 1) {
    throw new Error('Le taux ne peut pas être 0%');
  }
  return Math.log(targetResult / initialAmount) / Math.log(r);
};

/**
 * Calculate growth rate (taux par itération)
 * Formula: r = (result/U₀)^(1/n)
 * @param {number} initialAmount - U₀
 * @param {number} iterations - n
 * @param {number} targetResult - Desired final amount
 * @returns {number} Growth rate in percentage
 */
export const calculateGrowthRate = (initialAmount, iterations, targetResult) => {
  if (!initialAmount || !iterations || !targetResult) {
    throw new Error('Tous les paramètres sont requis');
  }
  if (iterations === 0) {
    throw new Error('Le nombre d\'itérations doit être > 0');
  }
  if (targetResult < initialAmount) {
    throw new Error('Le résultat final doit être ≥ à la somme de départ');
  }
  const r = Math.pow(targetResult / initialAmount, 1 / iterations);
  return (r - 1) * 100;
};

/**
 * Calculate initial amount (somme de départ)
 * Formula: U₀ = result / r^n
 * @param {number} growthRate - r in percentage
 * @param {number} iterations - n
 * @param {number} targetResult - Desired final amount
 * @returns {number} Initial amount needed
 */
export const calculateInitialAmount = (growthRate, iterations, targetResult) => {
  if (growthRate === undefined || !iterations || !targetResult) {
    throw new Error('Tous les paramètres sont requis');
  }
  const r = (growthRate / 100) + 1;
  return targetResult / Math.pow(r, iterations);
};

/**
 * Format result based on category
 * @param {number} result - Calculated result
 * @param {string} category - Category type (RoI, iterations, ratio, depart)
 * @returns {string} Formatted result string
 */
export const formatResult = (result, category) => {
  switch (category) {
    case 'RoI':
      return `${result.toFixed(2)} €`;
    case 'iterations':
      return `${Math.ceil(result)} itérations (${result.toFixed(2)})`;
    case 'ratio':
      return `${result.toFixed(2)}%`;
    case 'depart':
      return `${result.toFixed(2)} €`;
    default:
      return result.toFixed(2);
  }
};

export default {
  calculateROI,
  calculateIterations,
  calculateGrowthRate,
  calculateInitialAmount,
  formatResult,
};
