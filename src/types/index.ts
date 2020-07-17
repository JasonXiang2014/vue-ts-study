type Feature = {
    id: number;
    name: String;
}

type Select = {
    selected: Boolean;
}

export type FeatureSelect = Feature & Select