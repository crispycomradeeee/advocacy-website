import PageHero from "../../components/PageHero";
import PledgeForm from "../../components/PledgeForm";
import { MediaPlaceholder, PlanNote, Status } from "../../components/Placeholders";
import { Home, Sun, Landmark, Phone, External, Shield } from "../../components/Icons";

export const metadata = { title: "What You Can Do" };

function ActionBlock({ id, icon: Icon, eyebrow, title, what, how, why, status = "drafted", children }) {
  return (
    <section id={id} className="facts-section">
      <div className="split split--top">
        <div className="prose">
          <div className="eyebrow">{eyebrow} <Status kind={status} /></div>
          <h2 style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="card-icon" style={{ width: 56, height: 56, borderRadius: 16, display: "grid", placeItems: "center", background: "var(--sky-100)", color: "var(--navy-800)", flex: "none" }}>
              <Icon width={26} height={26} />
            </span>
            {title}
          </h2>
          <h3>What to do</h3>
          <ul>{what.map((w) => <li key={w}>{w}</li>)}</ul>
          <h3>How to do it</h3>
          {how}
          <h3>Why it matters</h3>
          <p>{why}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function ActionPage() {
  return (
    <>
      <PageHero
        crumb="What You Can Do"
        eyebrow="Call to action"
        title={<>Make the Bay <span className="hl">better</span>, together</>}
        toc={[
          { href: "#residents", label: "For Residents" },
          { href: "#visitors", label: "For Visitors" },
          { href: "#officials", label: "For Officials" },
          { href: "#pledge", label: "Take the Pledge" },
        ]}
      >
        <p className="lede">
          Keeping Bay County safe takes everyone. Here&rsquo;s how locals, tourists and officials can each make a
          change and help keep this place safer and more prosperous.
        </p>
      </PageHero>

      <div className="container">
        <ActionBlock
          id="residents"
          icon={Home}
          eyebrow="For residents"
          title="Speak up and stay informed"
          what={[
            "Report suspicious activity instead of assuming someone else will.",
            "Stay informed on public safety updates, especially before Spring Break and summer.",
            "Support local public safety efforts in your neighborhood.",
            "Look at what's really causing the problem instead of just blaming tourists.",
          ]}
          how={
            <p>
              Call <strong>911</strong> for emergencies. For non-emergencies, reach out to the{" "}
              <a href="https://www.baysomobile.org/" target="_blank" rel="noopener noreferrer">Bay County Sheriff&rsquo;s Office <External /></a>{" "}
              or the <a href="https://www.pcbgov.com/" target="_blank" rel="noopener noreferrer">Panama City Beach Police <External /></a>.
              [Dev note: adding the non-emergency numbers and a link to sign up for safety alerts.]
            </p>
          }
          why="Locals notice things visitors don't. Reporting what you see helps officers step in before small problems turn into big ones during the busiest weeks."
        >
          <MediaPlaceholder
            type="photo"
            rounded
            minHeight={400}
            title="My photo: a Bay County neighborhood near the beach"
            why="A reminder that keeping things safe starts on our own streets."
          />
        </ActionBlock>

        <ActionBlock
          id="visitors"
          icon={Sun}
          eyebrow="For visitors"
          title="Know the rules, enjoy the stay"
          what={[
            "Learn the seasonal ordinances before you come, like nighttime beach closures, curfews for minors and alcohol limits.",
            "Look out for your group and the people around you in crowded areas.",
            "Cooperate with local officers and beach safety staff.",
          ]}
          how={
            <p>
              Check the seasonal rules on the{" "}
              <a href="https://www.pcbgov.com/" target="_blank" rel="noopener noreferrer">City of Panama City Beach website <External /></a>.
              [Dev note: I&rsquo;m making a one-page &ldquo;Know Before You Go&rdquo; guide for visitors.]
            </p>
          }
          why="A lot of tourists break the rules just because they don't know them. Being informed keeps the fun going for everyone."
        >
          <MediaPlaceholder
            type="graphic"
            rounded
            minHeight={400}
            title="'Know Before You Go' visitor infographic"
            why="A quick visual of PCB's main seasonal rules that tourists can easily share."
          />
        </ActionBlock>

        <ActionBlock
          id="officials"
          icon={Landmark}
          eyebrow="For officials & law enforcement"
          title="Fix what isn't working"
          status="planned"
          what={[
            "Look at whether Ordinance No. 1586 and the extra police presence are actually reducing crime, using published data.",
            "Make crime and accountability data public and complete. A lot of the Police Scorecard categories are still incomplete.",
            "Look into whether the rise in crime is tied to tourism growth or to other local circumstances.",
            "[Dev note: adding 2–3 specific changes I'd recommend, based on my research.]",
          ]}
          how={
            <p>
              Residents can contact the Panama City Beach City Council and the Bay County Board of County
              Commissioners. [Dev note: adding the contact links and a short sample message people can use.]
            </p>
          }
          why="Officials already know there's a problem. Better data and smarter changes can turn that into real improvements in public safety."
        >
          <PlanNote
            what="Specific policy changes I'd recommend, each tied to evidence on The Facts page, plus a sample email to officials."
            sources="PCB Ordinance No. 1586, FBI crime data, Police Scorecard and scholarly research on managing crowds."
            purpose="It turns my research into realistic requests for the people who can actually change things."
            goal="I want those in positions of power to recognize where the current policies fall short and do something about it."
          />
        </ActionBlock>

        <section id="pledge" className="facts-section">
          <div className="split split--top">
            <div className="prose">
              <div className="eyebrow">Take the pledge <Status kind="drafted" /></div>
              <h2>I&rsquo;m in for a <span className="hl">better Bay</span></h2>
              <p>
                Add your name to show Bay County leaders that locals and visitors care about public safety and want
                to keep tourism strong. Every pledge is a small promise to help make each season safer.
              </p>
              <div className="card" style={{ background: "var(--sky-50)" }}>
                <span className="card-icon"><Shield /></span>
                <h3>Emergency? Call 911.</h3>
                <p>This pledge isn&rsquo;t a way to report a crime. Always contact law enforcement directly.</p>
                <p style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                  <Phone width={16} height={16} /> Non-emergency numbers: [dev note: adding these]
                </p>
              </div>
            </div>
            <div className="card">
              <PledgeForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
