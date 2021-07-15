import Homepage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import UpComing from '../views/pages/up-coming';
import About from '../views/pages/about';

const routes = {
	'/': Homepage,
	'/up_coming': UpComing,
	'/about': About,
	'/detail/:id': Detail,
};

export default routes;
