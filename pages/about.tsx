import Header from "../components/Header";
import Footer from "../components/Footer";

function about() {
  return (
    <div>
      <Header />
      <div className="p-text flex flex-col text-left justify-center w-[60vw] py-10">
        <div className="my-5 space-y-5">
          <h2>Welcome!</h2>
          <p className="px-10">
            collectors, curators, artists, and community members. Integrating
            blockchain art into everyday lives in an easy-to-use multimedia
            experience. A cross-blockchain NFT media player and creation suite.
          </p>

          <p className="px-10">
            AMBL is seamless interaction between community, artist, and brand: A
            self sustaining ecosystem driven by entertainment. The future of
            Web3 removes the middle-man, and puts the power in the hands of the
            individual.
          </p>
          <ul className="px-10">
            <li>Music and visuals are supplied directly from the artist</li>
            <li>
              Brands compete for top ad placement through the AMBL ecosystem
            </li>
            <li>
              Community members are rewareded for playing content, and staking
              in their favorite artists
            </li>
          </ul>
        </div>

        <div className="my-3 text-center">
          <div>
            <h2>It's Web3 Spotify on Steroids</h2>
            <div>
              <ul>
                <li>responsive, generative music visualizers</li>
                <li>unlock exclusive artistic content</li>
                <li>curate your NFT profile</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>player themes from your NFTs</li>
                <li>music and visual playlists</li>
                <li>play to earn rewards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-2 space-y-5">
          <h2>Collectors</h2>
          <p className="px-10">
            COLLECTORS have the freedom to customize their NFT profile. Enhance
            your media experience. Connect to your favorite blockchains
            (Ethereum, Solana, Tezos, Near), showcase your NFTs with a range of
            playback options. Earn AMBL rewards for supplying assets and sharing
            your favorite pieces.
          </p>
        </div>

        <div className="my-2 space-y-5">
          <h2>Artists</h2>
          <p className="px-10">
            AMBL encourages responsive and generative artwork. ARTISTS can mint
            an NFT to their blockchain of choice, and add their work to the AMBL
            library of visualizations, to be used along with the audio player.
          </p>
          <p className="px-10">
            Artists can create responsive artwork themselves, or users can apply
            'filters' from a playlist, turning your jpgs into living photos.
            Responsive and generative artists are supported in a range of
            industry standard languages (p5, processing, unity, blender).
            Traditional artists have straightforward access to sophisticated
            minting tools, and can save on fees when paying with the AMBL token.
          </p>
        </div>
        <div className="my-2 space-y-5">
          <h2>Curators</h2>
          <p className="px-10">
            As AMBL's library of content grows, CURATORS will have an enormous
            collection of NFTs at their fingertips. Curators can spend AMBL to
            make playlists, or bid for advertizing space. Built-in social
            platforms help connect with artists, collectors and community
            members. Curators have the creative freedom to create a truly
            customizable audio and visual experience for their followers and
            clients.
          </p>
        </div>

        <div className="my-2 space-y-5">
          <h2>Community</h2>
          <p className="px-10">
            All AMBL users have access to the comprehensice library of
            visualizations, and the power to connect them to your favorite audio
            player. COMMUNITY MEMBERS will have an experience catered by an
            ever-growing group of artists, collectors, and curators. Experience
            customized playlists, or import your existing content. Community
            members can create themes, customize the player, and collect rewards
            for simply being a part of the community.
          </p>
        </div>
        <div className="my-2 space-y-5">
          <h2>Tokenomics</h2>
          <p className="px-10">
            The Ambient Landscapes economy will be managed by the AMBL token.
          </p>

          <div className="space-y-5">
            <div className="my-3 text-center">
              <p>Earn AMBL for...</p>
              <ul>
                <li>staking their NFTs</li>
                <li>staking AMBL with their favorite artists</li>
                <li>playing media through the platform</li>
                <li>importing existing NFT's</li>
                <li>receiving views</li>
              </ul>
            </div>

            <div className="my-3 text-center">
              <p>Spend AMBL on...</p>
              <ul>
                <li>minting NFT's</li>
                <li>voting on popular content</li>
                <li>tipping creators and curators</li>
                <li>promotions and advertising</li>
                <li>swapping on DEX</li>
              </ul>
            </div>
          </div>

          <p>Tokens are reinvested into the AMBL economy on a weekly basis.</p>
        </div>

        <div className="my-2 space-y-5">
          <h2>Social Impact</h2>
          <p className="px-10">
            One of the biggest hurdles to large-scale blockchain adoption, is
            its resource consumption. Though this is a short term concern, it
            does not change the fact that our planet's natural resources have
            been squandered since the turn of the 20th century.
          </p>

          <p className="px-10">
            AMBL's goal is to donate 10% of the revenue from advertising and
            voting to reforestation, and environmental cleanup. Let's make it
            possible for our grandchildren to mint their own landscape
            photography.
          </p>
        </div>

        {/* <!-- ROAD MAP --> */}
        <div className="my-2 space-y-5">
          <h2>Road Map</h2>
          <div className="">
            <p className="">2022</p>
            <ul>
              <p className="">June - Development</p>
              <li>Support for ETH</li>
            </ul>

            <ul>
              <p className="">August - Beta Testing</p>
              <li>Whitelisting within discord community</li>
              <li>Support for MATIC</li>
            </ul>

            <ul>
              <p className="">October - Widen and Scale</p>
              <li>Partnerships across marketplaces</li>
              <li>Incorporate feature requests</li>
            </ul>

            <ul>
              <p className="">December - Full user onboarding</p>
              <li>Support for AVAX</li>
            </ul>
          </div>

          <div className="">
            <p className="">2023</p>
            <ul>
              <p className="">February - AMBL ICO</p>
              <li>Beginnings of the AMBL ecosystem</li>
              <li>Advertising, and staking</li>
              <li>Support for SOL</li>
            </ul>
            <p className="">June - Support for XTZ</p>
            <p className="">October - Support for NEAR </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
