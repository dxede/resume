import ServiceBase from './_base-svc';
import EdedeOiwohImage from '../assets/edede-oiwoh.jpg';
import MLFLogo from '../assets/mlf.svg';
import RouteThisLogo from '../assets/routethis.svg';
import SMLogo from '../assets/sm.svg';
import TDLogo from '../assets/td.png';
import UWaterlooLogo from '../assets/uwaterloo.png';
import DownloadIcon from '../assets/download.svg';


class AssetSvc extends ServiceBase {
  assets = {
    EdedeOiwohImage,
    MLFLogo,
    RouteThisLogo,
    SMLogo,
    TDLogo,
    UWaterlooLogo,
    DownloadIcon
  }

  get (name) {
    return this.assets[name];
  }
}

export default new AssetSvc();