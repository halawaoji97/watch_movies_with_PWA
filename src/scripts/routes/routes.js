import Homepage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import UpComing from '../views/pages/up-coming';
import About from '../views/pages/about';
import Favorite from '../views/pages/favorite';

const routes = {
	'/': Homepage,
	'/up_coming': UpComing,
	'/about': About,
	'/detail/:id': Detail,
	'/favorite': Favorite,
};

export default routes;
