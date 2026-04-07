import * as React from "react"
import { useState, useRef } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "./blog.scss"

const blogPosts = [
  {
    id: 1,
    slug: "hidden-gems-ambergris-caye",
    title: "Hidden Gems of Ambergris Caye",
    date: "March 28, 2025",
    category: "Exploration",
    excerpt:
      "Beyond the bustling streets of San Pedro lies a world of secluded beaches, vibrant coral reefs, and untouched mangrove forests waiting to be discovered.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&auto=format&fit=crop",
    content: `
      <p>Ambergris Caye is Belize's largest island, and while San Pedro draws visitors from around the world, the island holds countless secrets just waiting to be uncovered by the adventurous traveller.</p>
      <h3>The Northern Tip</h3>
      <p>Venture north of town and you'll discover a landscape transformed. The road gives way to golf cart trails, and the crowds thin dramatically. Small fishing communities dot the coastline, where locals still harvest lobster and conch using traditional methods passed down through generations.</p>
      <p>Here, the barrier reef sits just a few hundred meters offshore. On calm mornings, the water takes on an impossible shade of turquoise, so clear you can see a hundred feet down to the sandy bottom below.</p>
      <h3>Secret Snorkel Spots</h3>
      <p>While Hol Chan Marine Reserve brings coaches of visitors daily, local dive masters know of private patch reefs along the southern half of the island. The coral formations here are equally impressive — towering brain corals, fields of elkhorn, and rainbow parrotfish as big as your arm.</p>
      <p>Ask your concierge at Mata Rocks to arrange a private snorkel trip. Our guides have been exploring these waters for 20+ years and know exactly where to find the sea turtles, spotted eagle rays, and nurse sharks that call this reef home.</p>
      <h3>Bacalar Chico National Park</h3>
      <p>At the island's northern tip, Bacalar Chico is a UNESCO World Heritage site and one of Belize's most pristine wilderness areas. Accessible only by boat, the park encompasses 12,000 acres of coastal lagoons, dry tropical forest, and offshore coral reef.</p>
      <p>Ancient Maya trading routes once cut through this landscape — you can still visit the ruins at San Juan, a small ceremonial site hidden in the jungle. The boat ride alone is worth it, passing through a channel hand-dug by the ancient Maya themselves.</p>
    `,
  },
  {
    id: 2,
    slug: "belize-cuisine-guide",
    title: "A Foodie's Guide to Belizean Cuisine",
    date: "March 15, 2025",
    category: "Food & Culture",
    excerpt:
      "From fresh-caught seafood grilled on the beach to traditional rice and beans cooked in coconut milk, Belizean food is a delicious reflection of the country's multicultural heritage.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
    content: `
      <p>Belizean cuisine is a beautiful fusion — part Caribbean, part Mayan, part Creole, with influences from the Garifuna, Mennonite, and East Indian communities that have called this small nation home for centuries.</p>
      <h3>Rice and Beans: The National Dish</h3>
      <p>Every Belizean meal begins here. Red kidney beans slow-cooked with coconut milk, thyme, and recado, served alongside long-grain white rice. It sounds simple, but the depth of flavour is extraordinary. Pair it with stewed chicken, fried plantains, and a cup of fresh coconut water.</p>
      <h3>Seafood on Ambergris Caye</h3>
      <p>The island's proximity to the Mesoamerican Barrier Reef means seafood is extraordinarily fresh. Lobster season runs from July to February — during this time, you'll find it grilled, curried, in tacos, and stuffed into burritos. Conch fritters are a staple bar snack, and whole fried snapper is served at almost every restaurant in town.</p>
      <p>At our restaurant here at Mata Rocks, we work directly with local fishermen to source the freshest catch of the day. Our chef, born and raised in San Pedro, brings generations of knowledge to every dish.</p>
      <h3>Hudut: A Garifuna Classic</h3>
      <p>The Garifuna people of southern Belize have one of the most distinctive culinary traditions in the country. Hudut is their signature dish — a fish stew made with coconut milk and served with mashed plantain (called "fufu"). It's rich, warming, and unlike anything else you'll eat on the island.</p>
      <h3>Marie Sharp's Hot Sauce</h3>
      <p>No visit to Belize is complete without discovering this iconic condiment. Made from habanero peppers grown in the Stann Creek Valley, Marie Sharp's hot sauce is exported worldwide but tastes best when bought directly from a corner store in Belize. It comes in every heat level from mild to belizean heat.</p>
    `,
  },
  {
    id: 3,
    slug: "diving-belize-barrier-reef",
    title: "Diving the Mesoamerican Barrier Reef",
    date: "February 28, 2025",
    category: "Adventure",
    excerpt:
      "The second-largest barrier reef system in the world stretches 300 kilometres along Belize's coastline. Here's your complete guide to diving its most iconic sites.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&auto=format&fit=crop",
    content: `
      <p>The Belize Barrier Reef is a UNESCO World Heritage Site and one of the most biodiverse marine ecosystems on the planet. For divers, it represents a bucket-list destination of the highest order.</p>
      <h3>The Great Blue Hole</h3>
      <p>Perhaps Belize's most iconic dive site, the Great Blue Hole is a perfectly circular marine sinkhole 300 metres wide and 125 metres deep. Jacques Cousteau declared it one of the top dive sites in the world, and decades later, it remains just as spectacular.</p>
      <p>The descent into the Blue Hole reveals massive stalactites formed during the last ice age, when the cave was above water. At depth, Caribbean reef sharks circle lazily in the blue abyss. It's a dive that changes you.</p>
      <h3>Hol Chan Marine Reserve</h3>
      <p>Just 4 miles south of San Pedro, Hol Chan is Belize's oldest and most popular marine reserve. The channel — "hol chan" means "little channel" in Mayan — cuts through the reef, creating a natural corridor teeming with life.</p>
      <p>Green and loggerhead sea turtles are almost guaranteed sightings, along with nurse sharks, spotted eagle rays, and enormous schools of blue tang, angelfish, and parrotfish. The coral formations here are pristine.</p>
      <h3>Shark Ray Alley</h3>
      <p>Part of the Hol Chan reserve, Shark Ray Alley is a shallow sandy area where nurse sharks and southern stingrays congregate in extraordinary numbers. Snorkellers can interact with these animals at the surface — an absolutely surreal experience.</p>
      <h3>Planning Your Dive Trip from Mata Rocks</h3>
      <p>We partner with San Pedro's finest dive operators to offer our guests premium diving packages. From beginner discover scuba sessions to multi-day liveaboard excursions to the atolls, our concierge team can arrange the perfect underwater adventure.</p>
    `,
  },
  {
    id: 4,
    slug: "sunset-sailing-san-pedro",
    title: "The Magic of Sunset Sailing in San Pedro",
    date: "February 10, 2025",
    category: "Experiences",
    excerpt:
      "There are few experiences in the world as perfectly cinematic as watching the Caribbean sun melt into the horizon from the deck of a sailing catamaran.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&auto=format&fit=crop",
    content: `
      <p>San Pedro sunsets are legendary. The sky turns from deep blue to amber to a burning rose-gold, reflected perfectly in the glassy Caribbean waters. And the best seat in the house? The deck of a catamaran, a rum punch in hand, somewhere between the reef and the horizon.</p>
      <h3>What to Expect on a Sunset Sail</h3>
      <p>Most sunset sailing tours depart from the beachfront piers at around 4:30pm, giving you time to get out past the reef before the sky puts on its show. The typical tour lasts two to three hours, cruising north along the island's leeward coast with the trade winds in your sails.</p>
      <p>Most boats include an open bar — local Belikin beer, rum punch, and fresh fruit are standard. Some operators add live music or a small snack spread. Sunset viewing is guaranteed; what happens after is up to you.</p>
      <h3>Best Spots to See From the Water</h3>
      <p>From a sailboat, you'll get a perspective of Ambergris Caye that most tourists never see. The town of San Pedro looks like a Caribbean postcard from the water — colourful buildings, swaying palms, and the endless reef stretching north and south as far as the eye can see.</p>
      <h3>Booking Through Mata Rocks</h3>
      <p>We've curated relationships with San Pedro's best sailing operators. Our guests receive priority booking, preferred rates, and a convenient pier-side pickup. Ask our front desk to arrange your sunset sail — we recommend booking at least a day in advance during peak season.</p>
    `,
  },
  {
    id: 5,
    slug: "belize-wildlife-adventures",
    title: "Wildlife Encounters in Belize: What to Expect",
    date: "January 22, 2025",
    category: "Nature",
    excerpt:
      "From jaguars prowling jungle reserves to whale sharks threading through Caribbean waters, Belize punches well above its weight when it comes to wildlife encounters.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&fit=crop",
    content: `
      <p>Belize is roughly the size of New Hampshire but contains extraordinary biodiversity. About 60% of the country's land is protected rainforest, and the marine reserve network is one of the most extensive in the Caribbean.</p>
      <h3>Whale Sharks at Gladden Spit</h3>
      <p>Between March and June each year, whale sharks gather at Gladden Spit, a remote section of the outer reef, to feed on snapper spawn. Swimming alongside the ocean's largest fish — some measuring 40 feet long — is a genuinely transcendent experience.</p>
      <p>This is a seasonal event that requires advance planning. Gladden Spit is accessible by boat from Placencia or Hopkins, about 3 hours south of San Pedro. We can help coordinate multi-day itineraries that include this once-in-a-lifetime encounter.</p>
      <h3>Manatee Watching</h3>
      <p>The waters around Ambergris Caye are home to a healthy population of West Indian manatees. These gentle giants feed on seagrass in the shallow lagoons behind the island and are frequently encountered on boat tours.</p>
      <p>Snorkelling with manatees is one of our most popular excursions. They're surprisingly curious animals and will often approach boats and snorkellers on their own terms.</p>
      <h3>The Jungle Interior</h3>
      <p>Day trips from San Pedro can reach mainland Belize and the Cayo District's jungle reserves. Cockscomb Basin Wildlife Sanctuary is the world's first jaguar reserve — while a wild jaguar sighting is never guaranteed, the birdwatching is extraordinary year-round.</p>
      <h3>Crocodiles and Howler Monkeys</h3>
      <p>In the mangrove lagoons just behind Ambergris Caye, Morelet's crocodiles bask on fallen logs. Evening boat tours into the lagoon are a popular activity, spotting crocodiles by torchlight. Howler monkeys, though mainland animals, can be heard on day tours to Lamanai and other jungle sites.</p>
    `,
  },
  {
    id: 6,
    slug: "best-time-to-visit-belize",
    title: "Best Time to Visit Belize: A Season-by-Season Guide",
    date: "January 5, 2025",
    category: "Travel Tips",
    excerpt:
      "Belize enjoys year-round sunshine, but each season brings different experiences. Here's how to choose the best time for your perfect Belizean escape.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&auto=format&fit=crop",
    content: `
      <p>Belize sits squarely in the tropics, which means warm temperatures and plentiful sunshine throughout the year. But Belize's climate does vary meaningfully by season, and different times of year suit different travel priorities.</p>
      <h3>Dry Season (November to April)</h3>
      <p>This is Belize's peak tourist season, and for good reason. The dry season brings consistent sunshine, calm seas, and minimal rainfall. Diving visibility is at its best — often exceeding 100 feet. Snorkelling, sailing, and beach days are all exceptional during this period.</p>
      <p>The tradeoff is price and crowds. December through February is peak peak season, with resort rates at their highest and popular dive sites busier than usual. Book well in advance if you're planning a Christmas or New Year visit.</p>
      <h3>Shoulder Season (May to June)</h3>
      <p>May and June offer an excellent balance. Rains are beginning to arrive but are generally manageable — typically afternoon showers rather than all-day downpours. Tourist crowds have thinned, and room rates drop meaningfully. This is also whale shark season at Gladden Spit.</p>
      <h3>Green Season (July to October)</h3>
      <p>The green season brings higher rainfall and the occasional tropical storm, but also Belize's richest landscapes, emptiest beaches, and lowest prices. Lobster season opens in July — a reason in itself to visit. Dive sites are quieter and rates at Mata Rocks are at their most competitive.</p>
      <h3>Our Recommendation</h3>
      <p>For the ideal combination of weather, value, and activity, we recommend March, April, or May. The dry season's best diving and beach conditions persist, while shoulder season brings slightly fewer crowds. Contact our reservations team to find the best rates for your preferred travel dates.</p>
    `,
  },
]

