export type WsEvent = {
  '1001': {
    action: 1001;
    data: {
      zone: string;
      server: string;
      name: string;
      event: string;
      level: number;
      time: number;
    };
  };
  '1002': {
    action: 1002;
    data: {
      zone: string;
      server: string;
      map_name: string;
      min_time: number;
      max_time: number;
      level: number;
      time: number;
    };
  };
  '1003': {
    action: 1003;
    data: {
      zone: string;
      server: string;
      name: string;
      map_name: string;
      level: number;
      horse: string;
      time: number;
    };
  };
  '1004': {
    action: 1004;
    data: { zone: string; server: string; time: number };
  };
  '1005': {
    action: 1005;
    data: { zone: string; server: string; time: number };
  };
  '1006': {
    action: 1006;
    data: { zone: string; server: string; name: string[]; time: number };
  };
  '1007': {
    action: 1007;
    data: {
      zone: string;
      server: string;
      name: string;
      map_name: string;
      sender: string;
      receive: string;
      time: number;
    };
  };
  '1008': {
    action: 1008;
    data: {
      zone: string;
      server: string;
      role_name: string;
      map_name: string;
      name: string;
      time: number;
    };
  };
  '1009': {
    action: 1009;
    data: {
      zone: string;
      server: string;
      subserver: string;
      name: string;
      time: number;
    };
  };
  '1010': {
    action: 1010;
    data: { zone: string; server: string; map_name: string; time: number };
  };
  '1012': {
    action: 1012;
    data: {
      zone: string;
      server: string;
      name: string;
      map_name: string;
      time: number;
    };
  };
  '1013': {
    action: 1013;
    data: {
      zone: string;
      server: string;
      role_name: string;
      camp_name: string;
      map_name: string;
      level: number;
      name: string;
      time: number;
    };
  };
  '1014': {
    action: 1014;
    data: {
      zone: string;
      server: string;
      role_name: string;
      camp_name: string;
      name: string;
      amount: string;
      time: number;
    };
  };
  '1101': {
    action: 1101;
    data: {
      zone: string;
      server: string;
      castle: string;
      camp_name: string;
      time: number;
    };
  };
  '1102': {
    action: 1102;
    data: { zone: string; server: string; name: string; time: number };
  };
  '2005': {
    action: 2005;
    data: { server: string; castle: string; start: number };
  };
};
