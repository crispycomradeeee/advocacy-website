import Image from "next/image";
import Link from "next/link";
import AudienceTabs from "../components/AudienceTabs";
import { MediaPlaceholder, PlanNote } from "../components/Placeholders";
import { ArrowRight } from "../components/Icons";
import skywheel from "../public/images/skywheel-panama-city.jpg";

const SAFE = [
  { l: "S", t: "Stay Informed", d: "Keep up with public safety updates, especially before Spring Break and summer." },
  { l: "A", t: "Act Responsibly", d: "Look out for each other in big crowds, at night and on the beach." },
  { l: "F", t: "Follow Ordinances", d: "Know the seasonal rules like beach closures, curfews and alcohol limits." },
  { l: "E", t: "Engage Officials", d: "Report what you see and push our leaders to fix the policies that aren't working." },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <Image
            src={skywheel}
            alt="Aerial view of the SkyWheel at Pier Park in Panama City Beach, with high-rise hotels and the Gulf of Mexico behind it"
            priority
            placeholder="blur"
            sizes="100vw"
          />
        </div>
        <div className="container hero-content">
          <div className="eyebrow">Bay County, Florida</div>
          <h1 id="hero-title">A better Bay, improving the stay</h1>
          <p>
            Tourism is a huge part of what makes Bay County thrive, but every busy season also brings bigger crowds and
            new public safety challenges. I want to show how the two are connected and what we can do to keep this
            place fun and safe for everyone.
          </p>
          <div className="btn-row">
            <Link href="#mission" className="btn btn--light">My mission</Link>
            <Link href="/the-facts" className="btn btn--ghost-light">See the facts <ArrowRight /></Link>
          </div>
        </div>
        <span className="photo-credit">SkyWheel, Pier Park, Panama City Beach</span>
      </section>

      {/* ---------- MISSION BLOCK ---------- */}
      <section id="mission" aria-label="Mission" style={{ paddingBottom: "var(--space-8)" }}>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-panel">
              <p>
                My goal is to raise awareness about how seasonal tourism is influencing crime in Bay County, so locals,
                visitors and officials can work together to keep our community safe.
              </p>
              <MediaPlaceholder
                type="video"
                dark
                rounded
                minHeight={170}
                title="Tourist hotspots around the beach"
                why="I'll put together clips of the busiest spots, like Pier Park, Front Beach Road and the City Pier, so people can picture exactly where the crowds build up."
              />
            </div>
            <MediaPlaceholder
              type="photo"
              minHeight={420}
              title="My photo: a packed Panama City Beach during Spring Break"
              why="I want people to see how big the crowds really get. Locals will recognize it right away."
              style={{ border: 0, borderLeft: "2px dashed var(--sky-400)" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- THE ISSUE ---------- */}
      <section className="section section--tint" aria-labelledby="issue-title">
        <div className="container">
          <div className="center" style={{ marginBottom: "var(--space-6)" }}>
            <div className="eyebrow">The issue</div>
            <h2 id="issue-title">
              Tourism powers Bay County. <span className="hl">Crowds</span> test its safety.
            </h2>
            <p className="lede">
              Panama City Beach is an ever-growing vacation spot that attracts people from all over the South. Visitors
              support our attractions, restaurants and local businesses. But during Spring Break and summer, overcrowding
              and rowdy behavior can ruin the fun for residents and tourists alike.
            </p>
            <p className="lede">
              Something my research made clear: <strong>tourism itself doesn&rsquo;t necessarily cause crime</strong>.
              It&rsquo;s the circumstances that come with large crowds and increased activity. That difference matters
              if we actually want to fix the problem.
            </p>
          </div>

          <div className="stat-grid">
            <div className="stat">
              <div className="stat-num key">+7%</div>
              <p>
                Growth in Panama City Beach tourism from 2025, and it&rsquo;s still going up.{" "}
                <cite><a href="https://www.wjhg.com/" target="_blank" rel="noopener noreferrer">WJHG</a></cite>
              </p>
            </div>
            <div className="stat">
              <div className="stat-num">No. 1586</div>
              <p>
                PCB&rsquo;s ordinance for busy tourist periods, with nighttime closures of certain beach areas and
                curfews for unaccompanied minors.{" "}
                <cite><Link href="/the-facts#policies">City of PCB</Link></cite>
              </p>
            </div>
            <div className="stat">
              <div className="stat-num">36%</div>
              <p>
                The Panama City Police Department&rsquo;s overall Police Scorecard rating. A lot of categories are
                still incomplete because of missing data.{" "}
                <cite><Link href="/the-facts#scorecard">Police Scorecard</Link></cite>
              </p>
            </div>
            <div className="stat">
              <div className="stat-num" style={{ color: "var(--plan)" }}>[stat]</div>
              <p>
                <strong>Dev note:</strong> I&rsquo;ll add how reported crime changes in peak season vs. the off-season,
                using FBI crime data for Bay County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHO IT AFFECTS ---------- */}
      <section className="section" aria-labelledby="who-title">
        <div className="container">
          <div className="center" style={{ marginBottom: "var(--space-6)" }}>
            <div className="eyebrow">Why it matters</div>
            <h2 id="who-title">
              One coastline, <span className="hl">many people</span> who depend on it
            </h2>
          </div>
          <div className="split split--top">
            <MediaPlaceholder
              type="photo"
              rounded
              minHeight={460}
              title="My photo: locals and visitors at Pier Park or Russell-Fields Pier"
              why="A place people know and love. I want readers to remember this is what we're trying to protect."
            />
            <AudienceTabs />
          </div>
        </div>
      </section>

      {/* ---------- S.A.F.E. FRAMEWORK ---------- */}
      <section className="section section--tint" aria-labelledby="safe-title">
        <div className="container">
          <div className="split split--top">
            <h2 id="safe-title">
              Four steps toward
              <br />a <span className="hl">safer season</span>
            </h2>
            <div>
              <p className="lede" style={{ fontSize: "1.05rem" }}>
                Instead of just blaming tourists, I think everyone (locals, visitors and our leaders) has a part to play
                in keeping Bay County safe. That&rsquo;s what S.A.F.E. is about.
              </p>
              <div className="btn-row">
                <Link href="/what-you-can-do" className="btn btn--outline">See what you can do</Link>
                <Link href="/what-you-can-do" className="icon-circle" aria-label="Go to What You Can Do"><ArrowRight /></Link>
              </div>
            </div>
          </div>
          <ol className="safe-steps" style={{ listStyle: "none", padding: 0 }}>
            {SAFE.map((s, i) => (
              <li key={s.l} className="safe-step" style={{ "--i": i }}>
                <div className="safe-step-inner">
                  <span className="safe-letter" aria-hidden="true">{s.l}</span>
                  <small>0{i + 1}</small>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="section--navy cta-band" aria-labelledby="cta-title">
        <div className="container center">
          <div className="eyebrow">How you can help</div>
          <h2 id="cta-title">
            <span className="hl-dark">Join</span> the push for a better Bay
          </h2>
          <p>
            Report suspicious activity, follow and respect the ordinances, and stay informed. I also want our leaders
            to take a hard look at the policies that aren&rsquo;t doing enough.
          </p>
          <div className="cta-card">
            <MediaPlaceholder
              type="photo"
              title="My photo: a Bay County sunset or a family enjoying the beach"
              why="I want to end on a hopeful picture of the place I call home, so the call to action feels personal."
            />
            <div className="cta-overlay">
              <p>See what locals, visitors and officials can each do to keep Bay County safe for everyone.</p>
              <div className="btn-row">
                <Link href="/what-you-can-do#pledge" className="btn btn--navy">Take the pledge</Link>
                <Link href="/what-you-can-do#officials" className="btn btn--light">Contact officials</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL / ANECDOTE ---------- */}
      <section className="section section--tint after-cta" aria-labelledby="voice-title">
        <div className="container">
          <h2 id="voice-title" className="center" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--sky-600)" }}>
            Local voices
          </h2>
          <div style={{ maxWidth: 760, marginInline: "auto", marginTop: "var(--space-4)" }}>
            <MediaPlaceholder
              type="quote"
              rounded
              minHeight={200}
              title="Resident quote coming soon"
              why="I'm planning to interview a longtime local (5+ years) about how tourist season has changed our town."
            />
          </div>
          <div style={{ maxWidth: 760, marginInline: "auto" }}>
            <PlanNote
              title="Dev note: testimonials"
              what="2 or 3 short quotes from longtime residents, a local business owner and, if I can, a PCB officer. My own story from tourist season is on the About page."
              sources="Interviews I do myself (with permission) and quotes from WJHG and the Panama City News Herald."
              purpose="Real voices from real people go right alongside the numbers."
              goal="When locals see their own experiences here, they're more likely to trust the site and actually do something."
            />
          </div>
        </div>
      </section>
    </>
  );
}
