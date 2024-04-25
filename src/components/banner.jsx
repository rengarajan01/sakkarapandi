export default function PlayerBanner() {
  return (
    <div
      style={{ backgroundColor: "#1A1864" }}
      className="h-fit p-4 md:p-8 lg:p-16 banner-background w-full space-y-4"
    >
     <div className="flex justify-center items-center ">
        <img className="w-4/12 mr-3" src="assets/wicket-keeper.png" alt="" />
        <img  className="w-6/12 ml-3" src="assets/vice-captain.png" alt="" />
      </div>

      <div className="flex justify-center items-center">
        <img className="w-5/12 mr-3" src="assets/captain-banner.png" alt="" />
        <img  className="w-5/12 ml-3" src="assets/natchathira-attakarar.png" alt="" />
      </div>
    </div>
  );
}
