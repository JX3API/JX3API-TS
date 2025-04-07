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
  '1103': {
    action: 1103;
    data: {
      zone: string;
      server: string;
      camp_name: string;
      namap_nameme: string;
      castle: string;
      time: number;
    };
  };
  '1104': {
    action: 1104;
    data: {
      zone: string;
      server: string;
      camp_name: string;
      tong_name: string;
      castle: string;
      time: number;
    };
  };
  '1105': {
    action: 1105;
    data: {
      zone: string;
      server: string;
      camp_name: string;
      castle: string;
      time: number;
    };
  };
  '1106': {
    action: 1106;
    data: {
      zone: string;
      server: string;
      camp_name: string;
      tong_list: string[];
      time: number;
    };
  };
  '1107': {
    action: 1107;
    data: {
      zone: string;
      server: string;
      camp_name: string;
      role_name: string;
      item_name: string;
      amount: string;
      time: number;
    };
  };
  '1108': {
    action: 1108;
    data: {
      zone: string;
      server: string;
      tong_a_name: string;
      tong_b_name: string;
      hour: string;
      time: number;
    };
  };
  '1109': {
    action: 1109;
    data: {
      zone: string;
      server: string;
      tong_a_name: string;
      tong_b_name: string;
      time: number;
    };
  };
  '1110': {
    action: 1110;
    data: {
      zone: string;
      server: string;
      tong_a_name: string;
      tong_b_name: string;
      tong_map_name: string;
      time: number;
    };
  };
  '1111': {
    action: 1111;
    data: {
      zone: string;
      server: string;
      tong_a_name: string;
      tong_b_name: string;
      tong_map_name: string;
      victory_tong_name: string;
      score: string;
      time: number;
    };
  };
  '2001': {
    action: 2001;
    data: { zone: string; server: string; status: number };
  };
  '2002': {
    action: 2002;
    data: { class: string; title: string; url: string; date: number };
  };
  '2003': {
    action: 2003;
    data: {
      now_version: string;
      new_version: string;
      package_num: number;
      package_size: string;
    };
  };
  '2004': {
    action: 2004;
    data: {
      class: string;
      server: string;
      name: string;
      title: string;
      url: string;
      date: string;
    };
  };
  '2005': {
    action: 2005;
    data: { server: string; castle: string; start: number };
  };
  '2006': {
    action: 2006;
    data: { name: string; site: string; desc: string; time: number };
  };
};
