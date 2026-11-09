import PageHero from "../../components/PageHero";
import { MediaPlaceholder, PlanNote, Status } from "../../components/Placeholders";
import { External } from "../../components/Icons";

export const metadata = { title: "Resources" };

const SOURCES = [
  {
    type: "Government data",
    name: "FBI Crime Data Explorer",
    href: "https://cde.ucr.cjis.gov/",
    note: "Reported crime for Bay County. I use it for the Crime Data and Seasonal Patterns sections.",
  },
  {
    type: "Local law",
    name: "City of Panama City Beach: Ordinance No. 1586",
    href: "https://www.pcbgov.com/",
    note: "The restrictions for busy tourist periods, like nighttime beach closures and curfews for unaccompanied minors.",
  },
  {
    type: "Local news",
    name: "WJHG: Panama City Beach tourism growth",
    href: "https://www.wjhg.com/",
    note: "Reports that PCB tourism grew 7% from 2025. [Dev note: adding the direct article link and date.]",
  },
  {
    type: "Data project",
    name: "Police Scorecard: Panama City Police Department",
    href: "https://policescorecard.org/",
    note: "Scores the department on funding, violence, accountability and approach to law enforcement.",
  },
  {
    type: "State data",
    name: "Florida Department of Law Enforcement (FDLE): Crime in Florida",
    href: "https://www.fdle.state.fl.us/",
    note: "Dev note: I'm planning to use county crime data from here to double-check the FBI numbers.",
  },
  {
    type: "Tourism data",
    name: "Visit Panama City Beach",
    href: "https://www.visitpanamacitybeach.com/",
    note: "Dev note: I'm planning to pull visitor counts and seasonal trends from here.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero crumb="Resources" eyebrow="Sources & further reading" title={<>See the <span className="hl">evidence</span> for yourself</>}>
        <p className="lede">
          I want my claims to be backed up, so every source I used is linked here. You&rsquo;ll also find helpful
          links for residents and visitors.
        </p>
      </PageHero>

      <section className="section">
        <div className="container split split--top">
          <div>
            <div className="eyebrow">Works cited <Status kind="drafted" /></div>
            <h2>My <span className="hl">sources</span></h2>
            <ul className="source-list">
              {SOURCES.map((s) => (
                <li key={s.name}>
                  <div className="src-type">{s.type}</div>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"><strong>{s.name}</strong> <External /></a>
                  <p>{s.note}</p>
                </li>
              ))}
              <li>
                <div className="src-type">Scholarly research</div>
                <strong>[Scholarly articles on tourism and crime]</strong>
                <p>Dev note: adding the full MLA citations from my Project 2 research.</p>
              </li>
            </ul>
          </div>
          <div>
            <PlanNote
              title="Dev note: resources page"
              what="A full MLA works cited list, plus a 'Helpful links' section with safety alerts, non-emergency numbers, city council contacts and a visitor guide."
              sources="Every source I cite across the site."
              purpose="So readers can check my evidence themselves and find tools to take action."
              goal="It makes it easy to trust my claims and to actually follow through on the call to action."
            />
            <MediaPlaceholder
              type="video"
              rounded
              minHeight={260}
              title="Local news clip (WJHG) about Spring Break safety"
              why="A short, credible video for people who'd rather watch than read."
            />
          </div>
        </div>
      </section>
    </>
  );
}
