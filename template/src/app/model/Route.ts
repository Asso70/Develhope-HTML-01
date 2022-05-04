export interface ICovidRoute {
  routeType: string;
  route: IRoute;
}

export interface IRoute {
  name: string;
  description: string;
  Path: string; //"P" maiuscolo?!
}

export class CovidRoute implements ICovidRoute {
  routeType: string;
  route: IRoute;

  constructor(routeType: string, route: IRoute) {
    this.routeType = routeType;
    this.route = route;
  }
}