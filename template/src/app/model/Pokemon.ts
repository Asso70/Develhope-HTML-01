export interface IPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: [{
    stat: {
      name: string;
    };
    base_stat: number;
  }];
  moves: [{
    move: {
      name: string;
    };
  }];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: IPokeType[];
}

export interface IPokeType {
  type: {
    name: string;
    url: string;
  }
}

export interface IType {
  names: ITranslation[];
}

export interface ITranslation {
  name: string;
  language: {
    name: string;
  }
}

export class Pokemon implements IPokemon {
  id!: number;
  name!: string;
  weight!: number;
  height!: number;
  stats!: [{
    stat: {
      name: string;
    };
    base_stat: number;
  }];
  moves!: [{
    move: {
      name: string;
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
  types!: IPokeType[];
}