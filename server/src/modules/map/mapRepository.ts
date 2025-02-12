import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Exploration = {
  id: number;
  city_name: string;
  latitude: number;
  longitude: number;
  description: string;
  year: number;
  img: string;
};

class mapRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from exploring_map",
    );
    return rows as Exploration[];
  }
}

export default new mapRepository();
