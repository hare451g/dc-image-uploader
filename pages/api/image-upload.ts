import Formidable from 'formidable';
import fs from 'fs';

import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
  PageConfig,
} from 'next';

export const config: PageConfig = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const uploadDir = './public/uploads/';

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const form = new Formidable.IncomingForm();
    form.uploadDir = uploadDir;
    form.multiples = false;
    form.keepExtensions = true;

    form.parse(req, (error, fields, files) => {
      if (error) {
        res.status(422).json({
          messages: 'An error occurred when parsing form',
          error,
        });
      }

      const { name, path: originalPath, size, type } = files.file;
      const path = originalPath.substr('public'.length, originalPath.length);

      res.status(200).json({
        file: { size, name, type, path },
        messages: 'Files uploaded successfully',
      });
    });
  } else {
    res.status(403).json({ message: 'Direct access is not allowed' });
  }
};

export default handler;
