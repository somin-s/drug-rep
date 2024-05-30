export interface Compound {
    compound : string;
    sourceID : number;
    type : string;
}

export interface CompoutOutput {
    compounds: compounds;
    notFound: notFound;
    response: string;
    totalCompounds: string;
}
export interface compounds {
    inchi: inchi;
    sources: sources;
    standardInchiKey: string;
    uci: number
}

export interface inchi {
    connections: string;
    formula: string;
    hAtoms: string;
    inchi: string;
}

export interface notFound {

}
export interface sources {
    compoundId: string;
    id: number;
    longName: string;
    url: string;
}
