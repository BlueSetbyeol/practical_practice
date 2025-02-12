import type { RequestHandler } from "express";

import mapRepository from "./mapRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const mapList = await mapRepository.readAll();

    if (mapList !== null) {
      res.json(mapList);
    } else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

export default { browse };
