import PlayerBanner from "../components/banner";
import Footer from "../components/footer";
import PlayerCard from "../components/player";

function App() {
	const players = [
		{
			name: "Vibe Vipin",
			age: "22",
			position: "4 Line",
			role: "Batsman",
			image: "assets/images/players/vipin.png",
		},
		{
			name: "Sharpu Sathish",
			age: "28",
			position: "4 Line",
			role: "Batsman",
			image: "assets/images/players/sathish.png",
		},
		{
			name: "Moratu Adi Muthu",
			age: "23",
			position: "Slip",
			role: "Batsman",
			image: "assets/images/players/muthaiyan.png",
		},
		{
			name: "Lordu Loki",
			age: "22",
			position: "Middle",
			role: "Bowler",
			image: "assets/images/players/loki.png",
		},
		{
			name: "Rugged Renga",
			age: "24",
			position: "Slip",
			role: "Undefined",
			image: "assets/images/players/renga.png",
		},
		{
			name: "Gold Star Guru",
			age: "22",
			position: "WK",
			role: "Batsman",
			image: "assets/images/players/guru.png",
		},
		{
			name: "Notorious Navaneeth",
			age: "27",
			position: "Middle",
			role: "Bowler",
			image: "assets/images/players/navaneeth.png",
		},
	];
	return (
		<main>
			<img loading="lazy" className="100vh w-full" src="assets/images/banner.png" alt="hero banner" />

			<h2 className="text-md md:text-2xl lg:text-3xl md:my-12 text-center font-bold text-neutral-900 mina-bold">Our Team</h2>

			<div className="flex items-center justify-center">
				<section className="mb-20 grid lg:grid-cols-4 grid-cols-2 gap-8 gap-y-20">
					{players.map((player, index) => (
						<PlayerCard key={index} player={player} />
					))}
				</section>
			</div>

			<PlayerBanner />
			
			<img className="p-4 md:p-20" src="assets/images/banner2.png" alt="banner-2" />

			<Footer />

			<audio autoPlay>
				<source src="assets/audio/crowd-audio.mp3" type="audio/mpeg" />
			</audio>
		</main>
	);
}

export default App;
