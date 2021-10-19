export interface IPages {
  id: number;
  name: string;
  link: string;
  target?: '_blank';
}

export interface IPicoleSabores {
  id: number;
  name: string;
}
export interface IEskimo {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ISorvete {
  id: number;
  name: string;
}

export interface ISorveteTamanhos {
  id: number;
  size: string;
  price: number;
}

export interface IAcai {
  id: number;
  size: string;
  price: number;
}

export interface IPratos {
  id: number;
  name: string;
  size: Array<string>;
  description: string;
  price: number;
}

export interface ISorvetes {
  sabores: Array<ISorvete>;
  sizes: Array<ISorveteTamanhos>;
}

export interface IPicoles {
  comum: {
    sabores: Array<IPicoleSabores>;
    price: number;
  };
  eskimo: Array<IEskimo>;
}

export interface ISalgados {
  assados: {
    sabores: Array<IPratos>;
    price: number;
  };
  fritos: {
    sabores: Array<IPratos>;
    price: number;
  };
}

export interface IProdutos {
  sorvetes: ISorvetes;
  picoles: IPicoles;
  acai: Array<IAcai>;
  porcoes: Array<IPratos>;
  pizzas: Array<IPratos>;
  hamburguer: Array<IPratos>;
  prensado: Array<IPratos>;
  salgados: ISalgados;
  japones: Array<IPratos>;
}
