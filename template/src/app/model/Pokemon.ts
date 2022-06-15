export interface IPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: [{
    base_stat: number;
    stat: INamedAPIResource;
  }];
  moves: [{
    move: INamedAPIResource;
  }];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: [{
    type: INamedAPIResource;
  }];
}

export interface INamedAPIResource {
  name: string;
  url: string;
}

export interface ITranslation {
  names: IName[];
}

export interface IName {
  name: string;
  language: {
    name: string;
  };
}

export class Pokemon implements IPokemon {
  id!: number;
  name!: string;
  weight!: number;
  height!: number;
  stats!: [{
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }];
  moves!: [{
    move: {
      name: string;
      url: string;
    };
  }];
  sprites!: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types!: [{
    type: INamedAPIResource;
  }];
}