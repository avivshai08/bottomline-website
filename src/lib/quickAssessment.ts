export const TA_BANDS = [
  { id: "A", maxAnnual: 500_000, profit: 0.05, owner: 0.5, tax: 0.15, opex: 0.3 },
  { id: "B", maxAnnual: 1_000_000, profit: 0.1, owner: 0.35, tax: 0.15, opex: 0.4 },
  { id: "C", maxAnnual: 2_000_000, profit: 0.15, owner: 0.2, tax: 0.15, opex: 0.5 },
  { id: "D", maxAnnual: 5_000_000, profit: 0.1, owner: 0.1, tax: 0.15, opex: 0.65 },
  { id: "E", maxAnnual: 10_000_000, profit: 0.15, owner: 0.05, tax: 0.15, opex: 0.65 },
  { id: "F", maxAnnual: Number.POSITIVE_INFINITY, profit: 0.2, owner: 0, tax: 0.15, opex: 0.65 },
] as const;

export type BandId = (typeof TA_BANDS)[number]["id"];

export type AssessmentInput = {
  income: number;
  materials: number;
  vat: number;
  profit: number;
  owner: number;
  tax: number;
  opex: number;
};

export type BucketKey = "profit" | "owner" | "tax" | "opex";

export type BucketResult = {
  key: BucketKey;
  current: number;
  targetPct: number;
  targetAmount: number;
  gap: number;
};

export function bandForAnnual(annual: number) {
  if (annual <= 0) return null;
  if (annual > 10_000_000) return TA_BANDS[5];
  if (annual > 5_000_000) return TA_BANDS[4];
  if (annual > 2_000_000) return TA_BANDS[3];
  if (annual > 1_000_000) return TA_BANDS[2];
  if (annual > 500_000) return TA_BANDS[1];
  return TA_BANDS[0];
}

export function computeAssessment(input: AssessmentInput) {
  const realRevenue = input.income - input.materials - input.vat;
  const annual = realRevenue * 12;
  const band = bandForAnnual(annual);

  if (!band || realRevenue <= 0) {
    return { realRevenue, annual, band: null, buckets: null as BucketResult[] | null };
  }

  const buckets: BucketResult[] = (
    [
      ["profit", input.profit, band.profit],
      ["owner", input.owner, band.owner],
      ["tax", input.tax, band.tax],
      ["opex", input.opex, band.opex],
    ] as const
  ).map(([key, current, targetPct]) => {
    const targetAmount = Math.round(realRevenue * targetPct);
    return {
      key,
      current,
      targetPct,
      targetAmount,
      gap: targetAmount - current,
    };
  });

  return { realRevenue, annual, band, buckets };
}

export function parseWholeNumber(raw: string): number {
  const digits = raw.replace(/[^\d]/g, "");
  if (!digits) return 0;
  return Number(digits);
}

export function formatShekel(value: number) {
  return new Intl.NumberFormat("he-IL").format(Math.round(value));
}

export function formatSignedShekel(value: number) {
  const abs = formatShekel(Math.abs(value));
  if (value > 0) return `+${abs}`;
  if (value < 0) return `−${abs}`;
  return abs;
}

export function formatPct(value: number) {
  return `${Math.round(value * 100)}%`;
}
