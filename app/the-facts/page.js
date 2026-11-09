import Link from "next/link";
import PageHero from "../../components/PageHero";
import SeasonChart from "../../components/SeasonChart";
import { MediaPlaceholder, PlanNote, Status } from "../../components/Placeholders";
import { External, ArrowRight } from "../../components/Icons";

export const metadata = { title: "The Facts" };

const SCORECARD = [
  { label: "Police Funding", score: 26 },
  { label: "Police Accountability", score: 30 },
  { label: "Police Violence", score: 45 },
  { label: "Approach to Law Enforcement", score: 44 },
];

export default function FactsPage() {
  return (
    <>
      <PageHero
        crumb="The Facts"
        eyebrow="Research & evidence"
        title={<>The <span className="hl">facts</span> behind the season</>}
        toc={[
          { href: "#tourism", label: "Tourism Growth" },
          { href: "#crime-data", label: "Crime Data" },
          { href: "#seasonal", label: "Seasonal Patterns" },
          { href: "#policies", label: "Local Policies" },
          { href: "#scorecard", label: "Police Scorecard" },
          { href: "#research", label: "Scholarly Research" },
        ]}
      >
        <p className="lede">
          Here&rsquo;s what my research found about tourism and crime in Bay County: the crime stats, the local laws
          and the scholarly findings, plus my reasoning behind each one.
        </p>
      </PageHero>

      <div className="container">
        {/* Tourism growth */}
        <section id="tourism" className="facts-section split split--top">
          <div className="prose">
            <div className="eyebrow">01 · Tourism growth <Status kind="drafted" /></div>
            <h2>An ever-growing <span className="hl">vacation spot</span></h2>
            <p>
              According to WJHG, tourism in Panama City Beach has grown <span className="key">7% from 2025</span>, and
              it&rsquo;s still increasing activity in the area. That&rsquo;s good for local businesses and the
              area&rsquo;s reputation. It also means a lot more people sharing the same beaches, roads and nightlife
              during the busiest weeks of the year.
            </p>
            <p>
              <strong>Why it matters:</strong> large crowds put overbearing stress on law enforcement and the services
              that keep everyone safe.
            </p>
            <PlanNote
              what="Yearly visitor numbers for the last 5–10 years, plus a month-by-month breakdown that shows the busy seasons."
              sources="WJHG and the Visit Panama City Beach / Bay County Tourist Development Council reports."
              purpose="To prove the tourism growth is real and measurable, not just something locals feel."
              goal="It sets up the idea that more people means more pressure on public safety."
            />
          </div>
          <MediaPlaceholder
            type="chart"
            rounded
            minHeight={380}
            title="Line chart: yearly visitors to Panama City Beach, 2016–2026"
            why="So readers can see the growth in a few seconds before they get to the crime data."
          />
        </section>

        {/* Crime data */}
        <section id="crime-data" className="facts-section">
          <div className="split split--top">
            <div className="prose">
              <div className="eyebrow">02 · Crime data <Status kind="planned" /></div>
              <h2>What the <span className="hl">FBI numbers</span> show</h2>
              <p>
                The FBI&rsquo;s crime data is one of my most important sources. It gives me reliable reported criminal
                activity, so I can look at actual patterns instead of making assumptions. This section will compare
                reported crime across different years and between busy and slow seasons.
              </p>
              <p>
                <a href="https://cde.ucr.cjis.gov/" target="_blank" rel="noopener noreferrer">
                  FBI Crime Data Explorer <External />
                </a>
              </p>
            </div>
            <PlanNote
              what="Stat cards and a bar chart of reported crimes (property crime, assault, disorderly conduct, DUI) for Panama City Beach PD, Panama City PD and the Bay County Sheriff's Office."
              sources="FBI Crime Data Explorer and the Florida Department of Law Enforcement (FDLE) crime reports."
              purpose="These are the official, verifiable numbers that back up my whole argument."
              goal="Shows locals and officials what kinds of crime go up during busy periods, so changes target the right problems."
            />
          </div>
          <div className="stat-grid" style={{ marginTop: "var(--space-5)" }}>
            {["Property crime", "Assaults", "Disorderly conduct", "DUI arrests"].map((label) => (
              <div className="stat" key={label}>
                <div className="stat-num" style={{ color: "var(--plan)" }}>[#]</div>
                <p><strong>{label}</strong>: reported in Bay County (dev note: adding FBI numbers)</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal */}
        <section id="seasonal" className="facts-section">
          <div className="prose" style={{ marginBottom: "var(--space-4)" }}>
            <div className="eyebrow">03 · Seasonal patterns <Status kind="drafted" /></div>
            <h2>When the crowds peak, <span className="hl">so does the pressure</span></h2>
            <p>
              Visitors pour into Bay County during Spring Break in March and again all summer. What I&rsquo;m looking
              at is whether reported crime follows that same pattern. From my research, it&rsquo;s not the tourists
              themselves causing the changes. It&rsquo;s the <strong>circumstances that come with large crowds</strong>:
              overcrowding, partying, nightlife and police being stretched thin.
            </p>
          </div>
          <SeasonChart />
        </section>

        {/* Policies */}
        <section id="policies" className="facts-section split split--top">
          <div className="prose">
            <div className="eyebrow">04 · Local policies <Status kind="drafted" /></div>
            <h2>Ordinance <span className="hl">No. 1586</span></h2>
            <p>
              Panama City Beach passed Ordinance No. 1586 to put restrictions in place during busy tourist periods,
              and it asks both residents and visitors to cooperate.
            </p>
            <ul>
              <li><strong>Nighttime closures</strong> of certain beach areas</li>
              <li><strong>Curfews for unaccompanied minors</strong></li>
              <li>More <strong>police presence</strong> during vacation season</li>
            </ul>
            <p>
              These measures show officials know about the problems that come with large crowds and are trying to
              address them. But they <strong>haven&rsquo;t been enough</strong> to fully keep peace and order. More
              investigation also needs to happen to figure out whether the rise in crime is really connected to
              tourism or to other circumstances. Knowing that would help everyone find better solutions.
            </p>
            <p>
              <a href="https://www.pcbgov.com/" target="_blank" rel="noopener noreferrer">
                City of Panama City Beach <External />
              </a>{" "}
              <span className="caption">(dev note: adding a direct link to the ordinance)</span>
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1rem" }}>Dev note: timeline of how PCB has handled peak-season crowds</h3>
            <ol className="timeline">
              <li><strong>[Year]: Spring Break alcohol ban on the beach</strong><span>Still need to confirm the date and details</span></li>
              <li><strong>[Year]: More police during the season</strong><span>Still need to find the staffing data</span></li>
              <li><strong>[Year]: Ordinance No. 1586 passed</strong><span>Nighttime beach closures, curfews for minors</span></li>
              <li><strong>Next: What changes could look like</strong><span>Links to my &ldquo;For Officials&rdquo; section</span></li>
            </ol>
            <p className="caption">I&rsquo;ll fill in the dates once I check them against City of PCB records.</p>
          </div>
        </section>

        {/* Scorecard */}
        <section id="scorecard" className="facts-section">
          <div className="split split--top">
            <div className="prose">
              <div className="eyebrow">05 · Police Scorecard <Status kind="drafted" /></div>
              <h2>How local policing <span className="hl">measures up</span></h2>
              <p>
                Police Scorecard gives the Panama City Police Department a <span className="key">36% overall</span> score
                compared with other cities under 50,000 people. A lot of the accountability categories say
                &ldquo;incomplete&rdquo; because the department <strong>hasn&rsquo;t provided enough data</strong>.
              </p>
              <p>
                I think that&rsquo;s a big deal. Without clear data, it&rsquo;s hard for residents to know if the extra
                police presence during tourist season is actually working. That&rsquo;s part of why I&rsquo;m asking
                for better reporting and reform.
              </p>
              <p>
                <a href="https://policescorecard.org/" target="_blank" rel="noopener noreferrer">
                  See the full Police Scorecard <External />
                </a>
              </p>
            </div>
            <div>
              <div className="scorecard">
                {SCORECARD.map((s) => (
                  <div className="score-item" key={s.label}>
                    <header><span>{s.label}</span><span>{s.score}%</span></header>
                    <div className="bar" aria-hidden="true"><i style={{ width: `${s.score}%` }} /></div>
                  </div>
                ))}
              </div>
              <p className="caption">
                Panama City Police Department section scores from Police Scorecard. Higher scores mean less spending on
                policing, less use of force, more accountability and fewer arrests for low-level offenses. Dev note:
                I&rsquo;ll double-check these numbers before the final draft.
              </p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="facts-section">
          <div className="split split--top">
            <div className="prose">
              <div className="eyebrow">06 · Scholarly research <Status kind="planned" /></div>
              <h2>It&rsquo;s <span className="hl">more complicated</span> than blaming tourists</h2>
              <p>
                The scholarly articles I read made me realize the relationship between tourism and crime is a lot more
                complicated than I first thought. Tourist areas can attract crimes of opportunity, visitors can be
                victims as well as offenders, and crowd conditions matter more than just how many people show up. This
                section will break down what that research means for Bay County.
              </p>
            </div>
            <PlanNote
              what="Short summaries of 2–3 scholarly studies on tourism and crime, each with a 'what this means for Bay County' takeaway."
              sources="The scholarly articles from my Project 2 research (library databases and Google Scholar)."
              purpose="It adds academic credibility and explains why the crowds, not the tourists, are the real issue."
              goal="I want readers to go from 'tourists are the problem' to 'we can manage this together.'"
            />
          </div>
          <div style={{ marginTop: "var(--space-5)" }}>
            <MediaPlaceholder
              type="map"
              rounded
              minHeight={320}
              title="Interactive map: where incidents happen most in Panama City Beach"
              why="It points out hotspots like Front Beach Road, Pier Park and the beach accesses so locals can connect the data to places they know."
            />
          </div>
          <div className="btn-row" style={{ marginTop: "var(--space-5)" }}>
            <Link href="/what-you-can-do" className="btn btn--navy">So what can we do? <ArrowRight /></Link>
            <Link href="/resources" className="btn btn--outline">See all my sources</Link>
          </div>
        </section>
      </div>
    </>
  );
}
