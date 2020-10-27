import * as functions from 'firebase-functions';
import * as firebaseAdmin from 'firebase-admin';
import * as _cors from 'cors';
import configSvc from './settings';

firebaseAdmin.initializeApp();
const db = firebaseAdmin.firestore();
const cors = _cors({ origin: configSvc.hosts });

/**
 * Log site errors to Firestore
 */
export const logSiteError = functions.https.onRequest(async (req, res) => {
  if (!req.body) {
    res.status(400).send();
  } else if (!configSvc.hosts.includes(req.hostname)) {
    res.status(403).send();
  } else {
    return cors(req, res, async () => {
      try {
        const log = await db.collection('site-errors').add({
          time: Date.now(),
          ip: req.ip || 'none detected',
          browser: req.headers["user-agent"] || 'none detected',
          error: req.body
        });
      
        res.status(200).send({ success: true, doc: log?.id });
      } catch (error) {
        res.status(500).send({ success: false, message: error?.message  });
      }
    });
  }
});
