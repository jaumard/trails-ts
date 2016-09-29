'use strict'

import {Request, Response} from 'express'
import * as Controller from 'trails-controller'

module.exports = class ViewController extends Controller {
  ng(req: Request, res: Response) {

    res.json({});
  }
}
