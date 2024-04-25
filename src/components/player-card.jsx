export default function PlayerCard({ player }) {
	return (
		<section className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 relative text-xs md:text-md lg:text-lg">
			<img src={player?.image} alt={player?.name} />

			<div className="absolute left-2 w-full bottom-8">
				<h3 className="text-center mina-bold text-white">{player?.name}</h3>
			</div>

			<div className="flex gap-1 absolute text-xs bottom-0 w-40 justify-between left-16">
					<div >
						<h4 className="inter-bold text-white">Age</h4>
						<p className="mina-bold text-white">{player.age}</p>
					</div>
					<div >
						<h4 className="inter-bold text-white">Position</h4>
						<p className="mina-bold text-white">{player.position}</p>
					</div>
					<div >
						<h4 className="inter-bold text-white">Role</h4>
						<p className="mina-bold text-white">{player.role}</p>
					</div>
			</div>

		</section>
	);
}
