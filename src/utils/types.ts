export interface CurrencyCode {
    alphabetic: string;
    numeric: string;
}

export interface CurrencyUnitName {
    single: string;
    plural: string;
}

export interface CurrencyName {
    full: string;
    denoymn: string;
    unit: CurrencyUnitName;
    subunit: CurrencyUnitName;
}

export interface Symbol {
    international: string;
    native: string;
}

export interface Entity {
    name: string;
    code: string;
}

export interface CurrencyData {
    entities: Entity[];
    code: CurrencyCode;
    name: CurrencyName;
    symbol: Symbol;
    decimal: number;
    subdivided: number;
}
