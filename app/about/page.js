import Link from "next/link";
import PageHero from "../../components/PageHero";
import { MediaPlaceholder, PlanNote, Status } from "../../components/Placeholders";
import { Home, Sun, Landmark, ArrowRight } from "../../components/Icons";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About the project" title={<>Why I started <span className="hl">A Better Bay</span></>}>
        <p className="lede">
          My research question is simple: <strong>how do seasonal increases in tourism affect criminal activity in
          Bay County, Florida?</strong> Anyone who lives here or visits should care about the answer.
        </p>
      </PageHero>

      {/* Purpose */}
      <section className="section">
        <div className="container split split--top">
          <div className="prose">
            <div className="eyebrow">My purpose <Status kind="drafted" /></div>
            <h2>Awareness first, then <span className="hl">action</span></h2>
            <p>
              Panama City and the Beach attract thousands of visitors from all over the South every year. That&rsquo;s
              great for the economy and the reputation of the area, but it also creates some unwanted challenges.
              Overcrowding and rowdy behavior during Spring Break and summer can ruin the experience for residents and
              tourists alike.
            </p>
            <p>
              The purpose of this website is to <strong>raise awareness and educate</strong> people about how rising
              tourism is influencing crime in Bay County. I want to explain the evidence in a way that&rsquo;s easy for
              everyone to understand, and bring more attention to public safety.
            </p>
            <p>
              I&rsquo;m not trying to push tourists away. I want people to look at what&rsquo;s actually causing the
              issue instead of just going along with the general dislike a lot of locals have toward tourists. We can
              keep a fun, safe environment and still support the tourism industry.
            </p>
          </div>
          <MediaPlaceholder
            type="photo"
            rounded
            minHeight={440}
            title="My photo: Front Beach Road traffic and crowds at peak season"
            why="This shows what I mean by 'the circumstances of large crowds' right next to where I explain it."
          />
        </div>
      </section>

      {/* Personal anecdote */}
      <section className="section section--sand">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="eyebrow">My story <Status kind="planned" /></div>
          <h2>What I&rsquo;ve seen during <span className="hl">tourist season</span></h2>
          <p className="lede">
            Living in Bay County, I&rsquo;ve seen firsthand how much things can change when tourist season hits.
            [Placeholder: my story about the crime I witnessed during tourism season. Where it happened, what I saw,
            how it made me feel, and what I wish had been done differently.]
          </p>
          <PlanNote
            what="A short (150–200 word) story about the crime I witnessed during a busy tourist season and what it taught me."
            sources="My own experience, like I planned in my Design Plan."
            purpose="It makes the issue personal and shows I'm a local who has actually lived through it."
            goal="I want readers to connect it to their own experiences and look past just blaming tourists."
          />
        </div>
      </section>

      {/* Audience */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: "var(--space-6)" }}>
            <div className="eyebrow">Who I&rsquo;m talking to <Status kind="drafted" /></div>
            <h2>Everyone has a <span className="hl">role to play</span></h2>
          </div>
          <div className="cards">
            <article className="card">
              <span className="card-icon"><Home /></span>
              <h3>Longtime residents</h3>
              <p>
                People who&rsquo;ve lived here five years or longer and have seen tourism change over time. They&rsquo;re
                the most impacted and want to see their community stay safe.
              </p>
            </article>
            <article className="card">
              <span className="card-icon"><Landmark /></span>
              <h3>Officials &amp; law enforcement</h3>
              <p>
                They have the power to influence and change public safety policies. I want them to see where the
                current ones aren&rsquo;t working.
              </p>
            </article>
            <article className="card">
              <span className="card-icon"><Sun /></span>
              <h3>Visitors</h3>
              <p>
                Tourists play a vital role in making things safer through their actions and awareness. A lot of them
                just don&rsquo;t know the local ordinances.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section--tint">
        <div className="container split split--top">
          <div className="prose">
            <div className="eyebrow">My approach <Status kind="drafted" /></div>
            <h2>Evidence over <span className="hl">assumptions</span></h2>
            <p>
              I back up my claims with reliable sources: FBI crime data, official City of Panama City Beach
              ordinances, local news and scholarly research on tourism and crime. Everything is linked so you can see
              the evidence for yourself.
            </p>
            <ul>
              <li><strong>Serious, but friendly.</strong> This is a serious issue, but I want to encourage people to cooperate, not scare them.</li>
              <li><strong>Short and straightforward.</strong> No long paragraphs, just the important details.</li>
              <li><strong>Places you know.</strong> Photos of spots around Bay County so the info feels familiar.</li>
            </ul>
            <Link href="/the-facts" className="btn btn--navy">Read the facts <ArrowRight /></Link>
          </div>
          <MediaPlaceholder
            type="graphic"
            rounded
            minHeight={360}
            title="Infographic: crowds → conditions → crime"
            why="A simple 3-step graphic of my main point: big crowds create conditions (congestion, drinking, overworked police) that raise the risk of crime."
          />
        </div>
      </section>
    </>
  );
}
