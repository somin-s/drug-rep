export interface all_Source {
    response : string;
    s_souces : sources;
    totalSources : string;
}

export interface sources {
    sourceID : number;
    nameLabel : string;
    description : string;
    UCICount : number;
    srcUrl: string;
}
