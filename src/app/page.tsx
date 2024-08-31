import AboutHerow from '@/components/modules/Main/AboutHero/AboutHerow';
import TourList from '@/components/modules/TourList/TourList';
import Advantages from '@/components/modules/Advantages/Advantages';
import GalleryBlock from '@/components/modules/GalleryBlock/GallaryBlock';

export default function Home() {
	return (
		<>
			<AboutHerow />
			<TourList />
			<Advantages />
			<GalleryBlock />
		</>
	);
}