const BlogPage = () => {
  const [activePost, setActivePost] = useState(blogPosts[0])
  const contentRef = useRef(null)

  const handlePostClick = post => {
    setActivePost(post)
    // Scroll to content on mobile after state update
    if (typeof window !== "undefined" && window.innerWidth <= 900 && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  return (
    <Layout>
      <Seo
        title="Mata Rocks Resort | Blog – Stories from Belize"
        description="Discover travel tips, adventure guides, food stories, and insider knowledge about Ambergris Caye and Belize from the team at Mata Rocks Resort."
      />
      <div className="blog-page">
        {/* Hero Banner */}
        <div className="blog-hero">
          <div className="blog-hero__overlay" />
          <div className="blog-hero__content">
            <span className="blog-hero__eyebrow">The Mata Rocks Journal</span>
            <h1 className="blog-hero__title">Stories from Belize</h1>
            <p className="blog-hero__subtitle">
              Travel guides, adventure stories, and insider knowledge from the heart of the Caribbean
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="blog-layout">
          {/* Left Sidebar */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar__inner">
              <h2 className="blog-sidebar__heading">All Articles</h2>
              <ul className="blog-sidebar__list">
                {blogPosts.map(post => (
                  <li
                    key={post.id}
                    className={`blog-sidebar__item ${activePost.id === post.id ? "blog-sidebar__item--active" : ""}`}
                    onClick={() => handlePostClick(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === "Enter" && handlePostClick(post)}
                    aria-label={`Read ${post.title}`}
                  >
                    <span className="blog-sidebar__category">{post.category}</span>
                    <span className="blog-sidebar__item-title">{post.title}</span>
                    <span className="blog-sidebar__item-date">{post.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Content Panel */}
          <main className="blog-content" id="blog-main-content" ref={contentRef}>
            <article className="blog-article" key={activePost.id}>
              <div className="blog-article__image-wrap">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="blog-article__image"
                />
                <div className="blog-article__image-overlay" />
              </div>

              <div className="blog-article__body">
                <div className="blog-article__meta">
                  <span className="blog-article__category">{activePost.category}</span>
                  <span className="blog-article__sep">·</span>
                  <span className="blog-article__date">{activePost.date}</span>
                  <span className="blog-article__sep">·</span>
                  <span className="blog-article__read-time">{activePost.readTime}</span>
                </div>

                <h2 className="blog-article__title">{activePost.title}</h2>
                <p className="blog-article__excerpt">{activePost.excerpt}</p>

                <div
                  className="blog-article__content"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />

                <div className="blog-article__footer">
                  <div className="blog-article__divider" />
                  <p className="blog-article__cta-text">
                    Ready to experience Belize for yourself?
                  </p>
                  <a
                    href="https://us2.cloudbeds.com/en/reservation/Ii3x4t?currency=usd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-article__cta-btn"
                    id="blog-book-now-btn"
                  >
                    Book Your Stay at Mata Rocks
                  </a>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
