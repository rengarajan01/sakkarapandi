const PlayerBanner = () => {
	return (
		<div className="h-fit p-4 md:p-8 lg:p-16 bg-[url('/public/assets/images/banner.svg')] w-full space-y-4 bg-[#1A1864]">
			<div className="flex justify-center items-center ">
				<img className="w-4/12 mr-3" src="assets/images/wicket-keeper.png" alt="" />
				<img className="w-6/12 ml-3" src="assets/images/vice-captain.png" alt="" />
			</div>

			<div className="flex justify-center items-center">
				<img className="w-5/12 mr-3" src="assets/images/captain-banner.png" alt="" />
				<img className="w-5/12 ml-3" src="assets/images/natchathira-attakarar.png" alt="" />
			</div>
		</div>
	);
}

export default PlayerBanner;