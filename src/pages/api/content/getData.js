import * as fs from "fs";

export default function handeGetData(req, res) {
    fs.readFile(`JSON/${req.query.pid}`, "utf-8", (err, data) => {
      if (err) {
        res.status(500).json({
          errorCode: 500,
          status: "Not Found",
        });
      } else {
        console.log(req.query.pid);
        res.status(200).json(JSON.parse(data));
      }
    });
}
