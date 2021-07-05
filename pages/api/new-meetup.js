// api

function handler(req, res) {
  // finn ut om POST, GET ....
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    // store in db...
  }
}

export default handler;
