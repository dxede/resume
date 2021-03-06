import MLFLogo from '../assets/mlf.svg';
import RouteThisLogo from '../assets/routethis.svg';
import SMLogo from '../assets/sm.svg';
import TDLogo from '../assets/td.png';
import UWaterlooLogo from '../assets/uwaterloo.png';

export default class AssetSvc {
  getLogo (name) {
    return {
      MLFLogo,
      RouteThisLogo,
      SMLogo,
      TDLogo,
      UWaterlooLogo,
    }[name];
  }
}