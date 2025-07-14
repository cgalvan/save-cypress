import "./App.css";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import {
  CalendarDays,
  Files,
  //Lightbulb,
  Mail,
  Users,
  Megaphone,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const emailAddresses: string[] = [
  "bruce.gearing@leanderisd.org",
  "kristen.alex@leanderisd.org",
  "sade.fashokun@leanderisd.org",
  "nekosi.nelson@leanderisd.org",
  "trish.bode@leanderisd.org",
  "paul.gauthier@leanderisd.org",
  "gloria.dholakia@leanderisd.org",
  "christine.mauer@leanderisd.org",
  "francesca.romans@leanderisd.org",
  "anna.smith@leanderisd.org",
  "governance.team@leanderisd.org",
  "sarah.grissom@leanderisd.org",
  "shawn.swisher@leanderisd.org",
  "crestina.hardie@leanderisd.org",
  "pete.pape@leanderisd.org",
  "angela.hodges@leanderisd.org",
];

const emailSubjects: string[] = [
  "Keep Cypress Open: Preserve Our Community's Future",
  "Defend Cypress: A School Worth Saving",
  "Protect Cypress Elementary: A Pillar of Our Community",
  "Save Cypress School: A Vital Educational Resource",
  "Cypress Deserves a Future: Reconsider the Closure",
  "Keep Cypress Elementary Thriving: Say No to Closure",
  "Don't Close Cypress: Support Our Students and Families",
  "Closing Cypress is a Mistake: Preserve Our School",
  "Let's Stand Together to Keep Cypress Open",
  "Closing Cypress Harms Our Community: Let's Find a Better Way",
  "Preserve Cypress Elementary: A High-Impact School for Students",
  "Reconsider the Plan: Keep Cypress Open for Our Community",
  "Save Cypress School: A Community's Lifeline",
  "A United Voice for Cypress: Say No to Closure",
  "Don't Let Cypress Close: Support Our School's Future",
];

const getRandomSubject = (): string => {
  const index = Math.floor(Math.random() * emailSubjects.length);
  return emailSubjects[index];
};

const emailTemplate = `Dear Members of the LISD Board,

I am writing to express deep concern over the proposed closure of Cypress Elementary School due to low enrollment numbers. While we understand the challenges of maintaining operations amid changing demographics and budgetary pressures, I urge you to consider the broader value and unique strengths our school brings to students, families, and the community as a whole. Please keep Cypress open!

Cypress is far more than an enrollment statistic. It is a vibrant and supportive community where students are known, valued, and nurtured. Families choose our school not just for convenience, but for the connection they feel with teachers, staff, and one another. This sense of belonging is irreplaceable and has a lasting impact on student well-being and success. Our Cypress community is a lifeline to our students, teachers, and families.

Beyond community, our school has demonstrated strong programmatic success. Our news broadcasting program (Cheetah News), annual spring performing arts programs, nationally ranked Destination Imagination team, Spanish volunteer program, beloved PTA community programs such as Multicultural Night, Fall Fest, and STEM night have not only enriched students’ academic lives but have also earned recognition and positive outcomes. These programs are thriving because they are supported by a dedicated team of educators and supportive families who believe in the mission of empowering every child to reach their potential.

Most importantly, we believe in the potential of our school to grow and adapt. We are already seeing early signs of renewed interest from prospective families from surrounding schools who toured our campus in the spring specifically because of our strong reputation. The foundation is in place—what we need now is the time and support to build on that momentum.

Closing our school would not only displace students and families but would also dismantle a strong educational environment that cannot be easily replicated. We respectfully ask that the Board keep Cypress OPEN and work with us to explore creative solutions, partnerships, or a phased improvement plan that allows us to continue serving the community.

Sincerely,

[YOUR NAME HERE]
`;
const mailToLink = `mailto:${emailAddresses.join(
  ","
)}?subject=${encodeURIComponent(getRandomSubject())}&body=${encodeURIComponent(
  emailTemplate
)}`;

// Images from board meetings, rallies, etc...
const photos = [
  "/images/IMG_5797.JPEG",
  "/images/IMG_1028.jpg",
  "/images/IMG_1030.jpg",
  "/images/IMG_1032.jpg",
  "/images/IMG_1035.jpg",
  "/images/IMG_1037.jpg",
  "/images/IMG_1039.jpg",
  "/images/IMG_1041.jpg",
  "/images/IMG_1027.jpg",
  "/images/IMG_1029.jpg",
  "/images/IMG_1031.jpg",
  "/images/IMG_1034.jpg",
  "/images/IMG_1036.jpg",
  "/images/IMG_1038.jpg",
  "/images/IMG_1040.jpg",
  "/images/IMG_1042.jpg",
  "/images/IMG_9491.jpg",
  "/images/IMG_1840.JPEG",
  "/images/IMG_1841.JPEG",
  "/images/IMG_1842.JPEG",
  "/images/IMG_1844.JPEG",
  "/images/IMG_1845.JPEG",
  "/images/IMG_1846.JPEG",
  "/images/IMG_1847.JPEG",
  "/images/IMG_1243.jpg",
  "/images/IMG_1244.jpg",
  "/images/IMG_1245.jpg",
  "/images/IMG_1246.jpg",
  "/images/IMG_1247.jpg",
  "/images/IMG_1248.jpg",
  "/images/IMG_1250.jpg",
  "/images/IMG_1251.jpg",
  "/images/IMG_1252.jpg",
  "/images/IMG_1253.jpg",
  "/images/IMG_1254.jpg",
  "/images/IMG_1255.jpg",
  "/images/IMG_9512.jpg",
];

function App() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  // Show a top banner whenever a board meeting stream is live
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();

      // Update this for any future board meetings
      const meetingStart = new Date("2025-07-17T18:10:00-05:00"); // 7/17, 6:10pm CST
      const meetingEnd = new Date("2025-07-18T02:00:00-05:00"); // 7/18, 2:00am CST

      setShowBanner(now >= meetingStart && now <= meetingEnd);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        {showBanner && (
          <div className="bg-red-600 text-white text-center py-2 px-4">
            📺 The LISD Board Meeting is live now!&nbsp;
            <a
              href="https://www.leanderisd.org/boardlivestream"
              target="_blank"
              className="underline font-semibold hover:text-gray-100"
            >
              Watch the live stream
            </a>
          </div>
        )}
        <div className="p-6 md:p-12">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              Save Cypress Elementary
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              As many of you have heard, the LISD Board is considering closing
              our campus to be repurposed in 2026-2027. We are fighting for our
              school and need your help.
            </p>
            <p className="text-lg max-w-2xl mx-auto">
              Learn how to get involved and help us protect the future of our
              children.
            </p>
          </header>

          <section className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-semibold mb-2">
                  Email the School Board
                </h2>
                <p className="mb-4">
                  Use our prepared letter with any added personal touches or
                  stories (and please replace with your name at the bottom).
                </p>
                <Button asChild>
                  <a href={mailToLink}>Send an Email</a>
                </Button>
              </CardContent>
            </Card>

            {/* UNCOMMENT ME ONCE WE HAVE THE GOOGLE FORM FOR IDEAS!
          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <Lightbulb className="mx-auto mb-4 h-10 w-10 text-blue-600" />
              <h2 className="text-xl font-semibold mb-2">Submit Ideas</h2>
              <p className="mb-4">
                If you have any data/research you'd like to share with us, or
                even general comments/ideas, please share them with us here!
              </p>
              <Button asChild>
                <a href="TBD">Submit Idea</a>
              </Button>
            </CardContent>
          </Card>
          */}

            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-semibold mb-2">
                  Join the Community Group
                </h2>
                <p className="mb-4">
                  Stay informed and participate in meetings, rallies, and
                  planning sessions.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.facebook.com/share/1LGMSUc8BV/?mibextid=wwXlfr"
                    target="_blank"
                    className="text-blue-700 hover:text-blue-500 flex items-center"
                  >
                    <img
                      src="/icons/Facebook_Logo_Primary.png"
                      alt="Facebook"
                      className="h-10 w-10 mr-5"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/cypresselempta"
                    target="_blank"
                    className="text-pink-600 hover:text-pink-400 flex items-center"
                  >
                    <img
                      src="/icons/Instagram_Glyph_Gradient.svg"
                      alt="Instagram"
                      className="h-10 w-10 mr-5"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <Megaphone className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-semibold mb-2">Spread the Word</h2>
                <p className="mb-4">
                  Share our message on social media, talk to neighbors, and
                  rally support.
                </p>
                <img src="/delay_vote.png" alt="SupportCypressFlyer"></img>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <Files className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-semibold mb-2">
                  District Proposal
                </h2>
                <p className="mb-4">
                  These are the long-range paths proposed by the district on May
                  29th, 2025
                </p>
                <Button asChild>
                  <a
                    href="https://drive.google.com/file/d/1ph85i4pAZ7lAlE-F1SElR1YHIjj0SrKb/view"
                    target="_blank"
                  >
                    Open Slides
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12">
            <Card className="bg-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarDays className="h-6 w-6 text-blue-700 mr-2" />
                  <h2 className="text-2xl font-bold text-blue-700">
                    Upcoming Dates
                  </h2>
                </div>
                <div className="pl-4 border-l-4 border-blue-400 ml-4 text-gray-800 space-y-5">
                  <div>
                    <p>
                      <strong>LISD Board Meeting</strong>
                    </p>
                    <p>Thursday, July 17th</p>
                    <p>6:15pm (Doors open at 5:30pm)</p>
                    <p>CPMS Library</p>
                    <p>
                      <i>Sign-up link to speak will be posted once available</i>
                    </p>
                    <p>
                      <a
                        href="https://meetings.boardbook.org/Public/Agenda/795?meeting=695900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-500"
                      >
                        Agenda
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12">
            <Card className="bg-neutral-light">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                  Gallery
                </h2>
                <div ref={sliderRef} className="keen-slider">
                  {photos.map((src, index) => (
                    <div key={index} className="keen-slider__slide">
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="rounded-lg shadow-md mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12">
            <Card className="bg-neutral-light">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                  About Us
                </h2>
                <p className="text-gray-800 max-w-2xl mx-auto">
                  Save Cypress is a community-led effort committed to protecting
                  Cypress Elementary School, a cornerstone of our neighborhood.
                  We believe that every child deserves the stability, resources,
                  and connections that only a thriving local school can provide.
                  Our goal is to bring families, educators, and community
                  members together to advocate for the future of Cypress,
                  ensuring it remains a safe and welcoming place where children
                  can grow, learn, and belong. By working together, we can
                  ensure that Cypress continues to serve as the heart of our
                  community for generations to come.
                </p>
                <p className="text-gray-800 max-w-2xl mx-auto">
                  <i>
                    Save Cypress is not affiliated with the Cypress Elementary
                    School PTA or administration.
                  </i>
                </p>
              </CardContent>
            </Card>
          </section>

          <footer className="text-center text-sm text-gray-500 mt-10">
            © {new Date().getFullYear()} Save Cypress
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
