export default function handlerData(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ requestPromise: "handlerPromise" });
  }
}
